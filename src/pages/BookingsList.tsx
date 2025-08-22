import React, { useEffect, useState } from "react";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "@/firebaseConfig";

type Booking = {
  id: string;
  name: string;
  email: string;
  createdAt: Date | null;
  status?: string;
};

export default function BookingsList() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  async function fetchBookings() {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "bookings"));
      const bookingsData = querySnapshot.docs.map(docSnap => {
        const data = docSnap.data();
        return {
          id: docSnap.id,
          name: data.name,
          email: data.email,
          createdAt: data.createdAt ? data.createdAt.toDate() : null,
          status: data.status || "pending"
        };
      });
      setBookings(bookingsData);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
    setLoading(false);
  }

  async function handleCompleteBooking(id: string) {
    try {
      await updateDoc(doc(db, "bookings", id), { status: "completed" });
      // refresh list
      fetchBookings();
    } catch (error) {
      console.error("Error completing booking:", error);
    }
  }

  if (loading) return <p>Loading bookings...</p>;
  if (bookings.length === 0) return <p>No bookings found.</p>;

  return (
    <div style={{ maxWidth: 600, margin: "auto" }}>
      <h2>All Bookings</h2>
      <ul>
        {bookings.map(({ id, name, email, createdAt, status }) => (
          <li key={id} style={{ marginBottom: 12 }}>
            <strong>{name}</strong> ({email})<br />
            <small>{createdAt ? createdAt.toLocaleString() : "No date"}</small><br />
            <span>Status: {status}</span><br />
            {status !== "completed" && (
              <button onClick={() => handleCompleteBooking(id)}>
                Mark as Completed
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
