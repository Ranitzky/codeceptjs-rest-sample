const axios = require('axios');

Feature('User');

Scenario('I get users', (I) => {
    I.sendGetRequest('/api/users/2');
    

    // alternatively use axios
    axios.get('https://reqres.in/api/users/2')
        .then(function (response) {
          console.log(response.data.data.first_name);
          console.log(response.data.data.last_name);
        });

});