
```mermaid
sequenceDiagram
    participant browser
    participant server
    
    Note right of browser: The user writes a note and uses "Save" button.
    Note right of browser: The note is pushed to the list of notes.
    Note right of browser: The input is empty.
    Note right of browser: The notes are redraw.

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa {"content":"hola","date":"2024-01-25T18:10:39.104Z"}
    activate server
    Note left of server: The server stores the new note
    server-->>browser: 201 Response [Created] {"message": "note created"}
    deactivate server

    
