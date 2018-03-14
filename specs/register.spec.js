// spec.js
var mongoose = require('mongoose');
var User = require('../models/user');

describe('uni-bites user registration', function() {
  var until = protractor.ExpectedConditions;
  var txtFullName;
  var txtEmail;
  var txtPassword;
  var txtConfirmPassword;
  var btnSubmit;

  beforeEach(function(){
    browser.waitForAngularEnabled(false);
    browser.get(browser.params.baseUrl + '/register'); // rework to page pattern see : http://blog.scottlogic.com/2015/11/06/ProtractorForBeginnersPart1.html

      
    txtFullName = element(by.id("inputFullName"));
    txtEmail = element(by.id("inputEmail"));
    txtPassword = element(by.id("inputPassword"));
    txtConfirmPassword = element(by.id("inputConfirmPassword"));

    errorMessage = element(by.id("swal2-content"));

    btnSubmit = element(by.css("button[type='submit']"));
  });

  removeUser = false;
  afterEach(function(){
    // this is a better place to have db tidyup code, but there should not be any need 
    // to run it when it is not necessary (database has not been updated);
    
    // remove user created
    if(removeUser){
      User.findOneAndRemove({'user_name':browser.params.registerUser.name}).exec();
    }
  });

  it('should have the correct title', function(){
    expect(browser.getTitle()).toEqual('uni-bites - Register');
  });

  it('should fail if full name is empty', function(){
    txtFullName.sendKeys("");

    btnSubmit.click();
    browser.sleep(500);// <-- really really bad remove later by waiting for the div:
    // <div class="swal2-container swal2-center swal2-fade swal2-shown"> 
    // to become invisible

    expect(errorMessage.getText()).toContain("Please enter a full name.");
  });

  it('should fail if the email is empty', function(){
    txtFullName.sendKeys(browser.params.registerUser.name);
    txtEmail.sendKeys("");

    btnSubmit.click();
    browser.sleep(500);// <-- really really bad remove later by waiting for the div:
    // <div class="swal2-container swal2-center swal2-fade swal2-shown"> 
    // to become invisible

    expect(errorMessage.getText()).toContain("Please enter an email.");
  });

  it('should fail if the password does not match the confirmation password', function(){
    txtFullName.sendKeys(browser.params.registerUser.name);
    txtEmail.sendKeys(browser.params.registerUser.email);

    txtPassword.sendKeys("1");
    txtConfirmPassword.sendKeys("2");

    btnSubmit.click();
    browser.sleep(500);// <-- really really bad remove later by waiting for the div:
    // <div class="swal2-container swal2-center swal2-fade swal2-shown"> 
    // to become invisible

    expect(errorMessage.getText()).toContain("Password and password confirmation do not match.");
  });

  it('should add the user and show the logged in page if successful', function(){
    txtFullName.sendKeys(browser.params.registerUser.name);
    txtEmail.sendKeys(browser.params.registerUser.email);
    txtPassword.sendKeys(browser.params.registerUser.password);
    txtConfirmPassword.sendKeys(browser.params.registerUser.password);

    btnSubmit.click();
    browser.sleep(4000); // TODO: do wait for url to change, this is messy (non-deterministic)

    // dont expect an error message to be shown
    expect(errorMessage.isPresent()).toBe(false);

    // todo: wait for page to change
    expect(browser.getCurrentUrl()).toContain("/feed");

    removeUser = true;
  });
});
