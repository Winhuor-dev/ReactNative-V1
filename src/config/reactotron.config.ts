// import Reactotron from 'reactotron-react-native';
// import {reactotronRedux} from 'reactotron-redux';
// import sagaPlugin from 'reactotron-redux-saga';
// import apisaucePlugin from 'reactotron-apisauce';
// import AsyncStorage from '@react-native-community/async-storage';

// // Configure Reactotron
// const reactotron = Reactotron.configure({
//   name: 'YourAppName', // Replace with your app's name
//   host: '0.0.0.0', // Use '0.0.0.0' for simulator or replace with your machine's IP address
// })
//   .setAsyncStorageHandler(AsyncStorage) // Add AsyncStorage support
//   .useReactNative() // Add React Native plugins
//   .use(reactotronRedux()) // Add Redux plugin
//   .use(sagaPlugin()) // Add Redux Saga plugin
//   .use(apisaucePlugin()) // Add API Sauce plugin (optional)
//   .connect(); // Connect to Reactotron app

// // Clear the Reactotron console on every reload
// reactotron.clear();

// // Extend the global console object to include Reactotron's logging capabilities
// declare global {
//   interface Console {
//     tron: typeof Reactotron;
//   }
// }

// console.tron = reactotron;

// export default reactotron;
