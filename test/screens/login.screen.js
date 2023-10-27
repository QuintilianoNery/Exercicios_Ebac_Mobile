class LoginScreen {
    get StoreAddress() {
        return $('id:input');
    }
    
    async setStoreAddress(url) {
        this.StoreAddress.setValue();
    }
}

module.exports = new LoginScreen();