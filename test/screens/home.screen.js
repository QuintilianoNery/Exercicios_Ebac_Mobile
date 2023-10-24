class HomeScreen {
    get #enterStoreAddress() {
        return $('id:button_get_started');
    }
    
    async goToLogin() {
        this.#enterStoreAddress.click();
    }
}

module.exports = new HomeScreen();