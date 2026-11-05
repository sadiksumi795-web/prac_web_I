import { useState } from "react";

const employees = [
  { id: 1, name: "Arun" },
  { id: 2, name: "Meena" },
  { id: 3, name: "Kumar" },
];

function App() {
  const [attendance, setAttendance] = useState({});

  function markAttendance(id, status) {
    setAttendance((current) => ({
      ...current,
      [id]: status,
    }));
  }

  return (
    <main>
      <h1>Employee Attendance</h1>

      {employees.map((employee) => {
        const status = attendance[employee.id];

        return (
          <section key={employee.id}>
            <h2>{employee.name}</h2>

            {status ? (
              <p>
                {employee.name} is marked {status}.
              </p>
            ) : (
              <p>Attendance not marked yet.</p>
            )}

            <button onClick={() => markAttendance(employee.id, "Present")}>
              Mark Present
            </button>

            <button onClick={() => markAttendance(employee.id, "Absent")}>
              Mark Absent
            </button>
          </section>
        );
      })}
    </main>
  );
}

export default App;
