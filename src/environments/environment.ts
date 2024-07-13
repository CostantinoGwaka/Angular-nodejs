const environmentName = 'dev';
const environmentURLs = {
  dev: {
    SERVER_URL: 'http://localhost:8080/api/tutorials',
  },
}

export const environment = {
  production: false,
  SERVER_URL: environmentURLs[environmentName].SERVER_URL,
};

