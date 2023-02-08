import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Girls appointment',
      day: 'Feb 6th at 2:30pm',
      reminder: true
    },
    {
      id: 3,
      text: 'Gender appointment',
      day: 'Feb 77th at 2:30pm',
      reminder: false
    },
  ]);
  return (
    <div className="container">
      <Header title='Plango' />
      <Tasks x={tasks} />
    </div>
  );
}

export default App;

