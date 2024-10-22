class HomePage {
    constructor(page) {
        this.page = page;
    }

    get searchInput() {
        return this.page.locator('input[name="q"]');
    }

    get searchButton() {
        return this.page.locator('button.search-button');
    }

    async navigate() {
        await this.page.goto('https://www.polestar.com/se');
    }

    async searchFor(keyword) {
        await this.searchInput.fill(keyword);
        await this.searchButton.click();
    }
}

module.exports = HomePage;
