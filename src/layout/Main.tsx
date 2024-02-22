import Pomodoro from "../components/Pomodoro";
import Task from "../components/Task";

export default function Main() {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-600">
      <Task />
      <Pomodoro />
    </div>
  );
}
