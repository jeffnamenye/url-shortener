# UrlShortener by Jeff Namenye

This is basic URL shortener application, there are a few things you
to install. You can do that by **npm i**, that should install everything
in the package.json.

Next you need to create a .env file in your root directory. Inside of that
you need to add a few things.
DB_NAME=dbname
DB_USER=dbname
DB_PASS=dbpass
DB_HOST=127.0.0.1
DB_SCHEMA=mysql
DB_PORT=3306
Just copy and paste that into your .env file.

To start the server use **node src/server** that will start the server normally. To start the server in debugging mode **DEBUG = true node src/server**

To run the unit test **server must be off** to run the test, in the command prompt type *mocha* then you should see something like this.
url model
   ✓ Create url
   ✓ Read all urls
   ✓ Read url by id
   ✓ Redirect
   ✓ Update url
   ✓ Delete url

 user model
   ✓ Create user
   ✓ Read all users
   ✓ Read user by id
   ✓ Update user
   ✓ Delete user

 routes
   ✓ Index
   ✓ status
   ✓ Create a short url
   ✓ Read all urls
   ✓ Read url by id
   ✓ Redirect url by
   ✓ update a url
   ✓ delete a url
   ✓ Create a user
   ✓ Read all users
   ✓ Read a user by id
   ✓ Update a user
   ✓ Delete a user


 24 passing (272ms)


To start the mysql sever you use **mysql.server start**

To create urls, in post man add the following code into address bar however your hooking up to your data base.
For the user  
*To create* in post man type POST localhost:3000/api/v1/users
 and in the body part type this and what ever you want into the fields.

{
 "name" : " ",
 "username" : " ",
 "password" : " ",
 "email" : " ",
 "address" : " ",
}

*To read the users* change it to GET  localhost:3000/api/v1/users
*To read users by id* change it to GET  localhost:3000/api/v1/users/:id
*To update the users* change it to POST  localhost:3000/api/v1/users/:id
*To delete the users* change it to DELETE  localhost:3000/api/v1/users:id
