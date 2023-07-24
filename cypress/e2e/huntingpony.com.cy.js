describe('Тестирование формы Корзина', function () {
   it('кладем в корзину товар проверяем наличие слова"оформление заказа', function () {
        cy.visit('https://huntingpony.com/');
        cy.get('[data-index="1"] > .header__collections-controls > .header__collections-link').click();
        cy.get('[data-product-id="338934699"] > .product-preview__content > .product-preview__area-bottom').click();
        cy.get('[data-product-id="338934699"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
        cy.wait(1000)  
        cy.get('.add-cart-counter__btn-label').click();
        cy.get('[data-add-cart-counter-plus=""]').click();
        cy.get('.header__cart > .icon').click();
        cy.contains('Оформить заказ').should('be.visible');
    })
})