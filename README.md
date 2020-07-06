# [WalkSafe Home](http://www.walksafe.co)
WalkSafe Home is a React-powered personal safety app in development that provides easy access to emergency contact with the click of just one button. Inspired by friends who needed a lightweight panic button application that did not require an app download and would work on any device.

<p align="center"><img src="https://raw.githubusercontent.com/ShreyRavi/walk-safe-home/master/walksafe-screenshot.jpg" height="33%" width="23%"><br />Screenshots of the WalkSafe Personal Safety App's homepage.</p>

## [Live Demo](http://www.walksafe.co)
Live React web-app deployed to a Github Pages environment, accessible at [www.walksafe.co](http://www.walksafe.co).

React Native versions will be pushed on a seperate branch on this repository named `walksafe-react-native` when completed and published.

## Usage
WalkSafe Home is a personal safety app that calls and texts a user's emergency contacts with the click of just one button. When the panic button is clicked, one contact of the user's choice will be called from their phone. In addition, up to 5 other number(s) will be texted an SOS message automatically from our service.

## Local Setup
1. Clone Repository
```
git clone https://github.com/ShreyRavi/walk-safe-home.git
```
2. Use `npm` to install required modules
```
npm install
```
3. Run the React project using `npm`
```
npm start
```
4. Navigate to [`https://localhost:3000/`](https://localhost:3000/) (if not automatically opened) to see React app locally

## React Components
- **SettingsDrawer** - a React component that holds the logic and UI for editing the number(s) to be called or texted
  - **CallInput** - a React component that holds the logic and UI for editing the number to be called
  - **TextInput** - a React component that holds the logic and UI for editing the number(s) to be texted
- **PanicButton** - a React component that holds Geolocation component and main logic for showing and activating the panic button
  - **Alert** - a React component that holds the code to show a MuiAlert from Material-UI
- **Header** - a React component that showcases a Material-UI top AppBar and serves as the header of the app
- **HelpDrawer** - a React component that holds the logic the informational left drawer activated by clicking on the top-left button
  - **Footer** - a React component that displays typical footer information

## Built With
- [React](https://reactjs.org/)
- [Material-UI](https://material-ui.com/)
- [Create React App](https://github.com/facebook/create-react-app)
- [gh-pages](https://www.npmjs.com/package/gh-pages)
- [Twilio](https://www.twilio.com/)
- [React-Geolocation](https://www.npmjs.com/package/react-geolocation)
- [React-Image](https://www.npmjs.com/package/react-image)

## Future Plans
- Add Twilio integration
- Add user accounts and back-end database
- Release React Native app for iOS & Android
- Improve UI to better serve users

## License
[The MIT License (MIT)](https://raw.githubusercontent.com/ShreyRavi/walk-safe-home/master/LICENSE)

## Disclaimer
WalkSafe Home is not a replacement for law enforcement or safety practices. Use at your own risk.
