// spec.js
describe('uni-bites login tests', function() {
  var until = protractor.ExpectedConditions;
  var txtUsername;
  var txtPassword;
  var btnSubmit;

  beforeEach(function(){
    browser.waitForAngularEnabled(false);
    browser.get(browser.params.baseUrl + '/login'); // rework to page pattern see : http://blog.scottlogic.com/2015/11/06/ProtractorForBeginnersPart1.html

    txtUsername = element(by.id("inputUsername"));
    txtPassword = element(by.id("inputPassword"));
    errorMessage = element(by.id("swal2-content"));

    btnSubmit = element(by.css("button[type='submit']"));
  });

  it('should have the correct title', function() {
    expect(browser.getTitle()).toEqual('uni-bites - Login');
  });

  it('should fail if login details are left empty', function(){
    txtUsername.sendKeys('');
    txtPassword.sendKeys('');

    btnSubmit.click();
    browser.sleep(500);// <-- really really bad remove later by waiting for the div:
    // <div class="swal2-container swal2-center swal2-fade swal2-shown"> 
    // to become invisible

    expect(errorMessage.getText()).toBe("Please enter a username and password.");
  });

  it('should fail if password is empty', function(){
    txtUsername.sendKeys('Test');
    txtPassword.sendKeys('');

    btnSubmit.click();
    browser.sleep(500);// <-- really really bad remove later by waiting for the div:
    // <div class="swal2-container swal2-center swal2-fade swal2-shown"> 
    // to become invisible

    expect(errorMessage.getText()).toBe("Please enter a username and password.");
  });

  it('should fail if username is empty', function(){
    txtUsername.sendKeys('');
    txtPassword.sendKeys('Password');

    btnSubmit.click();
    browser.sleep(500);// <-- really really bad remove later by waiting for the div:
    // <div class="swal2-container swal2-center swal2-fade swal2-shown"> 
    // to become invisible

    expect(errorMessage.getText()).toBe("Please enter a username and password.");
  });

  it('should fail if an incorrect username/password is entered', function(){
    txtUsername.sendKeys('IncorrectUser');
    txtPassword.sendKeys('IncorrectPassword');

    btnSubmit.click();
    browser.sleep(500); // <-- really really bad remove later by waiting for the div:
    // <div class="swal2-container swal2-center swal2-fade swal2-shown"> 
    // to become invisible

    expect(errorMessage.getText()).toBe("Invalid username/passsword.");
  });

  it('should pass if a correct username/password combination is entered', function(){
    txtUsername.sendKeys(browser.params.validUser.name);
    txtPassword.sendKeys(browser.params.validUser.password);

//    txtUsername.sendKeys('test');
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