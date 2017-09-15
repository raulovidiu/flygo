'use strict';


const CreateAccountPage = function () {
  this.contNouLink = element(by.css('a[data-target="#modalRegister"]'));
  this.inregistrareModalContainer = element(by.css('#ConfirmGroupDelivery div.modal-content'));
  this.inregistrareHeaderText = element(by.css('#modalRegister h4[class="modal-title"]'));
  this.prenumeInput = element(by.css('#modalRegister input[name="firstName"]'));
  this.numeInput = element(by.css('#modalRegister input[name="lastName"]'));
  this.emailInput = element(by.css('#modalRegister input[name="email"]'));
  this.prefixInput = element(by.css('#modalRegister input[name="phone[1]"]'));
  this.telefonInput = element(by.css('#modalRegister input[name="phone[2]"]'));
  this.parolaInput = element(by.id('i-password'));
  this.confirmareParolaInput = element(by.css('#modalRegister input[name="passwordCheck"]'));

  this.sexSelect = element(by.css('select[name = "sex"]'));
  this.ziuaNasteriiSelect = element(by.css('select[name="dob-day"]'));
  this.lunaNasteriiSelect = element(by.css('select[name="dob-month"]'));
  this.anulNasteriiSelect = element(by.css('select[name="dob-year"]'));
  this.contNouButton = element(by.css('button[value="Cont Nou"]'));
  this.termsAndConditionsCheckbox = element(by.css('#modalRegister div.checkbox label input[name="terms"]'));

  this.randomInt = function (min, max) {
    return Math.floor(Math.random() * max) + min;
  };

  this.contCreatCuSuccessHeader = element(by.css('h3'));
};

CreateAccountPage.prototype.selectMsOption = function (value) {
  this.sexSelect.$('option[value="' + value + '"]').click();
};

CreateAccountPage.prototype.selectZiuaNasterii = function (value) {
  this.ziuaNasteriiSelect.$('option[value="' + this.randomInt(31, 1) + '"]').click();
};

CreateAccountPage.prototype.selectLunaNasterii = function (value) {
  this.lunaNasteriiSelect.$('option[value="' + this.randomInt(12, 1) + '"]').click();
};

CreateAccountPage.prototype.selectAnulNasterii = function (value) {
  this.anulNasteriiSelect.$('option[value="' + 1991 + '"]').click();
};

CreateAccountPage.prototype.acceptTermsAndConditions = function () {
  this.termsAndConditionsCheckbox.click();
};

CreateAccountPage.prototype.submitCreateAccountForm = function () {
  this.contNouButton.click();
};

CreateAccountPage.prototype.createUserAccount = function (userData) {
  this.prenumeInput.sendKeys(userData.prenume);
  this.numeInput.sendKeys(userData.nume);
  this.emailInput.sendKeys(userData.email);
  this.prefixInput.sendKeys(userData.prefix);
  this.telefonInput.sendKeys(userData.phone);
  this.parolaInput.sendKeys(userData.password);
  this.confirmareParolaInput.sendKeys(userData.confirmPw);
  this.selectMsOption(userData.ms);
  this.selectZiuaNasterii();
  this.selectLunaNasterii();
  this.selectAnulNasterii();
  this.acceptTermsAndConditions();
  this.submitCreateAccountForm();
};


module.exports = CreateAccountPage;
