const axios = require("axios");

Feature("ReqRes");

const instance = axios.create({
    baseURL: "https://reqres.in/api"
});

const payload = {
    "name": "morpheus",
    "job": "leader"
};

Scenario("I get valid hotel information from the advertiser", async () => {
    instance.post("/users", payload).then(function(response) {
        console.log(response.data);
      });
});
