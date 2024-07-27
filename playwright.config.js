// @ts-check
const { defineConfig, devices, webkit } = require('@playwright/test');
const { trace } = require('console');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  retries:1,

  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  projects: [

    {
      timeout:50 *1000,
      name: "Firefox",
      use: {
        ...devices['Desktop Firefox'],
        headless: false,
        trace: 'on',
        screenshot: 'on',
        permissions:['geolocation'],
        ignoreHTTPSErrors: true,
        launchOptions: {
          firefoxUserPrefs: {
            // use fake audio and video media
            "media.navigator.streams.fake": true,
            "permissions.default.microphone": 1,
            "permissions.default.camera": 1,
          },
        }

      },

    }
    ,

    {
      name: "Chrome",
      use: {

        browserName: 'chromium',
        headless: false,
        viewport: { width: 1500, height: 735 },
        trace: 'on',
        screenshot: 'on',
        ignoreHTTPSErrors: true,
        

      },

    }
    , 
    {

        name: "MobileView",
        use: {

          browserName: "chromium",
          headless: false,
          ...devices['Pixel 7'],
          trace: 'on',
          screenshot:'on',
          video:'on'

          
        }


    }

  ]


  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

