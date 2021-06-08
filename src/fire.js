import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCti8ASSHwg19c_9mQa2QxpbB98XGO9wnM",
    authDomain: "easy-korea-db.firebaseapp.com",
    projectId: "easy-korea-db",
    storageBucket: "easy-korea-db.appspot.com",
    messagingSenderId: "90863319669",
    appId: "1:90863319669:web:6839dbca4d20d4acf7d63c"

    // apiKey: "AIzaSyCI-G1kHvo2PDkC_cUeeMRBiWeponZhKJ0",
    // authDomain: "hci-project-910a0.firebaseapp.com",
    // projectId: "hci-project-910a0",
    // storageBucket: "hci-project-910a0.appspot.com",
    // messagingSenderId: "675247266886",
    // appId: "1:675247266886:web:34fc8e8524a088d6d27e47",
    // measurementId: "G-BK33MBGSTK"
};

const fire = firebase.initializeApp(firebaseConfig);

const db = fire.firestore();

//firebase.analytics();

// export default fire
export {fire, db}