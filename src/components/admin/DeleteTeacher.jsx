import { useHistory } from "react-router-dom";
import firebase from "firebase/app";
import { useEffect, useState } from "react";

const DeleteTeacher = () => {
  const history = useHistory();

  const [id, setId] = useState("");

  useEffect(() => {
    const teacherId = history.location.pathname.split("/")[3];
    setId(teacherId);
  }, [history.location.pathname]);

  const handleDelete = async (event) => {
    event.preventDefault();

    const database = firebase.database();
    const teacherRef = database.ref(`teachers/${id}`);

    await teacherRef.remove();

    history.push("/admin");
  };

  return (
    <div>
      <h1>Delete Teacher</h1>
      <p>Are you sure you want to delete this teacher?</p>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default DeleteTeacher;
