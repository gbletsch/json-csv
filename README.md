# JSON2CSV

[{
    "name": "Gui",
    "surname": "Let"
},{
    "name": "Pat",
    "surname": "Jan"
}]

[{
    "name":"John", 
    "age":31, 
    "city":"New York"
},{
    "name":"John", 
    "age":31, 
    "city":"New York"
}]


**Tier:** 1-Beginner

Developers and end users are both experts in their own domains and as such, 
each speaks using a domain-specific language and terminology. This also extends
to the tools used to manipulate data. Developers have found JSON to be a
universally accepted method for transferring data between applications. End
Users, on the other hand, rely on spreadsheets to organize and analyze data.

The objective of JSON2CSV is to help bridge the gap between JSON and CSV by
converting JSON to CSV to make it easier to review data in a spreadsheet. It
allows the user to paste JSON into a text box to generate its equivalent CSV.

### Constraints ###

- You may not use any libraries or packages designed to perform this type of
conversion.
- If you choose to implement this in JavaScript don't use complicated looping
in your first implementation. Instead, use `Object.keys()` and `Object.values`
to generate CSV for the header and data rows.
- Nested JSON structures are not supported.

## User Stories

-   [ ] ~~User can paste JSON syntax into a text box~~
-   [ ] ~~User can click a 'Convert' button to validate the JSON text box and convert it to CSV~~
-   [ ] ~~User can see the converted CSV in another text box~~
-   [ ] ~~User can see an warning message if the JSON text box is empty or if it doesn't contain valid JSON~~
-   [ ] ~~User can click a 'Clear' button to clear the contents of both the JSON and CSV text boxes.~~

## Bonus features

-   [ ] ~~User can enter the path to the JSON file on the local file system in a text box (I used the new file API)~~
-   [ ] ~~User can click a 'Open' button to load file containing the JSON into the text box~~
-   [ ] ~~User can see a warning message if the JSON file is not found~~
-   [ ] ~~User can enter the path the CSV file is to be saved to in a text box (I made just the name)~~
-   [ ] ~~User can click a 'Save' button to save the CSV file to the local file system (using the new download tag)~~
-   [ ] User can see a warning message if the CSV text box is empty or if the save operation failed.
-   [ ] User can convert CSV data to JSON. See [CSV2JSON](./CSV2JSON-App.md)

## Useful links and resources

- [Comma Separated Values (CSV)](https://en.wikipedia.org/wiki/Comma-separated_values)
- [JavaScript Object Notation (JSON)](https://www.json.org/)
- [MDN Javascript Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [Saving a file with pure JS](https://codepen.io/davidelrizzo/pen/cxsGb)
- [Reading files in Javascript](https://codepen.io/jduprey/details/xbale)

## Example projects

Try to complete your JSON2CSV implementation before reviewing the example
project(s).

- [JSON to CSV Converter](https://codepen.io/JFarrow/pen/umjGF)
- [JSV Converter](https://gpaiva00.github.io/json-csv)



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
