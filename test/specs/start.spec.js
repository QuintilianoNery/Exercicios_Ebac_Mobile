const HomeScreen = require('../screens/home.screen');
// const formsScreen = require('../screens/forms.screen');

describe('Acessar painel de Administrador', () => {
    it('Validar credenciais', async() => {
        await HomeScreen.goToLogin();

    });
});

//Teste Acesse a aplicação, vá em forms e preencha todos os campos