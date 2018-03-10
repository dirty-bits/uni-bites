// spec.js
describe('Protractor Demo App', function() {
  beforeEach(function(){
    browser.get('http://juliemr.github.io/protractor-demo/')
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Super Calculator');
    // browser.sleep(10000);
  });

  it('should be able to add 1 and 1', function() {
    var operand1 = element(by.id('first'));
    var operand2 = element(by.id('second'));
    var operator = element(by.id('myid')); // procedure

    // click button and wait for results in the table
    // result = 
  });
});