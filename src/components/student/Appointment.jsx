import { useState } from "react";
import firebase from "firebase/app";

const StudentAppointmentBookingRequestForm = () => {
  const [teacherName, setTeacherName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [appointmentType, setAppointmentType] = useState("");

  const handleSubmit = async () => {
    // Validate the input

    // Create a new appointment booking request object
    const appointmentBookingRequest = {
      teacherName,
      date,
      time,
      appointmentType,
    };

    // Submit the appointment booking request to the database
    await firebase
      .database()
      .ref("appointmentBookingRequests")
      .push(appointmentBookingRequest);

    // Clear the form
    setTeacherName("");
    setDate("");
    setTime("");
    setAppointmentType("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Teacher name"
        value={teacherName}
        onChange={(e) => setTeacherName(e.target.value)}
      />
      <input
        type="date"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="time"
        placeholder="Time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <select
        value={appointmentType}
        onChange={(e) => setAppointmentType(e.target.value)}
      >
        <option value="">Select an appointment type</option>
        <option value="1:1">1:1 appointment</option>
        <option value="Group">Group appointment</option>
      </select>
      <button type="submit">Book appointment</button>
    </form>
  );
};

export default StudentAppointmentBookingRequestForm;
