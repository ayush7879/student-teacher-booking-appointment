import { useState } from "react";
import { auth } from "./firebase";

const StudentRegistration = () => {
  const [studentEmail, setStudentEmail] = useState("");
  const [studentPassword, setStudentPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegistration = async () => {
    if (!studentEmail || !studentPassword) {
      return; // Handle validation error
    }

    setIsLoading(true);

    try {
      await auth.createUserWithEmailAndPassword(studentEmail, studentPassword);
      // Handle registration success, e.g., redirect to student dashboard
    } catch (error) {
      // Handle registration error
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2>Student Registration</h2>
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
      <button disabled={isLoading} onClick={handleRegistration}>
        {isLoading ? "Loading..." : "Register"}
      </button>
    </div>
  );
};

export default StudentRegistration;
