// const axios = require('axios');

const githubToken = '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';

const resultElement = document.getElementById('result');

axios.get('https://api.github.com/users/cornea4627', {
  headers: {
    Authorization: `token ${githubToken}`
  }
})
.then(response => {
    resultElement.textContent = JSON.stringify(response.data, null, 2);
  })
  .catch(error => {
    console.log(error);
    resultElement.textContent = 'Error!';
  });