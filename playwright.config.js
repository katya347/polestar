// playwright.config.js
module.exports = {
    timeout: 60000,
    use: {
        headless: true, // Run in headless mode by default
        screenshot: 'on',
        video: 'retain-on-failure',
    },
    reporter: [['list'], ['html', { open: 'never' }]], // Generates HTML reports
    projects: [
        {
            name: 'Chromium',
            use: { browserName: 'chromium' },
        },
        {
            name: 'Firefox',
            use: { browserName: 'firefox' },
        },
        {
            name: 'Webkit',
            use: { browserName: 'webkit' },
        },
    ],
};
