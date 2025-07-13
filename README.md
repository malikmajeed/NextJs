# NextJs
Next Js Practicing

## prerequisites
Install 3 Extensions
-- ES7, JavaScript and TypeScript by Microsoft, Tailwind CSS

## Routing
Routing is done automaticaly in next js
- create any directory inside the app - directory - will be considered as a route 
-- let say public/users/page.tsx or .js or jsx
-- file name must be page any other name won't be accessible. 
--now in browser search localhost:3000/users.   you'll get the anyfile.tsx


## Navigations links
- you can use anchor tag ( <a> ) but when its clicked it'll load the entire content which we don't want for efficiency purposes
- Now for this purpose we use <Link> tag

## Rendering of components

### Client Side Rendering:
Componenets are rendered on client slide (browser)
- Resource Intensive - larger amount of components : more memory usage.
- No SEO - search engines can't rendering our components like a web browser. 
- Sensitive data like api keys will be exposed to the clients. 

### Server Side Rendering:
Rendering of components on server side - in NodeJs runtime env. 
-smaller bundles
- Resource efficient
-SEO
- More secure.

#### Disadvantages
- can't listen to browser events 
- can't handle the interactivity - like click events etc. 
- can't access browser apis
- can't maintain state
- can't use effects


### Real world
we use mixture of both 
-Example: we've a product and we want to listen to *ADD to CART* event so we keep whole product on server and use only the button on client-side. 


### app direcotery 
By default all components in the app directory are server side rendered. 
- if component is rendered on client. search engines can't see the content.

### Client side rendering in NextJs
we've to use 'use client' directive. thats all. and the componenet will become client.
- 'use client' tells compiler to include in JS bundle and if depends on other components they'll become client automatically we don't have to explicitly define.


## Fetching data.
on Client useState() and useEffect() hooks can be used to fetch data. and React Query.
- There is an extra roundtrip to server.
- First to fetch and render the componenets 
- then to fetch data for those components

### Example.
-use the fake api fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log(json))

-now simple use the fetch api to fetch data.
    const res = await fetch('https://jsonplaceholder.typicode.com/users').
    const users = await res.json();
    console.log(users.anything) - below line
    - Now it won't return anything. instead it'll show an error becuase it don't know what the users return.
    so for this we define the interface of user

## Caching
NextJs comes with builtin cache system. 
-once the data is fetched from the server 
- for the 2nd request on the same api nextJs fetches from the data cache.
### Disabling cache
If a user wants to disable the cache give another parameter as object in the api fetch method
as {cache:no-store} this will disable caching. 
Ex: const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache:no-store}).
-This will always show the fresh data to the users. 
- but it'll comes with fetch. Axios won't work

## Static vs Dynamic Rendering
-Static: at build time. put a time. everytime you referesh the page the time won't change. {allow caching} page will serve as static
-Dynamic: at run time. everytime the timestamp will change. {cache:no-store} then page will serve as dynamic