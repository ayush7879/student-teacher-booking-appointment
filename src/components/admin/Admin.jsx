import { useEffect, useState } from "react";
import firebase from "firebase/app";

const Admin = () => {
  const [teachers, setTeachers] = useState([]);

  const fetchTeachers = async () => {
    const database = firebase.database();
    const teachersRef = database.ref("teachers");

    teachersRef.on("value", (snapshot) => {
      const teachersData = snapshot.val();
      setTeachers(teachersData);
    });
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  return (
    <div>
      <h1>Admin</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Subject</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher.id}>
              <td>{teacher.name}</td>
              <td>{teacher.department}</td>
              <td>{teacher.subject}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
