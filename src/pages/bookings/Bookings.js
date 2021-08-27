import { useState, useEffect } from "react";
//import * as S from "./styles";
import { getUserBookings } from "../../firebase/firebase.utils";
import BookingItem from "../../components/booking-item/BookingItem";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("uid")) {
      alert("Please log in");
      return;
    }

    const fetchBookings = async () => {
      const data = await getUserBookings(localStorage.getItem("userEmail"));
      setBookings(...bookings, data);
    };
    fetchBookings();
  }, []);

  console.log(bookings);

  if (bookings.length === 0) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {bookings.map(({officeName, ...otherProps}, index) => {
        return <BookingItem key={index} officeName={officeName} {...otherProps} />;
      })}
    </div>
  );
};

export default Bookings;
