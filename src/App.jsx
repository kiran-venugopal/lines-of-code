import "./App.css";
import FileSelection from "./features/fileSelection";
import StatsView from "./features/statsView";
/*
 *
 * rendering the app here
 */
function App() {
  return (
    <section>
      <h1 className="text-2xl font-semibold text-center">
        🍰 Lines of code counter
      </h1>
      <FileSelection />
      <StatsView />
    </section>
  );
}

// exporting the app
export default App;
