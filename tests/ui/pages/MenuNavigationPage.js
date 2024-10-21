class MenuNavigationPage {
    constructor(page) {
        this.page = page;
        this.menuButton = '.menu-toggle';
        this.menuLink = 'a[href="/cars"]'; 
    }

    async openMenu() {
        await this.page.click(this.menuButton);
    }

    async goToCarsPage() {
        await this.page.click(this.menuLink);
    }
}

module.exports = MenuNavigationPage;
