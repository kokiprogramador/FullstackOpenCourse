#secuenceGetDiagram

 ##participant browser
 ##participant server

 #browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
 ##activate server
 #server->>browser: get HTML DOCUMENT
 ##deactivate server

 #browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
 ##activate server
 #server->>browser: get de css file
 ##deactivate server

 #browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
 ##activate server
 #server->>browser: get the spa.js file
 ##deactivate server

 #browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
 ##activate server
 #server->>: get the data.json file
 ##deactivate server

 ###This piece of code calls a calback function to render the notes.
 ###xhttp.open('GET', '/data.json', true)
 ###xhttp.send()

##Note: Then the user clicks de notes buttom to create a note.


#secuencePostDiagram

    ##participant browser
    ##participant server

    ###Note: First we have to capture the data with a object from the frontend, to send it to the backend
    ###and after use a callback function for rendering the note.

    #browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    ##activate server
    ##server->>browser: send a post request with the headers = {content: 'example message', date: 'example date'}
    #deactivate server

    ###Note: The browsers reloads the page

    #browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    ##activate server
    #server-->>browser: get the css file
    ##deactivate server

    #browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    ##activate server
    #server->>browser: get the main.js

    #browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    ##activate server
    #server-->>browser: get request [{ "content": "example message", "date": "example date" }, ... ]
    ##deactivate server
