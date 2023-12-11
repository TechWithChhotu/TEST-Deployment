import axios from "axios";
import "./App.css";

const handleGet = async (e) => {
  e.preventDefault();
  const res = await axios.get("http://localhost:3000", {
    withCredentials: true,
  });

  console.log(res);
};
const handleSave = async (e) => {
  e.preventDefault();
  const res = await axios.post(
    "http://localhost:3000/save",
    {
      name: "chhotu",
    },
    {
      withCredentials: true,
    }
  );

  console.log(res);
};
const handleDelete = async (e) => {
  e.preventDefault();
  const res = await axios.get(`${window.location.origin}/delete`, {
    withCredentials: true,
  });

  console.log(res);
};
function App() {
  return (
    <>
      <div>
        <button onClick={handleGet}>Get</button>
        <button onClick={handleSave}>save</button>
        <button onClick={handleDelete}>delete</button>
      </div>
    </>
  );
}

export default App;
