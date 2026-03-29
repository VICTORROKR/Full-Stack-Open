sequenceDiagram
    participant Navegador
    participant Servidor

    Navegador->>Servidor: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate Servidor
    Servidor-->>Navegador: Documento HTML
    deactivate Servidor

    Navegador->>Servidor: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate Servidor
    Servidor-->>Navegador: Archivo CSS (main.css)
    deactivate Servidor

    Navegador->>Servidor: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate Servidor
    Servidor-->>Navegador: Archivo JavaScript (spa.js)
    deactivate Servidor

    Note right of Navegador: El navegador ejecuta el código JavaScript que solicita los datos JSON

    Navegador->>Servidor: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate Servidor
    Servidor-->>Navegador: Datos JSON con las notas [{"content": "...", "date": "..."}, ...]
    deactivate Servidor

    Note right of Navegador: El navegador ejecuta la función callback que renderiza las notas en la página