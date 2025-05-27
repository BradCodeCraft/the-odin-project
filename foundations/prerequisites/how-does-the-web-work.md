# How Does the Web Work?

## [How does the Internet work?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work)

### Summary

The **Internet** is the backbone of the Web, the technical
infrastructure that makes the Web possible. At its most
basic, the Internet is a large network of computers which
communicate all together.

The various technologies that support the Internet have
evolved over time, but the way it works hasn't changed  
that much: Internet is a way to connect computers all
together and ensure that, whatever happens, they find a
way to stay connected.

### Active Learning

### Deeper dive

#### A simple network

When two computers need to communicate, you have to link them,
either physically or wirelessly. All modern computers can
sustain any of those connections.

Such a network is not limited to two computers.

To solve the problem of network cable complication, each computer
on a network is connected to a special tiny computer called a
_network switch_ (or _switch_ for short). This switch has only one
job: like a signaler at a railway station, it makes sure that
messages sent from a given computer arrive only at their target
destination computer/

#### A network of networks

The more switches a packet has to go through, the longer it
takes to reach its destination. And you can't have just a tree
of switches, because then a single switch failure may disconnect
a large portion of devices. To solve this problem, we keep each
local network as small as possible, and we connect these local
networks using a separate device called a _router_. A router is
a computer that knows how to forward messages between networks.

To connect our network to the telephone infrastructure, we need
a special piece of equipment called a _modem_. This _modem_ turns
the information from our network into information manageable by
the telephone infrastructure and vice versa.

To send message, we will connect our network to an Internet Service
Provider (ISP). An ISP is a company that manages some special _routers_
that are all linked together and can also access other ISPs' routers.

#### Finding computers

Any computer linked to a network has a unique address that identifies
it, called an "IP address" (where IP stands for _Internet Protocol_).
It's an address made of a series of four numbers separated by dots.

To make things easier, we can alias an IP address with a human-readable
name called a _domain name_.

#### Internet and the Web

Some computers (called _Web servers_) can send messages intelligible to web
browsers. The _Internet_ is an infrastructure, whereas the _Web_ is a service
built on top of the infrastructure.

#### Intranets and Extranets

Intranets are _private_ networks that are restricted to members of
a particular organization. They are commonly used to provide a portal
for members to securely access shared resources, collaborate and communicate.

Extranets open all or part of a private network to allow sharing and
collaboration with other organizations.

Both intranets and extranets run on the same kind of infrastructure as the
Internet, and use the same protocols. They can therefore be accessed by authorized
members from different physical locations.

## [Browsing the web](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web)

### The difference between web page, website, web server, and search engine

#### **Web page**

A document that can be displayed in a web browser.

#### **Website**

A collection of web pages grouped together into a single resource, with links
connecting them together. Often called a "site".

#### Web server

A computer that hosts a website on the Internet.

#### Web service

A software that responds to requests over the Internet to perform a function
or provide data. A web service is typically backed by a web server, and may
provide web pages for users to interact with.

#### Search engine

A web service that helps you find other web pages. Search engines are normally
accessed through a web browser or through a web page.

### Web page

A **web page** can embed a variety of different types of resources such as:

- _Style information_ - controlling a page's look-and-feel.
- _Scripts_ - which add interactivity to the page.
- _Media_ - images, sounds, and videos.

All web pages can each be found at a unique location (web address, also called
a _URL_).

### Website

A _website_ is a collection of linked web pages (plus their associated resources)
that share a unique **domain name**.

### Web server

"Hosting" means that all the _web pages_ and their associated files are available
on that computer. The _web server_ will send web page files it is hosting to a
user's browser when they attempt to load it.

### Search engine

### How the web works: the basics

Requests and responses

### Searching for information

If you are looking for general information about a specific web technology
feature, you should type the name of the feature into the MDN search box.

It's a good idea to search on a website such as **_StackOverflow_** for a
solution to a specific problem.

### Using AI

### A Cautionary tale

**You still need to understand what you are trying to do at a high level,
what the code is doing, and where each piece of code needs to be used**.

**When you are learning, spend time trying to solve the problem yourself
before searching for an answer, whether you are using AI or a conventional
search engine. It will make you a better developer**.

### Search tips

Include the language you are using in the search term.

Bookmark or make a copy of a useful answer, so you can find it again later.

Try entering the error into a search engine or AI prompt.

Stick with recommended sites like MDN and **StackOverflow**.

Advanced search techniques can give better results than just typing a plain
search term.

## [How the web works](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works#clients_and_servers)

### Clients and Servers

**Clients** are the typical web user's internet-connected devices and
web-accessing software available on those devices.

**Servers** are computers that store webpages, sites, or apps.

### The other parts of the toolbox

In order for data to get back and forth, we need the following things:

- **Your internet connection**: Allows you to send and receive data on the
  internet.
- **TCP/IP**: **Transmission Control Protocol** and **Internet Protocol** are
  the communication protocols that define how data should travel across
  the internet.
- **DNS**: The **Domain Name System** (DNS) is like an address book for websites.
- **HTTP** **Hypertext Transfer Protocol** is an application _protocol_ that
  defines a language for clients and servers to speak to each other.
- **Files**: A website is made up of many different files, which are like different
  goods you buy from the shop. These files come in two main types:

  - **Code**: websites are built primarily from HTML, CSS, and JavaScript.
  - **Assets**: this is a collective term for all the other items that
    appear on a website that aren't code that the browser interprets.

### So what happens, exactly?

### DNS explained

**IP address** represents a unique location on the web.

You can use a DNS lookup tool to find the IP address of a website.

### Packets explained

**Packets** describes the format in which the data is transferred
between the client and server.

There are multiple reasons why data is sent in small packets, but
most significantly:

- They are sometimes dropped or corrupted and, when this happens,
  it's quicker and easier to replace small chunks than entire files.
- Additionally, the packets can be routed along different paths,
  making the exchange faster and allowing many different users to
  download the same website at the same time.

### HTTP basics

### Other status codes

`301` the requested resource has been permanently moved to a new
location, which is provided in the response.

`400` the server can't process the request.

`403` the server will not give the client access to the requested resource.

`404` the server cannot find the requested resource.

`503` the request cannot be handled due to a problem with the server.

### Components of a URL

Web addresses that you type into the browser address bar form part of
**Uniform Resource Locators (URLS)**.

The main parts of the URL are:

- `https`: the **protocol** being used to send the request.
- `developer.mozilla.org` the **domain name** of the URL, which
  represents the top-level location of the server you are connecting to.
- `/en-US/` the **path** to the resource on the server that you are
  accessing.
