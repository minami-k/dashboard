import ToDo from "./components/ToDo/ToDo";
import Weather from "./components/Weather/Weather";
import DateofToday from "./components/Date/DateofToday";
import News from "./components/News/News";
import "./style.css";

function App() {
  return (
    <>
      <div className="lg:flex">
        <div className="basis-4/12">
          <ToDo />
        </div>
        <div className="basis-5/12 box-middle">
          <News />
          <DateofToday />
        </div>
      <div className="basis-3/12">
        <Weather />
      </div>
      </div>

    </>
  );
}

export default App;
