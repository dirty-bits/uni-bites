const request = require('supertest');
const express = require('express');

const app = require('../../app');

describe('getComments API', function() {
    
    var until = protractor.ExpectedConditions;
  
    beforeEach(() => {
        browser.waitForAngularEnabled(false);
        browser.get(`${browser.params.baseUrl}/cafe/an-bialann`); //rework to page pattern see : http://blog.scottlogic.com/2015/11/06/ProtractorForBeginnersPart1.html
    });
    
    // GET comments
    it('should GET comments in cafe page', function(done) {
        request(app)
        .get('/api/cafe/smokeys')
        .set('Accept', 'application/json')
        //.expect('Content-Type', /json/)
        .expect(function(res) {
            res.body.name = "Smokeys";
        })
        .expect(200, {
            name: 'Smokeys',
            urlTag: 'smokeys'
        }, done);
    });
    
    // POST comment
    
    afterEach(() => {
    });

});