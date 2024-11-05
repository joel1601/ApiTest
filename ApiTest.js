const axios = require('axios');

async function testGetRequest() {
  try {
    const response = await axios.get('https://reqres.in/api/users/2');
    if (response.status === 200) {
      console.log('Status Code Validation Passed');
    } else {
      console.log(`Expected 200 but received ${response.status}`);
    }
  } catch (error) {
    console.error('Error making GET request:', error.message);
  }
}

testGetRequest();