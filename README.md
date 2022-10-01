# react-gallery-app

A photo searching app using the flickr API.

### Features
Users can search photos hosted on flickr using the search bar, navigation buttons as default searches, or the URL to return photos. 

### Setup
1. Run the command `npm i --save` to install dependencies.
2. Using your API key
    1. Create a file name `config.js` and store it in the `/src` directory. 
    2. Within `config.js`, create a variable named `apiKey` and set it's value equal to your flickr api key. The variable must be a `string`.
    3. Export the variable. It's already being imported into `App.js`.
