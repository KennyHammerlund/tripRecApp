# app

A trip recording web application

## TODO:
- add stop page
- add image upload to stops from current trip page
- add persostant current trip banner
- refactor navigation bar

## Anything put into an index.js file will automatically be refrenced if you import the folder.

#Example:

Folder Structure:
client - meteor looks here to initialize client
server - meteor looks here to initialize server
imports - the beat and potatos
startup
client - client startup
server - server startup
UI - The code involved with the UI, no resources, i.e. stylesheets, images, media etc
components - reuseable components, things used in multiple places
pages
pagename - for each page create a folder inside has index.js and any other files only used by that page. If they are referenced by other pages they get moved to the components folder.

### mainroutes.js

Houses the redirects to files based on the route. If browser goes to /page then go to folder /page/index.js

## CSS

sass .scss files are automatically compiled with the meteor build program. 
-responsive.scss can be imported to obtan breakpoints for mobile

Bootstrap 4 is included in the package this gives access to all the bootsrap css classes
https://getbootstrap.com/docs/4.1/getting-started/introduction/

most usefull is the grid system for reactive layouts and the margin/padding classes. Simple way to add margin would be add the class m-t-10 (m= margin t= top 10 = 10px)
style.css - global styles
custom.css - css used on just one page
