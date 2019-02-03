const axios = require("axios");
const chai = require("chai");
const assert = chai.assert; // Using Assert style
const payload = require("./payloads/availability.json");

Feature("Hotel information");

const instance = axios.create({
    baseURL: "https://tbec-mock-advertiser-qa.dus.tcs.trivago.cloud/api/v1",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    },
    auth: {
        username: "qa",
        password: "case_study"
    }
});

Scenario("I get valid hotel information from the advertiser", async () => {
    instance
        .post("/booking_availability", payload)
        
        .then(function(response) {
            assert(response.status === 200, "Status is not 200.");
            assert.isObject(response.data);

            const hotelDetails = response.data.hotel_details;
            console.log(hotelDetails);

            // hotel name
            assert.isString(hotelDetails.name);

            // hotel address data
            assert.isString(hotelDetails.address1);
            assert.isString(hotelDetails.address2);
            assert.isString(hotelDetails.city);
            assert.isNumber(hotelDetails.latitude);
            assert.isNumber(hotelDetails.longitude);
            assert.match(hotelDetails.state, /^[A-Z]{2}/, "State does not match 2-letter code");
        });
});
