import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD_zYEf_-_yB7bMyi_ThCfZp_SBsqog5p4",
  authDomain: "bookingapp-9b50c.firebaseapp.com",
  databaseURL:
    "https://bookingapp-9b50c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bookingapp-9b50c",
  storageBucket: "bookingapp-9b50c.appspot.com",
  messagingSenderId: "602233712646",
  appId: "1:602233712646:web:7ac64d0d3b489cc5a35387",
  measurementId: "G-Y9SVNBCFZ6",
};

export const newAccount = async (userAuth, info) => {
  if (!userAuth) return;

  const user = firestore.doc(`users/${userAuth.uid}`);
  const fetchUser = await user.get();

  if (!fetchUser.exist) {
    try {
      await user.set({
        displayName: info.name,
        email: info.email,
        isAdmin: false,
      });
    } catch (err) {
      console.log("err", err);
    }
  }
};

export const addProduct = async (productInfo) => {
  const { name, description, price, location, imageURL } = productInfo;
  const officesRef = await firestore.collection(`offices`).doc();

  try {
    officesRef.set({
      name,
      description,
      price,
      location,
      imageURL,
    });
  } catch (err) {
    console.log("Add product, error", err);
  }
};

export const getProducts = async () => {
  const productsArray = [];
  const officeRef = firestore.collection("offices");
  const snapshot = await officeRef.get();

  snapshot.forEach((doc) => {
    productsArray.push(doc.data());
  });
  
  return productsArray;
};

export const getUserBookings = async (email) => {
  const bookingsArray = [];
  const bookingsRef = firestore.collection('booking').where('email', '==',  email)
  const snapshot = await bookingsRef.get()
  
  snapshot.forEach((doc) => {
    bookingsArray.push(doc.data());
  });

  return bookingsArray
}

export const getBookedInfo = async (officeName) => {
  const officeRef = firestore.collection(`offices`).where('name', '==', officeName)
  const snapshot = await officeRef.get()
  const officeInfo = snapshot.docs[0].data()
  return officeInfo
} 

export const addBooking = async (officeName, email, startDate, endDate) => {
  const bookingRef = firestore.collection("booking").doc();

  try {
    bookingRef.set({
      email,
      startDate,
      endDate,
      officeName,
    });
  } catch (err) {
    console.log(err);
  }
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
