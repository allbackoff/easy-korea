import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCI-G1kHvo2PDkC_cUeeMRBiWeponZhKJ0",
    authDomain: "hci-project-910a0.firebaseapp.com",
    projectId: "hci-project-910a0",
    storageBucket: "hci-project-910a0.appspot.com",
    messagingSenderId: "675247266886",
    appId: "1:675247266886:web:34fc8e8524a088d6d27e47",
    measurementId: "G-BK33MBGSTK"
};

const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire