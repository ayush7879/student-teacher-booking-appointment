import { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "firebase/app";

const AddTeacher = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const database = firebase.database();
    const teachersRef = database.ref("teachers");

    await teachersRef.push({
      name,
      department,
      subject,
    });

    history.push("/admin");
  };

  return (
    <div>
      <h1>Add Teacher</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={department}
          onChange={(event) => setDepartment(event.target.value)}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddTeacher;
