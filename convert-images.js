const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function convertImage(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .resize(1200, 630, {
        fit: 'cover',
        position: 'center'
      })
      .jpeg({
        quality: 80,
        progressive: true,
        mozjpeg: true
      })
      .toFile(outputPath);
    
    const stats = fs.statSync(outputPath);
    const fileSizeKB = (stats.size / 1024).toFixed(2);
    console.log(`✅ Converted: ${path.basename(outputPath)} (${fileSizeKB}KB)`);
  } catch (error) {
    console.error(`❌ Error converting ${inputPath}:`, error.message);
  }
}

async function convertAllImages() {
  console.log('🔄 Converting PNG images to optimized JPG format...\n');

  // Root level images
  const rootImages = [
    { input: 'public/og-image.png', output: 'public/og-image.jpg' },
    { input: 'public/og-image-blog.png', output: 'public/og-image-blog.jpg' }
  ];

  // Calculator images
  const calculatorImages = [
    'og-concrete',
    'og-roofing',
    'og-paint',
    'og-flooring',
    'og-drywall',
    'og-mulch',
    'og-exterior-paint',
    'og-siding',
    'og-fence',
    'og-deck-stain',
    'og-interior-paint'
  ].map(name => ({
    input: `public/calculators/${name}.png`,
    output: `public/calculators/${name}.jpg`
  }));

  const allImages = [...rootImages, ...calculatorImages];

  for (const { input, output } of allImages) {
    if (fs.existsSync(input)) {
      await convertImage(input, output);
    } else {
      console.log(`⚠️  Skipped: ${input} (file not found)`);
    }
  }

  console.log('\n✨ Conversion complete!');
  console.log('\n📝 You can now delete the original PNG files');
}

convertAllImages().catch(console.error);