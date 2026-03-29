sequenceDiagram
    participant Browser
    participant Server

    Browser->>Server: GET /exampleapp/notes
    Server-->>Browser: 200 OK (HTML document)

    Browser->>Server: GET /exampleapp/main.css
    Server-->>Browser: 200 OK (CSS file)

    Browser->>Server: GET /exampleapp/main.js
    Server-->>Browser: 200 OK (JavaScript file)

    Browser->>Server: GET /exampleapp/data.json
    Server-->>Browser: 200 OK (JSON data)

    Note over Browser,Server: User submits a new note

    Browser->>Server: POST /exampleapp/new_note
    Server-->>Browser: 302 Found (Redirect to /exampleapp/notes)

    Browser->>Server: GET /exampleapp/notes
    Server-->>Browser: 200 OK (Updated HTML document)