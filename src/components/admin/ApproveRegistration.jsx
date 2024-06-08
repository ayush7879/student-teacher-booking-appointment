import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import firebase from "firebase/app";

const ApproveRegistration = () => {
  const history = useHistory();

  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    const database = firebase.database();
    const registrationsRef = database.ref("registrations");

    registrationsRef.on("value", (snapshot) => {
      const registrationsData = snapshot.val();
      setRegistrations(registrationsData);
    });
  }, []);

  const handleApproveRegistration = async (event) => {
    event.preventDefault();

    const registrationId = event.target.getAttribute("data-id");

    const database = firebase.database();
    const registrationRef = database.ref(`registrations/${registrationId}`);

    await registrationRef.update({
      isApproved: true,
    });

    history.push("/admin");
  };

  return (
    <div>
      <h1>Approve Registration</h1>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Teacher Name</th>
            <th>Subject</th>
            <th>Approve</th>
          </tr>
        </thead>
        <tbody>
          {registrations.map((registration) => (
            <tr key={registration.id}>
              <td>{registration.studentName}</td>
              <td>{registration.teacherName}</td>
              <td>{registration.subject}</td>
              <td>
                <button
                  type="button"
                  data-id={registration.id}
                  onClick={handleApproveRegistration}
                >
                  Approve
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApproveRegistration;
