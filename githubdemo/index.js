const axios = require('axios');

const githubToken = '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';

const resultElement = document.getElementById('result');

axios.get('https://api.github.com/users/cornea4627', {
  headers: {
    Authorization: `token ${githubToken}`
  }
})
.then(response => {
    resultElement.textContent = `${JSON.stringify(response.data)}`;
    let x = (response.data.url);
    console.log(x);
    console.log(response.data.url);
    obj = JSON.parse(response);
    resultElement.innerHTML= `${obj}`
  })
  .catch(error => {
    console.log(error);
    resultElement.textContent = 'Error!';
  });