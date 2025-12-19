import { test, expect } from '@playwright/test';

// Configuration for screenshots
const DESKTOP_VIEWPORT = { width: 1920, height: 1080 };
const MOBILE_VIEWPORT = { width: 375, height: 667 };
const HTML_FILE_PATH = 'file:///d:/dev/CascadeProjects/windsurf-model-selector/index.html';

test.describe('Windsurf Model Selector - Essential Screenshots', () => {
  
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

  test('desktop - settings modal', async ({ page }) => {
    await page.setViewportSize(DESKTOP_VIEWPORT);
    await page.goto(HTML_FILE_PATH);
    
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
    
    // Try to open settings (if button exists)
    const settingsBtn = page.locator('button:has-text("Settings"), button[title*="Settings"]');
    if (await settingsBtn.isVisible()) {
      await settingsBtn.click();
      await page.waitForTimeout(500);
    }
    
    // Take screenshot
    await page.screenshot({
      path: 'screenshots/desktop/settings-modal.png',
      fullPage: true
    });
  });

  test('mobile - responsive view', async ({ page }) => {
    await page.setViewportSize(MOBILE_VIEWPORT);
    await page.goto(HTML_FILE_PATH);
    
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
    
    // Take mobile screenshot showing responsive design
    await page.screenshot({
      path: 'screenshots/mobile/responsive-view.png',
      fullPage: true
    });
  });

});
