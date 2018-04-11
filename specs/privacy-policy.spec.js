// spec.js
describe('uni-bites about tests', function() {
  var until = protractor.ExpectedConditions;
  
    beforeEach(function(){
    browser.waitForAngularEnabled(false);
    browser.get(browser.params.baseUrl + '/privacy-policy'); // rework to page pattern see : http://blog.scottlogic.com/2015/11/06/ProtractorForBeginnersPart1.html
    
    cookieHeader = element(by.id("cookieHeader"));
    serviceProviderHeader = element(by.id("serviceProviderHeader"));
    securityHeader = element(by.id("securityHeader"));

  });

  it('should have the correct title', function() {
    expect(browser.getTitle()).toEqual('Privacy Policy');
  });

  it('should pass if the three paragraphs are there', function(){
    expect(cookieHeader.getText()).toContain('Cookies');
    expect(serviceProviderHeader.getText()).toContain('Service Providers');
    expect(securityHeader.getText()).toContain('Security');
  });

  afterEach(function(){
  });
});