# Bookmarks-Enhanced • Server
NodeJS server to learn the technology.

Stack :
* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Swagger](https://swagger.io/)
* [MongoDB](https://www.mongodb.com/)


See also :
* [The web client (VueJS)](../client/README.md)


## Purpose
Microservice API to manage bookmarks (get, remove, edit). A bookmark is composed of a title, an url, a creation date, and some tags.  
A tag is composed of a name and a color.


## Architecture
[![](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

**The Dependency Rule** :
> Source code dependencies can only point inwards. Nothing in an inner circle can know anything at all about something in an outer circle.

### Entities
> These entities are the business objects of the application. They encapsulate the most general and high-level rules. They are the least likely to change when something external changes.

There are two entities : `Bookmark` and `Tag` which encapsulate information and perform preprocessing to format them before an insertion in a persistent storage.

### Use Cases
> Contains application specific business rules. It encapsulates and implements all of the use cases of the system. These use cases orchestrate the flow of data to and from the entities, and direct those entities to use their enterprise wide business rules to achieve the goals of the use case.


### Interface Adapters
> Set of adapters that convert data from the format most convenient for the use cases and entities, to the format most convenient for some external agency such as the Database or the Web. 
> Similarly, data is converted, in this layer, from the form most convenient for entities and use cases, into the form most convenient for whatever persistence framework is being used. i.e. The Database. 

We achieve this layer with two type of *component* :
- **Controllers :** Extract the parameters from the http request and pass them to the correct use case
- **Data access :** Communication with the MongoDB database 


