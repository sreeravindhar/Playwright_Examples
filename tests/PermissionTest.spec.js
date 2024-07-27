const { test } = require('@playwright/test');

test('PermissionPopup', async ({ page }) => {

    await page.goto('http://expired.badssl.com/');
    
    // For Location 
    await page.goto("https://whatmylocation.com/");
   
    // For MIC 
    await page.goto("https://mictests.com/");
   
    await page.locator("#mic-launcher").click();
    
    // For CAM 
    await page.goto("https://webcamtests.com/");
   
    await page.locator("#webcam-launcher").click();
    await page.pause();



})