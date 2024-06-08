import "./TeacherDashboard.css";

const TeacherDashboard = () => {
  return (
    <div className="teacher-dashboard-container">
      <h1>Teacher Dashboard</h1>
      <button>Logout</button>

      <div>
        <h2>Schedule Appointment</h2>
        <input type="date" />
        <input type="time" />
        <select>
          <option value="1:1">1:1 Appointment</option>
          <option value="Group">Group Appointment</option>
        </select>
        <button>Schedule Appointment</button>
      </div>

      <div>
        <h2>Approve/Cancel Appointments</h2>
        <ul>
          <li>
            Date: 2023-11-06
            Time: 10:00
            Appointment Type: 1:1
            Status: Pending
            <button>Approve</button>
            <button>Cancel</button>
          </li>
          <li>
            Date: 2023-11-07
            Time: 11:00
            Appointment Type: Group
            Status: Approved
          </li>
        </ul>
      </div>

      <div>
        <h2>View Messages from Students</h2>
        <ul>
          <li>
            From: Student 1
            Message: I need help with my math homework.
          </li>
          <li>
            From: Student 2
            Message: I&apos;m having trouble with my science project.
          </li>
        </ul>
      </div>

      <div>
        <h2>View All Appointments</h2>
        <ul>
          <li>
            Date: 2023-11-06
            Time: 10:00
            Appointment Type: 1:1
            Student: Student 1
          </li>
          <li>
            Date: 2023-11-07
            Time: 11:00
            Appointment Type: Group
            Students: Student 2, Student 3
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TeacherDashboard;
