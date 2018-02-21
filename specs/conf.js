exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',  // this needs to be started manually, i.e. 3 command windows open to run a test session 
                                                    //first run : (npm start, npm run web-driver ) then run 'npm run test' each time you make a change 
  specs: ['login.spec.js'],
  capabilities: {
    browserName: 'firefox' // manually change to chrome, android, ios etc.. for testing sessions
  },

  params: {
    baseUrl:"http://localhost:8604",
    validUser: {
      name: "test",
      password: "test"
    }
  },
};