import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyB8bE8-88JHvpogASOTXmi1rlrvZ8_9oYE",
  authDomain: "tip-calculator-app-601d7.firebaseapp.com",
  projectId: "tip-calculator-app-601d7",
  storageBucket: "tip-calculator-app-601d7.appspot.com",
  messagingSenderId: "331026805847",
  appId: "1:331026805847:web:67d4b8e66656f4db659f12"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const tipPercentageRef = collection(db, "percentage");

export async function getPercentage() {
    const snapshot = await getDocs(tipPercentageRef);
    const percentage = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }));
    return percentage;
}
