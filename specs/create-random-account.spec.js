'use strict';

const faker = require('faker');
const CreateAccountPage = require('../page-objects/create-account.page-object');
const EC = protractor.ExpectedConditions;


describe('FlyGo - Create A Random User Account', function () {

  const createAccountPage = new CreateAccountPage();

  const userData = {
    prenume: faker.name.firstName(),
    nume: faker.name.lastName(),
    email: faker.internet.email(),
    prefix: '975',
    phone: '0722111222',
    password: 'HardCodedPw#!321',
    confirmPw: 'HardCodedPw#!321',
    ms: 'Ms'
  };


  it('Should Navigate to Homepage', () => {
    browser.get(browser.params.baseUrl);

    expect(createAccountPage.contNouLink.isDisplayed()).toBe(true);
  });


  it('Should Access the Register Modal', () => {
    createAccountPage.contNouLink.click().then(() => {
      browser.wait(EC.elementToBeClickable(createAccountPage.inregistrareHeaderText), 2000);
    });

    expect(createAccountPage.inregistrareHeaderText.getText()).toEqual('INREGISTRARE');
  });


  it('Should Fill the Register New User Modal Form', () => {
    createAccountPage.createUserAccount(userData);

    browser.wait(EC.presenceOf(createAccountPage.contCreatCuSuccessHeader), 3000);

    expect(browser.getCurrentUrl()).toEqual(browser.params.baseUrl + 'registerSuccessful/');
    expect(createAccountPage.contCreatCuSuccessHeader.getText()).toEqual('Contul tau a fost creat cu succes.');
  });
});
