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


## Real world
we use mixture of both 
-Example: we've a product and we want to listen to *ADD to CART* event so we keep whole product on server and use only the button on client-side. 


## app direcotery 
By default all components in the app directory are server side rendered. 
- if component is rendered on client. search engines can't see the content.

## Client side rendering in NextJs
we've to use 'use client' directive. thats all. and the componenet will become client.
- 'use client' tells compiler to include in JS bundle and if depends on other components they'll become client automatically we don't have to explicitly define.