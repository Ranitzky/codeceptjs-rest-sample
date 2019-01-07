exports.config = {
  tests: 'tests/*_test.js',
  output: './output',
  helpers: {
    REST: {
      endpoint: 'https://reqres.in/'
      },
    },
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs-rest-sample'
}