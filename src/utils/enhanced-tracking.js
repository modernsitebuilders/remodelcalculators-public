/**
 * Enhanced Analytics Tracking System
 * Tracks user journey, scroll depth, time on page, form interactions
 */

const SHEETS_URL = 'https://script.google.com/macros/s/AKfycbx5t4jG0jb-8_mxf_f9jTQn2_ms7hLAXOh6gCDoiR5W0Yq-iTxc0iPtePt2zpTJdUG-/exec';

// Session tracking
let sessionData = {
  sessionId: generateSessionId(),
  startTime: Date.now(),
  pageViews: [],
  interactions: [],
  calculatorsUsed: new Set()
};

/**
 * Initialize all tracking
 */
export function initializeTracking() {
  trackPageView();
  initScrollTracking();
  initTimeTracking();
  initExitTracking();
  detectDeviceType();
  detectReferralSource();
  
  console.log('✅ Enhanced tracking initialized');
}

/**
 * Generate unique session ID
 */
function generateSessionId() {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * PAGE VIEW TRACKING
 */
function trackPageView() {
  const data = {
    type: 'page_view',
    sessionId: sessionData.sessionId,
    pageUrl: window.location.href,
    pagePath: window.location.pathname,
    pageTitle: document.title,
    referrer: document.referrer,
    timestamp: new Date().toISOString()
  };
  
  sessionData.pageViews.push({
    path: window.location.pathname,
    timestamp: Date.now()
  });
  
  sendToSheets(data);
  
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'page_view', {
      page_path: data.pagePath,
      page_title: data.pageTitle
    });
  }
}

/**
 * SCROLL DEPTH TRACKING
 */
function initScrollTracking() {
  const thresholds = [25, 50, 75, 100];
  const reached = new Set();
  
  function checkScroll() {
    const scrollPercent = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );
    
    thresholds.forEach(threshold => {
      if (scrollPercent >= threshold && !reached.has(threshold)) {
        reached.add(threshold);
        
        const data = {
          type: 'scroll_depth',
          sessionId: sessionData.sessionId,
          pageUrl: window.location.href,
          scrollDepth: threshold,
          timestamp: new Date().toISOString()
        };
        
        sendToSheets(data);
        
        if (typeof window.gtag !== 'undefined') {
          window.gtag('event', 'scroll', {
            event_category: 'engagement',
            event_label: `${threshold}%`,
            value: threshold
          });
        }
      }
    });
  }
  
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(checkScroll, 100);
  });
}

/**
 * TIME ON PAGE TRACKING
 */
function initTimeTracking() {
  const startTime = Date.now();
  
  function sendTimeOnPage() {
    const timeOnPage = Math.round((Date.now() - startTime) / 1000); // seconds
    
    if (timeOnPage > 5) { // Only track if > 5 seconds
      const data = {
        type: 'time_on_page',
        sessionId: sessionData.sessionId,
        pageUrl: window.location.href,
        timeOnPage: timeOnPage,
        timestamp: new Date().toISOString()
      };
      
      sendToSheets(data);
      
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', 'timing_complete', {
          event_category: 'engagement',
          name: 'time_on_page',
          value: timeOnPage
        });
      }
    }
  }
  
  // Track on page hide (user navigates away)
  window.addEventListener('beforeunload', sendTimeOnPage);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      sendTimeOnPage();
    }
  });
}

/**
 * EXIT PAGE TRACKING
 */
function initExitTracking() {
  window.addEventListener('beforeunload', () => {
    const data = {
      type: 'exit_page',
      sessionId: sessionData.sessionId,
      exitPage: window.location.href,
      totalPageViews: sessionData.pageViews.length,
      sessionDuration: Math.round((Date.now() - sessionData.startTime) / 1000),
      calculatorsUsed: Array.from(sessionData.calculatorsUsed),
      timestamp: new Date().toISOString()
    };
    
    // Use sendBeacon for reliable exit tracking
    const params = new URLSearchParams({ data: JSON.stringify(data) });
    navigator.sendBeacon(`${SHEETS_URL}?${params}`);
  });
}

/**
 * FORM/CALCULATOR INTERACTION TRACKING
 */
export function trackCalculatorStart(calculatorType) {
  const data = {
    type: 'calculator_start',
    sessionId: sessionData.sessionId,
    calculatorType: calculatorType,
    pageUrl: window.location.href,
    timestamp: new Date().toISOString()
  };
  
  sessionData.calculatorsUsed.add(calculatorType);
  sendToSheets(data);
  
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'calculator_start', {
      event_category: 'calculators',
      event_label: calculatorType
    });
  }
}

export function trackFieldInteraction(calculatorType, fieldName, fieldValue) {
  const data = {
    type: 'field_interaction',
    sessionId: sessionData.sessionId,
    calculatorType: calculatorType,
    fieldName: fieldName,
    fieldValue: typeof fieldValue === 'number' ? fieldValue : 'text',
    timestamp: new Date().toISOString()
  };
  
  sendToSheets(data);
}

export function trackCalculatorAbandonment(calculatorType, fieldsCompleted, totalFields) {
  const data = {
    type: 'calculator_abandonment',
    sessionId: sessionData.sessionId,
    calculatorType: calculatorType,
    fieldsCompleted: fieldsCompleted,
    totalFields: totalFields,
    completionRate: Math.round((fieldsCompleted / totalFields) * 100),
    timestamp: new Date().toISOString()
  };
  
  sendToSheets(data);
  
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'form_abandon', {
      event_category: 'calculators',
      event_label: calculatorType,
      value: Math.round((fieldsCompleted / totalFields) * 100)
    });
  }
}

/**
 * DEVICE TYPE DETECTION
 */
function detectDeviceType() {
  const ua = navigator.userAgent;
  let deviceType = 'desktop';
  
  if (/mobile/i.test(ua)) deviceType = 'mobile';
  else if (/tablet|ipad/i.test(ua)) deviceType = 'tablet';
  
  sessionData.deviceType = deviceType;
  
  const data = {
    type: 'session_info',
    sessionId: sessionData.sessionId,
    deviceType: deviceType,
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    userAgent: ua,
    timestamp: new Date().toISOString()
  };
  
  sendToSheets(data);
}

/**
 * REFERRAL SOURCE DETECTION
 */
function detectReferralSource() {
  const referrer = document.referrer;
  let source = 'direct';
  
  if (referrer) {
    if (referrer.includes('google')) source = 'google';
    else if (referrer.includes('bing')) source = 'bing';
    else if (referrer.includes('facebook')) source = 'facebook';
    else if (referrer.includes('twitter') || referrer.includes('t.co')) source = 'twitter';
    else source = 'referral';
  }
  
  sessionData.referralSource = source;
}

/**
 * CALCULATOR FLOW TRACKING
 */
export function trackCalculatorFlow(fromCalculator, toCalculator) {
  const data = {
    type: 'calculator_flow',
    sessionId: sessionData.sessionId,
    fromCalculator: fromCalculator,
    toCalculator: toCalculator,
    timestamp: new Date().toISOString()
  };
  
  sendToSheets(data);
  
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'calculator_navigation', {
      event_category: 'navigation',
      from_calculator: fromCalculator,
      to_calculator: toCalculator
    });
  }
}

/**
 * RESULT ACTIONS TRACKING
 */
export function trackResultAction(calculatorType, action) {
  const data = {
    type: 'result_action',
    sessionId: sessionData.sessionId,
    calculatorType: calculatorType,
    action: action, // 'copy', 'print', 'share', etc.
    timestamp: new Date().toISOString()
  };
  
  sendToSheets(data);
  
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'result_action', {
      event_category: 'engagement',
      event_label: action,
      calculator_type: calculatorType
    });
  }
}

/**
 * RETURN VISITOR DETECTION
 */
function isReturningVisitor() {
  const visited = localStorage.getItem('visited');
  if (visited) {
    return true;
  } else {
    localStorage.setItem('visited', 'true');
    return false;
  }
}

/**
 * Send data to Google Sheets
 */
function sendToSheets(data) {
  try {
    const enrichedData = {
      ...data,
      siteId: 'construction-calcs',
      deviceType: sessionData.deviceType,
      referralSource: sessionData.referralSource,
      isReturningVisitor: isReturningVisitor()
    };
    
    // Use GET with proper URL encoding
    const params = new URLSearchParams({
      data: JSON.stringify(enrichedData)
    });
    
    fetch(`${SHEETS_URL}?${params.toString()}`, {
      method: 'GET'
    }).catch(err => console.warn('Tracking error:', err));
    
  } catch (err) {
    console.warn('Tracking error:', err);
  }
}

// Initialize on load
if (typeof window !== 'undefined') {
  window.addEventListener('load', initializeTracking);
}