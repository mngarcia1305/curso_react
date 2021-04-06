import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDpBT3dXj_f3aKexlGd1LEAzKpdjd_5-5o",
    authDomain: "mngarcia-942fc.firebaseapp.com",
    projectId: "mngarcia-942fc",
    storageBucket: "mngarcia-942fc.appspot.com",
    messagingSenderId: "648422160887",
    appId: "1:648422160887:web:57525c26dce513a839d6f2"
});

export function getFirebase() {
    return firebaseConfig;
}
export function GetFirestore() {
    return firebase.firestore(firebaseConfig);
}
