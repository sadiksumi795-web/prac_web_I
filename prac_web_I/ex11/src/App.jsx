import { useEffect, useState } from "react";

function App() {
  const [marks, setMarks] = useState([0, 0, 0]);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);

  useEffect(() => {
    const newTotal = marks.reduce((sum, mark) => sum + mark, 0);
    setTotal(newTotal);
    setAverage(newTotal / marks.length);
  }, [marks]);

  function updateMark(index, value) {
    const number = Math.min(100, Math.max(0, Number(value) || 0));

    setMarks((currentMarks) =>
      currentMarks.map((mark, currentIndex) =>
        currentIndex === index ? number : mark
      )
    );
  }

  return (
    <main>
      <h1>Student Marks Calculator</h1>

      {marks.map((mark, index) => (
        <label key={index}>
          Subject {index + 1}
          <input
            type="number"
            min="0"
            max="100"
            value={mark}
            onChange={(event) => updateMark(index, event.target.value)}
          />
        </label>
      ))}

      <h2>Total: {total}</h2>
      <h2>Average: {average.toFixed(2)}</h2>
    </main>
  );
}

export default App;