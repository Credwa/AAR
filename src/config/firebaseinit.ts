import firebase from 'firebase/app';

import 'firebase/database';
import 'firebase/firestore';
import 'firebase/auth';
const configData = require('./config.json');

const config = {
  apiKey: configData.apiKey,
  authDomain: configData.authDomain,
  databaseURL: configData.databaseURL,
  storageBucket: configData.storageBucket,
  projectId: configData.projectId,
  messagingSenderId: configData.messagingSenderId
};
const firebaseApp = firebase.initializeApp(config);
const settings = { /* your settings... */ timestampsInSnapshots: true };
firebase.firestore().settings(settings);

// const database = firebase.database();
export default firebaseApp;
