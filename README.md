# Console-Log

# Node Express Handlebars

### Overview

In this assignment, you'll create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). Be sure to follow the MVC design pattern; use Node and MySQL to query and route data in your app, and Handlebars to generate your HTML.

### Before You Begin

- Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

- Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.

- Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

- Your app will store every burger in a database, whether devoured or not.

- [Check out this video of the app for a run-through of how it works](https://youtu.be/msvdn95x9OM).

#### View setup

     - Setup the `index.handlebars` to have the template that Handlebars can render onto.

     - Create a button in `index.handlebars` that will submit the user input into the database.
