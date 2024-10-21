class LoginPage {
    constructor(page) {
        this.page = page;
        this.loginButton = 'button#login'; 
    }

    async navigate() {
        await this.page.goto('https://www.polestar.com/se');
    }

    async clickLogin() {
        await this.page.click(this.loginButton);
    }
}
module.exports = LoginPage;
