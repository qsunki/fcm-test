import {createApp} from 'vue'
import App from './App.vue'

import {firebaseConfig, vapidKey} from "../config.js";
import {initializeApp} from "firebase/app";
import {getMessaging, getToken, onMessage} from 'firebase/messaging';


const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
getToken(messaging, {vapidKey}).then((currentToken) => {
        if (currentToken) {
            console.log(currentToken);
        } else {
            console.log('No registration token available. Request permission to generate one.');
        }
    }
);

onMessage(messaging, (payload) => {
    console.log('Message received. ', payload);
});

createApp(App).mount('#app')
