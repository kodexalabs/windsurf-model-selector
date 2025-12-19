import { test, expect } from '@playwright/test';

// Configuration for screenshots
const DESKTOP_VIEWPORT = { width: 1920, height: 1080 };
const MOBILE_VIEWPORT = { width: 375, height: 667 };
const HTML_FILE_PATH = 'file:///d:/dev/CascadeProjects/windsurf-model-selector/index.html';

test.describe('Windsurf Model Selector Screenshots', () => {
  
  test('desktop - main interface', async ({ page }) => {
    await page.setViewportSize(DESKTOP_VIEWPORT);
    await page.goto(HTML_FILE_PATH);
    
    // Wait for page to fully load
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000); // Allow animations to settle
    
    // Take full page screenshot
    await page.screenshot({
      path: 'screenshots/desktop/main-interface.png',
      fullPage: true
    });
  });

  test('desktop - with sample data', async ({ page }) => {
    await page.setViewportSize(DESKTOP_VIEWPORT);
    await page.goto(HTML_FILE_PATH);
    
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
    
    // Fill in sample task
    await page.fill('textarea[placeholder*="Describe your task"]', 
      'Create a responsive dashboard with real-time data visualization using React and TypeScript');
    
    // Click analyze button
    await page.click('button:has-text("Analyze")');
    
    // Wait for analysis to complete
    await page.waitForTimeout(3000);
    
    // Take screenshot of results
    await page.screenshot({
      path: 'screenshots/desktop/analysis-results.png',
      fullPage: true
    });
  });

  test('desktop - settings modal', async ({ page }) => {
    await page.setViewportSize(DESKTOP_VIEWPORT);
    await page.goto(HTML_FILE_PATH);
    
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
    
    // Open settings
    await page.click('button:has-text("Settings")');
    
    // Wait for modal to appear
    await page.waitForSelector('.modal-overlay.active');
    await page.waitForTimeout(500);
    
    // Take screenshot of settings modal
    await page.screenshot({
      path: 'screenshots/desktop/settings-modal.png',
      fullPage: false
    });
  });

  test('mobile - main interface', async ({ page }) => {
    await page.setViewportSize(MOBILE_VIEWPORT);
    await page.goto(HTML_FILE_PATH);
    
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
    
    // Take mobile screenshot
    await page.screenshot({
      path: 'screenshots/mobile/main-interface.png',
      fullPage: true
    });
  });

  test('mobile - with sample data', async ({ page }) => {
    await page.setViewportSize(MOBILE_VIEWPORT);
    await page.goto(HTML_FILE_PATH);
    
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
    
    // Fill in sample task (mobile)
    await page.fill('textarea[placeholder*="Describe your task"]', 
      'Build a mobile app with offline support');
    
    // Click analyze button
    await page.click('button:has-text("Analyze")');
    
    // Wait for analysis
    await page.waitForTimeout(3000);
    
    // Take mobile screenshot
    await page.screenshot({
      path: 'screenshots/mobile/analysis-results.png',
      fullPage: true
    });
  });

  test('mobile - navigation tabs', async ({ page }) => {
    await page.setViewportSize(MOBILE_VIEWPORT);
    await page.goto(HTML_FILE_PATH);
    
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
    
    // Click on different tabs to show mobile navigation
    await page.click('button:has-text("History")');
    await page.waitForTimeout(500);
    
    await page.screenshot({
      path: 'screenshots/mobile/history-tab.png',
      fullPage: false
    });
    
    // Click calculator tab
    await page.click('button:has-text("Calculator")');
    await page.waitForTimeout(500);
    
    await page.screenshot({
      path: 'screenshots/mobile/calculator-tab.png',
      fullPage: false
    });
  });

});
