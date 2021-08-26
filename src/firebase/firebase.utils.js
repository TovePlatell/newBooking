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

  const test = firestore.doc(`users/${userAuth.uid}`);
  const test2 = await test.get();

  if (!test2.exist) {
    try {
      await test.set({
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

export const addBooking = async (officeName, email, startDate, endDate) => {
  const officeRef = firestore
    .collection("offices")
    .where("name", "==", officeName);
  const snapshot = await officeRef.get();
  const officeId = snapshot.docs[0].id;

  const bookingRef = firestore.collection("booking").doc();
  try {
    bookingRef.set({
      email,
      startDate,
      endDate,
      bookedOffice: officeId,
    });
  } catch (err) {
    console.log(err);
  }

  return snapshot;
};

// export const getBookings = async () => {
//   const bookingsRef = firestore.collection('booking')

// }

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
