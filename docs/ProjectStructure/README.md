

## Project structure

This is the current project structure for our web application. 

```
.
├── bin
├── data
├── models
├── public
|   ├── fonts
|   ├── images
|   ├── javascripts
|   └── stylesheets
├── routes
├── specs
├── views
|   ├── partials
|   └── layouts
├── app.js
├── notes.md
├── package.json
└── README.md
```

The **public** folder serves as the basic file system, with the expressjs routing layered over the top of the application. This holds all the static files for the website, including image, scripts, stylesheets and fonts. 

> **Important:** Files in the public folder are referenced from within [layouts](#) and [templates](#), when we include files on a layout or template using scripts or image etc, We need to ensure we use [absolute paths](https://en.wikipedia.org/wiki/Path_(computing)#Absolute_and_relative_paths), that is paths must have a leading '/' and reference a file from the root of the website. This prevents errors with including resources where the url structure changes from a top level node to a sub level node (in a sub directory). 

The **models** , **routes**, and **views** folder serve as the basis for the expressjs web appication itself. These folders contain the component pieces for the application. The handlebars templating engine we are using [express-hbs](https://github.com/barc/express-hbs) allows for [partials](), [content-sections]() and [layouts]().

The **specs** folder contains Ui Tests for the application. These tests use [protractor]() to automatically test the UI functionality in the browser from the command line. Protractor  starts the browser up for you and clicks the buttons and links, then validates it gets the correct response from the browser. This saves a lot of manual work and it is a lot easier to just run a test suite before checking in code than manually going through each feature to check if you've broken something. The **data** folder contains the basic setup data for a new database, this should allow automated testing to run on a fresh database.

The [package.json](https://docs.npmjs.com/files/package.json) file keeps the dependencies  and development dependencies (dependencies not required on the server) for the project. This file also has a [scripts](https://docs.npmjs.com/misc/scripts) section that allows you to add a command to `npm run` like `npm run update-database`. Given that we have written a nodejs file update-database.js that connects to the database to  run the updates when we put it in the package.json file this would look something like this in the package.json file:
```
"scripts": {
    "update-database": "node ./update-database.js"
},
```

The **app.js** and the **bin/www** file are essentially the [expressjs]() server itself, all the parameters for configuring the server such as [PORT]() are passed into these files.

