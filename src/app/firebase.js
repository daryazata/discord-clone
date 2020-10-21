import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyC9QDU-MvyUBecmmbn6qK4VsJRJ0WaVbi0",
    authDomain: "discord-clone-e2dfe.firebaseapp.com",
    databaseURL: "https://discord-clone-e2dfe.firebaseio.com",
    projectId: "discord-clone-e2dfe",
    storageBucket: "discord-clone-e2dfe.appspot.com",
    messagingSenderId: "1043387033141",
    appId: "1:1043387033141:web:7670f2e379b36887df737c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  const auth = firebase.auth()

  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, provider}
  export default db