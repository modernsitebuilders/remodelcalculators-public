#!/usr/bin/env node

/**
 * Advanced IndexNow Submission Script
 * Dynamically pulls URLs from your sitemap for accurate submissions
 * Usage: node scripts/submit-indexnow-advanced.js [all|calculators|main|blog|url]
 */

const INDEXNOW_KEY = '85d27a70d7aa4d84a8eed19e81147a90';
const SITE_URL = 'https://remodelcalculators.com';

// Import your sitemap function (if running from project root)
// This requires the script to be run with proper module resolution
async function getSitemapUrls() {
  try {
    // Try to dynamically import the sitemap
    const sitemap = await import('../src/app/sitemap.js');
    const entries = await sitemap.default();
    return entries.map(entry => entry.url);
  } catch (error) {
    console.error('Could not load sitemap dynamically. Using static URLs.');
    return null;
  }
}

// Get blog posts directly from data file
async function getBlogPosts() {
  try {
    const blogData = await import('../src/data/blogPosts.js');
    const posts = blogData.blogPosts || blogData.default;
    return posts.map(post => `${SITE_URL}/blog/${post.slug}`);
  } catch (error) {
    console.error('Could not load blog posts:', error.message);
    return [];
  }
}

// Static fallback URLs (matches sitemap.js exactly)
const STATIC_URLS = {
  calculators: [
    `${SITE_URL}/concrete-calculator`,
    `${SITE_URL}/deck-stain-calculator`,
    `${SITE_URL}/drywall-calculator`,
    `${SITE_URL}/exterior-paint-calculator`,
    `${SITE_URL}/fence-calculator`,
    `${SITE_URL}/flooring-calculator`,
    `${SITE_URL}/interior-paint-calculator`,
    `${SITE_URL}/mulch-calculator`,
    `${SITE_URL}/roofing-calculator`,
    `${SITE_URL}/siding-calculator`,
  ],
  main: [
    `${SITE_URL}/`,
    `${SITE_URL}/blog`,
    `${SITE_URL}/about`,
    `${SITE_URL}/contact`,
    `${SITE_URL}/privacy-policy`,
  ],
};

async function submitToIndexNow(urls) {
  if (!urls || urls.length === 0) {
    console.error('✗ No URLs to submit');
    return false;
  }

  const payload = {
    host: 'remodelcalculators.com',
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  };

  console.log(`\n📤 Submitting ${urls.length} URLs to IndexNow...`);
  
  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      console.log('✓ Successfully submitted to IndexNow');
      console.log(`  Status: ${response.status}`);
      console.log(`  URLs submitted: ${urls.length}`);
      if (urls.length <= 15) {
        urls.forEach(url => console.log(`  - ${url}`));
      } else {
        console.log(`  (showing first 10 of ${urls.length})`);
        urls.slice(0, 10).forEach(url => console.log(`  - ${url}`));
        console.log(`  ... and ${urls.length - 10} more`);
      }
      return true;
    } else {
      const errorText = await response.text();
      console.error('✗ IndexNow API error:', response.status);
      console.error('  Details:', errorText);
      return false;
    }
  } catch (error) {
    console.error('✗ Submission error:', error.message);
    return false;
  }
}

async function main() {
  const command = process.argv[2] || 'help';

  console.log('🔍 IndexNow Advanced Submission Tool');
  console.log('======================================');

  // Try to load sitemap dynamically
  const sitemapUrls = await getSitemapUrls();
  
  if (sitemapUrls) {
    console.log(`✓ Loaded ${sitemapUrls.length} URLs from sitemap`);
  } else {
    console.log('ℹ Using static URL lists');
  }
  console.log('');

  switch (command) {
    case 'all':
      console.log('Mode: Submit ALL pages');
      if (sitemapUrls) {
        await submitToIndexNow(sitemapUrls);
      } else {
        const allUrls = [...STATIC_URLS.main, ...STATIC_URLS.calculators];
        await submitToIndexNow(allUrls);
      }
      break;

    case 'calculators':
      console.log('Mode: Submit calculator pages only');
      if (sitemapUrls) {
        const calcUrls = sitemapUrls.filter(url => 
          url.includes('-calculator') && !url.includes('/blog/')
        );
        await submitToIndexNow(calcUrls);
      } else {
        await submitToIndexNow(STATIC_URLS.calculators);
      }
      break;

    case 'main':
      console.log('Mode: Submit main pages only');
      if (sitemapUrls) {
        const mainUrls = sitemapUrls.filter(url => {
          const path = url.replace(SITE_URL, '');
          return ['/', '/blog', '/about', '/contact', '/privacy-policy'].includes(path);
        });
        await submitToIndexNow(mainUrls);
      } else {
        await submitToIndexNow(STATIC_URLS.main);
      }
      break;

    case 'blog':
      console.log('Mode: Submit blog pages only');
      
      // Try to load blog posts directly from data file
      const blogPostUrls = await getBlogPosts();
      
      if (blogPostUrls && blogPostUrls.length > 0) {
        blogPostUrls.push(`${SITE_URL}/blog`); // Include blog index
        console.log(`Found ${blogPostUrls.length - 1} blog posts`);
        await submitToIndexNow(blogPostUrls);
      } else if (sitemapUrls) {
        // Fallback to sitemap if blog posts loading failed
        const blogUrls = sitemapUrls.filter(url => url.includes('/blog/'));
        blogUrls.push(`${SITE_URL}/blog`);
        await submitToIndexNow(blogUrls);
      } else {
        console.error('✗ Could not load blog posts');
        console.log('  Make sure /src/data/blogPosts.js exists and exports blogPosts array');
      }
      break;

    case 'url':
      const customUrl = process.argv[3];
      if (!customUrl) {
        console.error('✗ Error: Please provide a URL');
        console.log('Usage: node scripts/submit-indexnow.js url https://remodelcalculators.com/page');
        process.exit(1);
      }
      console.log('Mode: Submit single URL');
      await submitToIndexNow([customUrl]);
      break;

    case 'verify':
      console.log('Mode: Verify sitemap URLs match IndexNow submission');
      
      // Try to get blog posts directly
      const verifyBlogUrls = await getBlogPosts();
      
      if (sitemapUrls) {
        console.log(`\nSitemap contains ${sitemapUrls.length} URLs:`);
        console.log(`  - Main pages: ${sitemapUrls.filter(u => !u.includes('-calculator') && !u.includes('/blog/')).length}`);
        console.log(`  - Calculators: ${sitemapUrls.filter(u => u.includes('-calculator')).length}`);
        console.log(`  - Blog posts: ${sitemapUrls.filter(u => u.includes('/blog/') && u !== `${SITE_URL}/blog`).length}`);
      } else {
        console.log('Could not load sitemap. Using static lists:');
        console.log(`  - Main pages: ${STATIC_URLS.main.length}`);
        console.log(`  - Calculators: ${STATIC_URLS.calculators.length}`);
        if (verifyBlogUrls && verifyBlogUrls.length > 0) {
          console.log(`  - Blog posts: ${verifyBlogUrls.length} (loaded from data file)`);
        } else {
          console.log(`  - Blog posts: Not available`);
        }
      }
      break;

    case 'help':
    default:
      console.log('Usage:');
      console.log('  node scripts/submit-indexnow.js all          - Submit all pages from sitemap');
      console.log('  node scripts/submit-indexnow.js calculators  - Submit calculator pages only');
      console.log('  node scripts/submit-indexnow.js main         - Submit main pages only');
      console.log('  node scripts/submit-indexnow.js blog         - Submit all blog posts');
      console.log('  node scripts/submit-indexnow.js url <URL>    - Submit a specific URL');
      console.log('  node scripts/submit-indexnow.js verify       - Check sitemap URLs');
      console.log('\nExamples:');
      console.log('  node scripts/submit-indexnow.js all');
      console.log('  node scripts/submit-indexnow.js blog');
      console.log('  node scripts/submit-indexnow.js url https://remodelcalculators.com/concrete-calculator');
      break;
  }
}

main().catch(console.error);