module.exports = {
    timeout: 60000,
    use: {
        headless: true,
        screenshot: 'on',
        video: 'retain-on-failure',
    },
    reporter: [['list'], ['html', { open: 'never' }]],
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
    workers: 4,
};

