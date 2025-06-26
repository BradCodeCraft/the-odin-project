# Working with APIs

## Introduction

The server is an open service that serves data to anyone that wants to use it.

## APIs

Servers that are created for serving data for external use are often referred
to as APIs or **Application Programming Interface**.

For the most part, APIs are accessed through URLs, and the specifics of how to
query these URLs a change based on the specific service you are using.

In most cases, you will have t ocreate an account and request an "API key" from
the API service before attempting to fetch data from their endpoints. Once
obtained, an API key will usually have to be included with every data request.

Issue API keys allows an API service to better track abuse of their systems and
data. Additionally, it can also be a way for those services to mitigate and
recuperate operating costs.

Because your API key is **your** key to these services and data, securing them
is important habit, especially if you are using a paid tier.

Securing API keys requires handling things server-side.

## Fetching data

## CORS

For security reasons, by default, browsers restrict HTTP requests to outside
sources (which is exactly what we're trying to do here).

With `fetch` you are able to easily supply a JS object for options.

```javascript
fetch("api/url", {
  mode: "cors",
});
```

## Assignment

### [Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

Fetch is promise-based and is integrated with features of the modern web.

With the Fetch API, you make a request by calling `fetch()`, which is available
as a global function in both `window` and `worker` contexts. You pass it a
`Request` object or a string containing the URL to fetch, along with an
optional argument to configure the request.

The `fetch()` function returns a `Promise` which is fulfilled with a `Response`
object representing the server's response.

#### Making a request

To make a request, call `fetch()`, passing in:

1. a definition of the resource to fetch.
1. optionally, an object containing options to configure the request

##### Setting the method

By default, `fetch()` makes a `GET` request, but you can use the `method`
option to use a different **request method**

If the `mode` option is set to `no-cors`, then `method` must be one of `GET`,
`POST`, or `HEAD`.

##### Setting a body

The request body is the payload of the request: it's the thing the client is
sending to the server.

##### Setting headers

Request headers give the server information about the request.

To set request headers, assign them to the `headers` option.

Alternatively, you can construct a `Headers` object, add headers to that object
using `Headers.append()`, then assign the `Headers` object to the `headers`
option.

##### Sending data in a GET request

You can do this by using `URLSearchParams` to encode the data, and then
appending it to the URL.

##### Making cross-origin requests

Whether a request can be made cross-origin or not is determined by the value of
the `RequestInit.mode` option. This may take one of three values: `cors`,
`same-origin`, or `no-cors`.

- default is `cors`.
- setting `mode` to `same-origin` disallows cross-origin requests completely
- setting `mode` to `no-cors` disables CORS for cross-origin requests.

##### Including credentials

Credentials are cookies, **TLS** client certificates, or authentication headers
containing a username and password.

To control whether or not the browser sends credentials, as well as whether the
browser respects any `Set-Cookie` response headers, set the `credentials`
option, which can take one of the following three values:

1. `omit`: never send cred in the request or include cred in the response
1. `same-origin`: only send and include cred for same-origin requests
1. `include`: always include

> If a cookie's `SameSite` attribute is set to `Strict` or `Lax`, then the
> cookie will not be sent cross-site, even if `credentials` is set to
> `include`.

Including credentials in cross-origin requests can make a site vulnerable to
CSRF attacks, so even if `credentials` is set to `include`, the server must
also agree to their inclusion by including the
`Access-Control-Allow-Credentials` header in its response. Additionally, in
this situation, the server must explicitly specify the client's origin in the
`Access-Control-Allow-Origin` response header.

##### Creating a `Request` object

The `Request()` constructor takes the same arguments as `fetch()` itself. This
means that instead of passing options into `fetch()`, you can pass the same
options to the `Request()` constructor, and then pass that object to `fetch()`.

#### Canceling a request

To make a request cancelable, create an `AbortController`, and assign its
`AbortSignal` to the request's `signal` property.

To cancel the request, call the controller's `abort()` method. The `fetch()`
call will reject the promise with an `AbortError` exception.

If the request is aborted after the `fetch()` call has been fulfilled but
before the response body has been read, then attempting to read the response
body will reject with an `AbortError` exception.

#### Handling the response

##### Checking response status

A common pattern is to check the value of `ok` and throw if it is `false`.

##### Checking the response type

Responses have a `type` property that can be one of the following:

- `basic`: the request was a same-origin request
- `cors`: the request was a cross-origin CORS request
- `opaque`: the request was a cross-origin simple request made with the
  `no-cors` mode
- `opaqueredirect`: the request set the `redirect` option to `manual`, and the
  server returned a **redirected status**.

##### Checking headers

A common use case for this is to check the content type before trying to read
the body.

##### Reading the response body

The `Response` interface provides a number of methods to retrieve the entire
body contents in a variety of different formats.

##### Streaming the response body

Request and response bodies are actually `ReadableStream` objects, and whenever
you read them, you're streamiung the content.o

##### Processing a text file line by line

##### Locked and disturbed streams

The consequences of request and response bodies being streams are that:

- if a reader haas been attached to a stream using
  `ReadableStream.getReader()`, then the stream is _locked_, and nothing else
  can read the stream.
- if any content has been read from the stream, then teh stream is _disturbed_,
  and nothing else can read from the stream.

If you do need to read the body more than once, you must call
`Response.clone()` before reading the body.

This is a common pattern when **implementing an offline cache with service
workers**. The service worker wants to return the response to the app, but also
to cache the response.
