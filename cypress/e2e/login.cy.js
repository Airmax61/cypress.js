
describe('Тестирование формы логина', function () {
   it('ввожу верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно').should('be.visible');
    })
})

describe('восстановления пароля', function () {
   it('нажимаем востановление пароля и вводим любой пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('bunin.maxi@ya.ru');
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').click();
    })
})

describe('Тестирование формы логина', function () {
   it('ввожу верный логин и не верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('1234qwer');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет').should('be.visible');
    })
})

describe('Тестирование формы логина', function () {
   it('ввожу не верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('bunin.maxi@ya.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет').should('be.visible');
    })
})

describe('Тестирование формы логина (валидация)', function () {
   it('ввожу логин без @ и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации').should('be.visible');
    })
})

describe('Тестирование формы логина (строчные буквы в логине)', function () {
   it('ввожу логин GerMan@Dolnikov.ru и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет').should('be.visible');
    })
})