import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
  apiKey: 'AIzaSyCeYV0mS2y2IW4ycN2f5RBBS4OnOfT70ss',
  authDomain: 'bartesystem.firebaseapp.com',
  projectId: 'bartesystem',
  storageBucket: 'bartesystem.appspot.com',
  messagingSenderId: '868176698744',
  appId: '1:868176698744:web:dc2891127e94aa1ccebc8d',
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
