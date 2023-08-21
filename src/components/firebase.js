import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
   apiKey: "AIzaSyCUFMYWt8gdplU45boJ74sqKEmdY-rPIfo",
   authDomain: "discord-clone-e89d6.firebaseapp.com",
   projectId: "discord-clone-e89d6",
   storageBucket: "discord-clone-e89d6.appspot.com",
   messagingSenderId: "18287505753",
   appId: "1:18287505753:web:3882a80548c58add5c9c48",
   measurementId: "G-2SVSZEFPR2"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);