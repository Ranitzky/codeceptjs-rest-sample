exports.config = {
    tests: "tests/*.test.js",
    output: "./output",
    helpers: {},
    include: {
        I: "./steps_file.js"
    },
    bootstrap: null,
    mocha: {},
    name: "codeceptjs-rest-sample"    
};
