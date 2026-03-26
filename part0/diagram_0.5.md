sequenceDiagram
    participant Navegador
    participant Servidor

    Navegador->>Servidor: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate Servidor
    Servidor-->>Navegador: Documento HTML (200 OK)
    deactivate Servidor

    Navegador->>Servidor: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate Servidor
    Servidor-->>Navegador: Archivo CSS (main.css)
    deactivate Servidor

    Navegador->>Servidor: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate Servidor
    Servidor-->>Navegador: Archivo JavaScript (spa.js)
    deactivate Servidor

    Note right of Navegador: El navegador ejecuta el código JavaScript<br/>que solicita los datos JSON al servidor

    Navegador->>Servidor: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate Servidor
    Servidor-->>Navegador: Datos de notas en formato JSON
    deactivate Servidor

    Note right of Navegador: El usuario escribe una nueva nota y<br/>el navegador envía los datos asíncronamente

    Navegador->>Servidor: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate Servidor
    Servidor-->>Navegador: 201 Created (JSON: {"message":"note created"})
    deactivate Servidor