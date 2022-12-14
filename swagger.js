const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'CSE-341 Project',
    description: 'Contacts API'
  },
  host: 'contacts-api.onrender.com',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./server.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);

// swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
// await import('./server.js');
// });
