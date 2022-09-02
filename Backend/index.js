const axios = require('axios');

// set up the request parameters
const params = {
  api_key: "C15C2F4CE7F14E2EA1AFCFEE8846D42C",
  type: "search",
  amazon_domain: "amazon.com",
  output: "json",
  search_term: "memory cards",
  sort_by: "price_low_to_high"
}

// make the http GET request to Rainforest API
axios.get('https://api.rainforestapi.com/request', { params })
  .then(response => {

    // print the JSON response from Rainforest API
    console.log(JSON.stringify(response.data.search_results, 0, 10));
    // console.log("rsponseeeee",response.data.search_results)

  }).catch(error => {
    // catch and print the error
    console.log(error);
  })