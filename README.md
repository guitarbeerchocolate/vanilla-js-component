# vanilla-js-component
The template from which to fork multiple JavaScript component projects. This project relies on node.js.
## Technology standards
HTML5

SASS

CSS grid

BEM

Media queries

Vanilla JavaScript ES6

## Getting started
Use the file called install to get up to date versions of all the packages you need. You may need to add a file extension and executable rights for different operating systems such as .bat for Microsoft or .sh for GNU/Linux.

Run the install script. In this example I'm running it from GNU/Linux after making sure that the file 'install' is given the right to execute as a program:

`./install`

Now to change package.json. First open the file package.json.backup, and copy its contents. Now open the file package.json and replace the line:

`"test": "echo \"Error: no test specified\" && exit 1"`

with the contents of the clipboard.

## How to use
You should edit the contents of the `src` and `test` directories.
To perform tests on your work using mocha and chai, from the root directory, type:

`npm run test`

To compile changes in the `src` directory there are 2 options:

For live changes visible through http://localhost:8080

`npm run build`

For building production versions visible through http://localhost/<your location>/index.html

`npm run build:prod`

## Example components
I will hopefully be building the following components using forks of this framework.
* Carousel
* Logo using images and text to add to header
* Responsive image with placeholder
* Figure
* Alert
* Card
* Accordion
* Media object
* Modal
* Navbar
* Pagination

For all ideas see Frameworks such as Foundation or Bootstrap.
