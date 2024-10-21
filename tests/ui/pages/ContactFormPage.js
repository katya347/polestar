class ContactFormPage {
    constructor(page) {
        this.page = page;
        this.nameInput = 'input[name="name"]';
        this.emailInput = 'input[name="email"]';
        this.submitButton = 'button[type="submit"]';
        this.successMessage = '.success-message'; 
    }

    async fillContactForm(name, email) {
        await this.page.fill(this.nameInput, name);
        await this.page.fill(this.emailInput, email);
        await this.page.click(this.submitButton);
    }

    async getSuccessMessage() {
        return await this.page.textContent(this.successMessage);
    }
}

module.exports = ContactFormPage;
