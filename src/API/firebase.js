import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAltd4n7g7pxCovTkmQPUvJ-0lZkJAKE_s',
  authDomain: 'hardwareapp-5fb7d.firebaseapp.com',
  databaseURL: 'https://hardwareapp-5fb7d.firebaseio.com',
  projectId: 'hardwareapp-5fb7d',
  storageBucket: 'hardwareapp-5fb7d.appspot.com',
  messagingSenderId: '565689186444',
  appId: '1:565689186444:web:e3cc8609ca21408791e3a9',
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

// eslint-disable-next-line import/prefer-default-export
export { firestore };
