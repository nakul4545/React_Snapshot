import useFetch from "./Hooks/useFetch";
import React, { useState } from 'react';
import Card from "./components/Card.js";
function App() {
  const { data, error, loading } = useFetch('https://api.github.com/users')  //because useFetch returns 3 things
  // console.log(data)
  // console.log(loading)
  const [search, setSearch] = useState('');
  const filter = (e) => {
    // console.log(e.target.value)
    setSearch(e.target.value)
  }
  return (
    <div className="App">
      <div className="navbar">
        <input type="text" onChange={filter} placeholder="Enter User Name" />
      </div>
      <div className="container">

        {
          loading ? <h2>loading</h2> : data.map((val) => {
            if (val.login.toLowerCase().includes(search.toLowerCase()))
              return <Card data={val} />
          })
        }
      </div>
    </div>
  );
}

export default App;
