import { useState } from "react";
import { auth } from "./firebase";
import "./TeacherLogin.css";

const TeacherLogin = () => {
  const [teacherEmail, setTeacherEmail] = useState("");
  const [teacherPassword, setTeacherPassword] = useState("");

  const handleLogin = async () => {
    if (!teacherEmail || !teacherPassword) {
      // Handle validation error
      return;
    }

    try {
      await auth.signInWithEmailAndPassword(teacherEmail, teacherPassword);
      // Handle login success, e.g., redirect to teacher dashboard
    } catch (error) {
      // Handle login error
    }
  };

  return (
    <div className="teacher-login-container">
      <img src="https://i.imgur.com/logo.png" alt="Logo" className="logo" />
      <h2>Teacher Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={teacherEmail}
        onChange={(e) => setTeacherEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={teacherPassword}
        onChange={(e) => setTeacherPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default TeacherLogin;
