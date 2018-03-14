// spec.js
describe('uni-bites login tests', function() {
  // var until = protractor.ExpectedConditions;protractor.ExpectedConditions.
  var txtEmail;
  var txtPassword;
  var btnSubmit;
  var errorMessage;

  beforeEach(function(){
    browser.waitForAngularEnabled(false);
    browser.get(browser.params.baseUrl + '/login'); // TODO: rework to page pattern see : http://blog.scottlogic.com/2015/11/06/ProtractorForBeginnersPart1.html

    txtEmail = element(by.id("inputEmail"));
    txtPassword = element(by.id("inputPassword"));
    errorMessage = element(by.id("swal2-content"));

    btnSubmit = element(by.css("button[type='submit']"));
  });

  it('should have the correct title', function() {
    expect(browser.getTitle()).toEqual('uni-bites - Login');
  });

  it('should fail if login details are left empty', function(){
    txtEmail.sendKeys('');
    txtPassword.sendKeys('');

    btnSubmit.click();
    browser.sleep(500);// <-- really really bad remove later by waiting for the div:
    // <div class="swal2-container swal2-center swal2-fade swal2-shown"> 
    // to become invisible

    expect(errorMessage.getText()).toBe("Please enter an email and password.");
  });

  it('should fail if password is empty', function(){
    txtEmail.sendKeys('Test');
    txtPassword.sendKeys('');

    btnSubmit.click();
    browser.sleep(500);// <-- really really bad remove later by waiting for the div:
    // <div class="swal2-container swal2-center swal2-fade swal2-shown"> 
    // to become invisible

    expect(errorMessage.getText()).toBe("Please enter an email and password.");
  });

  it('should fail if email is empty', function(){
    txtEmail.sendKeys('');
    txtPassword.sendKeys('Password');

    btnSubmit.click();
    browser.sleep(500);// <-- really really bad remove later by waiting for the div:
    // <div class="swal2-container swal2-center swal2-fade swal2-shown"> 
    // to become invisible

    expect(errorMessage.getText()).toBe("Please enter an email and password.");
  });

  it('should fail if an incorrect email/password is entered', function(){
    txtEmail.sendKeys('IncorrectUser');
    txtPassword.sendKeys('IncorrectPassword');

    btnSubmit.click();
    browser.sleep(500); // <-- really really bad remove later by waiting for the div:
    // <div class="swal2-container swal2-center swal2-fade swal2-shown"> 
    // to become invisible

    expect(errorMessage.getText()).toBe("Invalid email/passsword.");
  });

  it('should pass if a correct email/password combination is entered', function(){
    txtEmail.sendKeys(browser.params.validUser.name);
    txtPassword.sendKeys(browser.params.validUser.password);

//    txtEmail.sendKeys('test');
//    txtPassword.sendKeys('test');

    btnSubmit.click();
    browser.sleep(500);// <-- really really bad remove later 
                       // by waiting for a new page to relload
  
    // dont expect an error message to be shown
    expect(errorMessage.isPresent()).toBe(false);

    // todo: wait for page to change properly
    expect(browser.getCurrentUrl()).toContain("/feed");
  });

  afterEach(function(){
  });
});