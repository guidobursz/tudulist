//Import components:
import LayoutApp from "./components/LayoutApp";

function App() {
  return (
    <>
      <div
        style={{ minWidth: "100vw", minHeight: "100vh" }}
        className="flex justify-center items-center bg-gradient-to-b from-slate-900 via-slate-600 to-slate-400"
      >
        <LayoutApp />
      </div>
    </>
  );
}

export default App;
