import { useState } from "react";
import { auth } from "./firebase";

const StudentLogin = () => {
  const [studentEmail, setStudentEmail] = useState("");
  const [studentPassword, setStudentPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!studentEmail || !studentPassword) {
      // Handle validation error
      return;
    }

    setIsLoading(true);

    try {
      await auth.signInWithEmailAndPassword(studentEmail, studentPassword);
      // Handle login success, e.g., redirect to student dashboard
    } catch (error) {
      alert("Error");
      // Handle login error
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2>Student Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={studentEmail}
        onChange={(e) => setStudentEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={studentPassword}
        onChange={(e) => setStudentPassword(e.target.value)}
      />
      <button disabled={isLoading} onClick={handleLogin}>
        {isLoading ? "Loading..." : "Login"}
      </button>
    </div>
  );
};

export default StudentLogin;
