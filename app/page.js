import TaskManager from "@/components/TaskManager";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="videos/taskmanager.mp4"
        autoPlay
        loop
        muted
      />

      {/* Overlay for Task Manager */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <TaskManager />
      </div>

      {/* Optional dark overlay for better readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
    </div>
  );
}
