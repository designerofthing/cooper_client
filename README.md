# Cooper Fitness Test calculator App - Client

## About this project
This project was a collaboration between https://github.com/ViaMarcus and https://github.com/designerofthing.

It is a single page web application allowing the user to calculate their Fitness using the Cooper Test method and log in to store and see their previous values.<br>
This is the client side app with the backend API created in Ruby on Rails in a separate [repo](https://github.com/designerofthing/cooper_challenge).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The project also uses [SemanticUI](https://react.semantic-ui.com/) for React for styling.

The graphical representations come via [Chartjs](https://www.chartjs.org/).

The application's features are tested using Cypress.<br>
The components are test using Jest and Enzyme.

## Dependencies
To run locally you will need to install the packages in the package.json using a package manager for JavaScript.<br>
On top of the packages from the bootstrap we are also using:
- Cypress
- Enzyme
- Semantic-ui-react
- Chartjs

## Deployment
### Online
https://reactcoopersw.netlify.app/
### Instructions for local deployment
To deploy locally, clone the repository and install packages using your package manager, then run:
#### `yarn start`
See api repo for corresponding instructions.

Runs the app in the development mode.<br />
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

## Acknowledgements:<br>
Built with the guidance of the Craft Academy documentation, Reactjs.org, react.semantic-ui.com, chartjs.org and Stackoverflow.

## Improvments
- More user management functions
    - Register
    - Update account, etc
    - OAuth login (Facebook, Twitter)
- Functionality
    - Calculate VO2-max
    - Add the BMI calculator
    - Add local storage for better performance (no internet connection)

## License
This app is open source software [licensed as MIT](https://mit-license.org/).
