export default function Button({
  task,
  setter,
  globalActive,
  globalSetActive,
}) {
  return (
    <>
      <h3>{task.title}</h3>
      <p>
        {task.status === "pending"
          ? "Pending"
          : task.status === "counting"
            ? "Counting"
            : `Complete (${task.finalCount} seconds)`}
      </p>
      <button
        disabled={globalActive != null || task.status === "completed"}
        onClick={() => {
          setter((prev) => ({ ...prev, status: "counting" }));
          globalSetActive({ task, setter });
        }}
      >
        Start session
      </button>
    </>
  );
}
