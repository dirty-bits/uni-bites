exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['*.spec.js'],    // '*.spec.js' 
  capabilities: {
    browserName: 'firefox' // manually change to chrome, android, ios etc.. for testing sessions
  },
  stackTrace: false,

  params: {
    baseUrl:"http://localhost:8604",  // TODO: Parameterise this
    validUser: {
      name: "test",
      password: "test"
    },

    registerUser:{
      name: "test10",
      password: "test10",
      email: "test10@test10.com"
    }
  },
};