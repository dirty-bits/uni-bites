// spec.js
describe('uni-bites registration tests', function() {
  var until = protractor.ExpectedConditions;
  var txtUsername;
  var txtEmail;
  var txtPassword;
  var txtConfirmPassword;
  var btnSubmit;

  beforeEach(function(){
    browser.waitForAngularEnabled(false);
    browser.get(browser.params.baseUrl + '/register'); // rework to page pattern see : http://blog.scottlogic.com/2015/11/06/ProtractorForBeginnersPart1.html

    txtUsername = element(by.id("inputUsername"));
    txtEmail = element(by.id("inputEmail"));
    txtPassword = element(by.id("inputPassword"));
    txtConfirmPassword = element(by.id("inputConfirmPassword"));

    errorMessage = element(by.id("swal2-content"));

    btnSubmit = element(by.css("button[type='submit']"));
  });

  it('should have the correct title', function(){
    expect(browser.getTitle()).toEqual('uni-bites - Registration');
  });

  it('should fail if username is empty', function(){
    fail("Not implemented yet");
  });

  it('should fail if the email is empty', function(){
    fail("Not implemented yet");
  });

  it('should fail if the password does not match the confirmation password', function(){
    fail("Not implemented yet");

    // expect(txtPassword.getText()).toEqual(txtConfirmPassword.getText(), "Confirm Password");
  });

  it('should add the user and show the logged in page if successful', function(){
    fail("Not implemented yet");
  });
});
