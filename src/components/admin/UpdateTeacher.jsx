import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import firebase from "firebase/app";

const UpdateTeacher = () => {
  const history = useHistory();

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [subject, setSubject] = useState("");

  useEffect(() => {
    const teacherId = history.location.pathname.split("/")[3];
    setId(teacherId);

    const database = firebase.database();
    const teacherRef = database.ref(`teachers/${teacherId}`);

    teacherRef.on("value", (snapshot) => {
      const teacherData = snapshot.val();
      setName(teacherData.name);
      setDepartment(teacherData.department);
      setSubject(teacherData.subject);
    });
  }, [history.location.pathname]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const database = firebase.database();
    const teacherRef = database.ref(`teachers/${id}`);

    await teacherRef.update({
      name,
      department,
      subject,
    });

    history.push("/admin");
  };

  return (
    <div>
      <h1>Update Teacher</h1>
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="id" value={id} />
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

export default UpdateTeacher;
