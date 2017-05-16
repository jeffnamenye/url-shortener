const request = require('supertest');

// array of all routes
 const routes = [
   {
     description: 'Index',
     route: '/',
     method: 'get',
   },
   {
     description: 'status',
     route: '/Status',
     method: 'get',
   },
   {
     description: 'Create a short url',
     route: 'api/v1/urls',
     method: 'post',
   },
   {
     description: 'Read all urls',
     route: 'api/v1/urls',
     method: 'get',
   },
   {
     description: 'Read url by id',
     route: 'api/v1/urls/:id',
     method: 'get',
   },
   {
     description: 'Redirect url by',
     route: 'go/:shortURL',
     method: 'get',
   },
   {
     description: 'update a url',
     route: 'api/v1/urls/:id',
     method: 'post',
   },
   {
     description: 'delete a url',
     route: 'api/v1/urls/:id',
     method: 'delete',
   },
   {
     description: 'Create a user',
     route: 'api/v1/users',
     method: 'post',
   },
   {
     description: 'Read all users',
     route: 'api/v1/users',
     method: 'get',
   },
   {
     description: 'Read a user by id',
     route: 'api/v1/users/:id',
     method: 'get',
   },
   {
     description: 'Update a user',
     route: 'api/v1/users/:id',
     method: 'post',
   },
   {
     description: 'Delete a user',
     route: 'api/v1/users/:id',
     method: 'delete',
   },
 ];

 describe('routes', () => {
   let server;

   for (let i = 0; i < routes.length; i++) {
     it(routes[i].description, () => {});
   }
 });
