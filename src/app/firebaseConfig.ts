import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAD6xpnTU9J2jT4YAG0fjlJKtLTtsw8JVY",
  authDomain: "project-5---silas.firebaseapp.com",
  databaseURL: "https://project-5---silas-default-rtdb.firebaseio.com",
  projectId: "project-5---silas",
  storageBucket: "project-5---silas.appspot.com",
  messagingSenderId: "269490397032",
  appId: "1:269490397032:web:a92510b7674199a0be80dd"
};

const app = initializeApp(firebaseConfig);
const dbFirebase = getDatabase(app); // Khởi tạo db base cho app của mình
const authFirebase=getAuth(app); // Để hỗ trợ cho chức năng đăng nhập và đăng kí
export {dbFirebase,authFirebase};