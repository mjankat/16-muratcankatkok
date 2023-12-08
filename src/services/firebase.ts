import { initializeApp } from "firebase/app";
import { getFirestore, initializeFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {
  getAuth,
  initializeAuth,
  // @ts-ignore
  getReactNativePersistence,
} from "firebase/auth";

import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyBObnQl0vIvpqV2BDH-RKbZYqS7qKlknOk",
  authDomain: "hopidb-8c906.firebaseapp.com",
  projectId: "hopidb-8c906",
  storageBucket: "hopidb-8c906.appspot.com",
  messagingSenderId: "1016491762558",
  appId: "1:1016491762558:web:fadd6a6200ad6b0558092f"
};


const app = initializeApp(firebaseConfig);

const db = initializeFirestore(app, {
  experimentalForceLongPolling: true
});

const storage = getStorage(app);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { db, storage, auth };


