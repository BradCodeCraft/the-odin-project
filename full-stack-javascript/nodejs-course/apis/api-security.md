# Introduction

Securing your API is an important step. When we were using Express to serve
view templates we used PassportJS along with a username and password to
authenticate users, but that is not the only way to secure an Express app, and
in the context of an API it often makes sense to use a different strategy. The
username and password session pattern that we learned previously will still
work of course, though it is made a little more complicated by the fact that
we've separated our front-end code from the back-end.

Another strategy is to generate and pass a secure token between our back-end
and front-end code. Doing so will make sure that our user’s username and
password are not compromised and will also give us the ability to expire our
user’s session for added security.

This strategy, while particularly useful with APIs can be used with a
traditional view-template project as well. The main difference here is that
instead of setting and checking a cookie we’re passing a special token in the
header of our request.

## Assignment

### [Node.js API Authentication With JWT](https://www.youtube.com/watch?v=7nafaH9SddU)

`npm i express jsonwebtoken`

### [What is JWT and Why Should You use JWT](https://www.youtube.com/watch?v=7Q17ubqLfaM)

#### What is JWT

The server does not have to remember anything, compared to session.

#### How JWT works

#### Why you should use JWT
