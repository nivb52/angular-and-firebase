// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
require('dotenv').config()
export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: process.env.firebaseApiKey,
    authDomain: "ng-trello-e35eb.firebaseapp.com",
    databaseURL: "https://ng-trello-e35eb.firebaseio.com",
    projectId: "ng-trello-e35eb",
    storageBucket: "ng-trello-e35eb.appspot.com",
    messagingSenderId: "729412675846",
    appId: "1:729412675846:web:12c0b6fbc1857f69e89687"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
