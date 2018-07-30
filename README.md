# Fetch-current-song-spotify

## What does the small app do?
The app represents a small functionality/plugin that displays the current playing song on a real Spotify account after authenticating through the Spotify authentication services.

## How to test and run the app? 
For now, the app can function only on your local machine, which is why a couple of simple steps are needed: 
 -- download the files as a zip archive or clone the repository
 -- __cd__ with the command line (ex: Node.js command prompt)into the folder : __login-server__ and run __npm i__
 -- do the same for the other folder : __spotify-api-react__ (also run __npm i__ here)
 -- inside the __login-server__ file, type the command: __node server.js__ to run the node server on the __8888__ port
 -- open a different command line (ex: __Visual Studio Code's own terminal__ or the __Git Bash__ command prompt), __cd__ into the file __spotify-api-react__ and type in __npm start__ 
 -- if a new browser tab does not open automatically, then type in your browser's header: localhost://3000 to see the page
