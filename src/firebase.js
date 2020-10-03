import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyCHpnhoAiFT8Sjs9P-wd-JBBrFdaXemOPk",
	authDomain: "fullstack-challenge-9e814.firebaseapp.com",
	databaseURL: "https://fullstack-challenge-9e814.firebaseio.com",
	projectId: "fullstack-challenge-9e814",
	storageBucket: "fullstack-challenge-9e814.appspot.com",
	messagingSenderId: "675742892717",
	appId: "1:675742892717:web:1797aa35d685f40c833c24",
	measurementId: "G-EXNYRH0KSR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
