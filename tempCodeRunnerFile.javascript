const options = {method: 'GET'};

fetch('https://doanhaiduy.github.io/api-project-js/project.json', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));