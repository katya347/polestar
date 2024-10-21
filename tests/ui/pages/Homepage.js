class HomePage {
    constructor(page) {
        this.page = page;
        this.searchInput = 'input[name="q"]'; // Example selector for search
        this.searchButton = 'button.search-button'; // Example selector for search button
    }

    async navigate() {
        await this.page.goto('https://www.polestar.com/se');
    }

    async searchFor(keyword) {
        await this.page.fill(this.searchInput, keyword);
        await this.page.click(this.searchButton);
    }
}

module.exports = HomePage;
