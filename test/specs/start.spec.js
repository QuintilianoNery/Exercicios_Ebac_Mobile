const HomeScreen = require('../screens/home.screen.js');
const LoginScreen = require('../screens/login.screen.js');

let url = 'http://lojaebac.ebaconline.art.br/';
describe('Acessar painel de Administrador', () => {
    it('Validar credenciais', async() => {
        // await HomeScreen.goToLogin();
        // await LoginScreen.setStoreAddress(url)
        await $('id:button_login_store').click();
        await $('id:input').setValue(url);

    });
});

//Teste Acesse a aplicação, vá em forms e preencha todos os campos

//Site: http://lojaebac.ebaconline.art.br/
// Login: lojaebacqe@gmail.com
//Senha:GD*peToHNJ1#c$sgk08EaYJQ