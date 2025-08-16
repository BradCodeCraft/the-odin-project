# API Basics

## Introduction

In recent years, a new pattern for developing websites has been gaining
popularity. Instead of creating an app that hosts both the database and view
templates, many developers are separating these concerns into separate
projects, hosting their backend and database on a server (either on something
like Heroku or on a VPS like Digital Ocean), then using a service such as
GitHub Pages or Netlify to host their frontend. This technique is sometimes
referred to as the Jamstack.

Organizing your project this way can be beneficial because it allows your
project to be more modular instead of combining business logic with view logic.
This also allows you to use a single backend source for multiple frontend
applications, such as a website, a desktop app, or a mobile app. Other
developers enjoy this pattern because they like using frontend frameworks such
as React or Vue to create nice frontend-only, single-page applications.

## rest

the structure of an api can take many forms. _however_, it's conventional to
follow rest (an acronym for representational state transfer), a popular and
common organizational method for your apis which corresponds with crud actions.
following established patterns such as rest make your api more maintainable and
make it easier for other developers to integrate with your api. software
development is often about clear communication which is aided by following
expectations.

rest apis are resource based, which basically means that instead of having
names like `/getpostcomments` or `/savepostindatabase` we refer **directly to
the resource** (in this case, the blog post) and use http verbs such as get,
post, put, and delete to determine the action. typically this takes the form of
2 uri’s per resource, one for the whole collection and one for a single object
in that collection.

### http verbs table

| verb   | action |
| ------ | ------ |
| post   | create |
| get    | read   |
| put    | update |
| delete | delete |

## cors

the same origin policy is an important security measure that basically says
"only requests from the same origin (the same ip address or url) should be
allowed to access this api".

## assignment

### [best practices for rest api design](https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design)

#### what is rest api?

a rest api is an application programming interface architecture style that
conforms to specific architectural constraints, like stateless communication
and cacheable data. it is not a protocol or standard. while rest apis can be
accessed through a number of communication protocols, most commonly, they are
called over https, so the guidelines below apply to rest api endpoints that
will be called over the internet.

> for rest apis called over the internet, you'll likely want to follow the best
> practices for rest api authentication

#### accept and respond with json

rest apis should accept json for request payload and also send responses to
json. json is the standard for transferring data. almost every networked
technology can use it: javascript has built-in methods to encode and decode
json either through the fetch api or another http client. server-side
technologies have libraries that can decode json without doing much work.

form data is good for sending data, especially if we want to send files. but
for text and numbers, we don’t need form data to transfer those since—with most
frameworks—we can transfer json by just getting the data from it directly on
the client side. it’s by far the most straightforward to do so.

to make sure that when our rest api app responds with json that clients
interpret it as such, we should set `content-type` in the response header to
`application/json` after the request is made. many server-side app frameworks
set the response header automatically. some http clients look at the
`content-type` response header and parse the data according to that format.

the only exception is if we’re trying to send and receive files between client
and server. then we need to handle file responses and send form data from
client to server.

we should also make sure that our endpoints return json as a response. many
server-side frameworks have this as a built-in feature.

```js
import express from "express";
import bodyparse from "body-parser";

const app = express();

app.use(bodyparser.json());

app.post("/", (req, res) => {
  res.json(req.body);
});

app.listen(8080, () => console.log("server started"));
```

`bodyparser.json()` parses the json request body string into a javascript
object and then assigns it to the `req.body` object.

set the `content-type` header in the response to `application/json;
charset=utf-8` without any changes. the method above applies to most other back
end frameworks.

#### use nouns instead of verbs in endpoint paths

we shouldn't use verbs in our endpoint paths. instead, we should use the nouns
which represent the entity that the endpoint that we're retrieving or
manipulating as the pathname.

this is because our http request method already has the verb. having verbs in
our api endpoint paths isn’t useful and it makes it unnecessarily long since it
doesn’t convey any new information.

the post, put, and delete endpoints all take json as the request body, and they
all return json as the response, including the get endpoint.

#### use logical nesting on endpoints

when designing endpoints, it makes sense to group those that contain associated
information. that is, if one object can contain another object, you should
design the endpoint to reflect that. this is good practice regardless of
whether your data is structured like this in your database. in fact, it may be
advisable to avoid mirroring your database structure in your endpoints to avoid
giving attackers unnecessary information.

however, nesting can go too far. after about the second or third level, nested
endpoints can get unwieldy. consider, instead, returning the url to those
resources instead, especially if that data is not necessarily contained within
the top level object.

#### handle errors gracefully and return standard error codes

to eliminate confusion for api users when an error occurs, we should handle
errors gracefully and return http response codes that indicate what kind of
error occurred. this gives maintainers of the api enough information to
understand the problem that’s occurred. we don’t want errors to bring down our
system, so we can leave them unhandled, which means that the api consumer has
to handle them.

we should be throwing errors that correspond to the problem that our app has
encountered.

error codes need to have messages accompanied with them so that the maintainers
have enough information to troubleshoot the issue, but attackers can’t use the
error content to carry our attacks like stealing information or bringing down
the system.

whenever our api does not successfully complete, we should fail gracefully by
sending an error with information to help users make corrective action.

#### allow filtering, sorting, and pagination

filtering and pagination both increase performance by reducing the usage of
server resources. as more data accumulates in the database, the more important
these features become.

we can accept the `page` query parameter and return a group of entries in the
position from `(page - 1) * 20` to `page * 20`.

We can also specify the fields to sort by in the query string.

Where `+` means ascending and `-` means descending.

#### Maintain good security practices

Most communication between client and server should be private since we often
send and receive private information. Therefore, using SSL/TLS for security is
a must.

A SSL certificate isn't too difficult to load onto a server and the cost is
free or very low. There's no reason not to make our REST APIs communicate over
secure channels instead of in the open.

People shouldn't be able to access more information that they requested.

To enforce the principle of least privilege, we need to add role checks either
for a single role, or have more granular roles for each user.

If we choose to group users into a few roles, then the roles should have the
permissions that cover all they need and no more. If we have more granular
permissions for each feature that users have access to, then we have to make
sure that admins can add and remove those features from each user accordingly.
Also, we need to add some preset roles that can be applied to a group users so
that we don’t have to do that for every user manually.

#### Cache data to improve performance

We can add caching to return data from the local memory cache instead of
querying the database to get the data every time we want to retrieve some data
that users request. The good thing about caching is that users can get data
faster. However, the data that users get may be outdated. This may also lead to
issues when debugging in production environments when something goes wrong as
we keep seeing old data.

If you are using caching, you should also include `Cache-Control` information
in your headers. This will help users effectively use your caching system.

#### Versioning our APIs

We should have different versions of API if we're making any changes to them
that may break clients. The versioning can be done according to semantic
version.

This way, we can gradually phase out old endpoints instead of forcing everyone
to move to the new API at the same time. The v1 endpoint can stay active for
people who don’t want to change, while the v2, with its shiny new features, can
serve those who are ready to upgrade. This is especially important if our API
is public. We should version them so that we won't break third party apps that
use our APIs.

#### Conclusion

The most important takeaways for designing high-quality REST APIs is to have
consistency by following web standards and conventions. JSON, SSL/TLS, and HTTP
status codes are all standard building blocks of the modern web.

Performance is also an important consideration. We can increase it by not
returning too much data at once. Also, we can use caching so that we don't have
to query for data all the time.

Paths of endpoints should be consistent, we use nouns only since the HTTP
methods indicate the action we want to take. Paths of nested resources should
come after the path of the parent resource. They should tell us what we’re
getting or manipulating without the need to read extra documentation to
understand what it’s doing.

### [How to create a RESET API with Express.js in Node.js](https://www.robinwieruch.de/node-express-server-rest-api/)

An Express application is most often used as a backend application in a
client-server architecture whereas the client could be written in React.js or
another popular frontend solution and the server could be written in Express.
Both entities result in a client-server architecture (frontend and backend
relationship) whereas the backend would be needed for (A) business logic that
shouldn't be exposed as source code to the frontend application -- otherwise it
would be accessible in the browser -- or for (B) establishing connections to
third-party data sources (e.g. database(s)).

However, don't mistake client application always for frontend and server
application always for backend here. These terms cannot be exchanged that
easily. Whereas a frontend application is usually something seen in the
browser, a backend usually performs business logic that shouldn't be exposed in
a browser and often connects to a database as well.

But, in contrast, the terms client and server are a matter of perspective. A
backend application (Backend 1) which consumes another backend application
(Backend 2) becomes a client application (Backend 1) for the server application
(Backend 2). However, the same backend application (Backend 1) is still the
server for another client application which is the frontend application
(Frontend).

If you want to answer the client-server question if someone asks you what role
an entity plays in a client-server architecture, always ask yourself who
(server) is serving whom (client) and who (client) consumes whom's (backend)
functionalities?

#### cUrl for REST APIs

"_cURL [...] is a computer software project providing a library and
command-line tool for transferring data using various protocols._" Since REST
is an architecture that uses HTTP, a server that exposes a RESTful API can be
consumed with cURL, because HTTP is one of the various protocols.

Whether you access your Express application on `http://localhost:3000` in the
browser or via the command line with cURL, you should see the same result. Both
tools act as clients whereas the Express application is your server.

#### Express routes: HTTP methods are REST operations

By default cURL will use a HTTP GET method. However, you can specify the HTTP
method with the `-X` flag (or `--request` flag). Depending on the HTTP method
you are choosing, you will access different routes of your Express application
-- which here represent only a single API endpoint with an URI so far.

That's one of the key aspects of REST: It uses HTTP methods to perform
operations on URI(s). Often these operations are referred to as CRUD operations
for create, read, update, and delete operations.

#### Express routes: URIs are REST resources

Another important aspect of REST is that every URI acts as a resource.

#### Making sense of REST with Express

#### Application-level Express middleware

Note that all data that comes with the request object's body tag isn't typed
yet. Everything comes as a JSON string.

```js
const data = Date.parse(req.body.date);
const count = Number(req.body.count);
```

The blueprint for a middleware:

```js
app.use((req, res, next) => {
  // do something
  next();
});
```

#### Modular models in Express as data sources

The models folder in an Express application is usually the place where you
define your data sources.

#### Modular routing with Express router
