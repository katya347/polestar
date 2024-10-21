const { test, expect } = require('@playwright/test');
const ContactFormPage = require('../pages/ContactFormPage');

test('should fill out and submit the contact form', async ({ page }) => {
    const contactFormPage = new ContactFormPage(page);
    await contactFormPage.fillContactForm('John Doe', 'john.doe@example.com');
    const message = await contactFormPage.getSuccessMessage();
    expect(message).toBe('Thank you for contacting us!');
});
