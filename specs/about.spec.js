// spec.js
describe('uni-bites about tests', function() {
  var until = protractor.ExpectedConditions;
  
    beforeEach(function(){
    browser.waitForAngularEnabled(false);
    browser.get(browser.params.baseUrl + '/about-us'); // rework to page pattern see : http://blog.scottlogic.com/2015/11/06/ProtractorForBeginnersPart1.html
    
    paragraph1 = element(by.id("Paragraph1"));
    paragraph2 = element(by.id("Paragraph2"));
    paragraph3 = element(by.id("Paragraph3"));

  });

  it('should have the correct title', function() {
    expect(browser.getTitle()).toEqual('About Us');
  });

  it('should pass if the three paragraphs are there', function(){
    expect(paragraph1.getText()).toContain('Uni-Bites is a web-app that compares');
    expect(paragraph2.getText()).toContain('Our team of financial consultants');
    expect(paragraph3.getText()).toContain('We know you will love using Uni-Bites too');
  });

  afterEach(function(){
  });
});