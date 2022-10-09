import logo from "./logo.svg";
import { API } from "aws-amplify";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [peopleData, setPeopleData] = useState();
  const callApi = async () => {
    try {
      const data = await API.get("mainappapi", "/people");
      console.log("People Data", data);
      setPeopleData(data.people);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    callApi();
  }, []);
  return (
    <div className="App">
      {peopleData.map((p, i) => (
        <h2 key={i}>{p.name}</h2>
      ))}
    </div>
  );
}

export default App;
