import React, { useState } from 'react'
function Dashboard() {
  const [data, setData] = useState("");
  function fetchData() {
    fetch('https://api.github.com/users/Aatif09')
      .then((response) => { return response.json() })
      .then((dataa) => {
        console.log(dataa);
        setData(dataa);
      });
    console.log('Fetch Data Called');
  }
  return (
    <div>
      <h2>Welcome to Dashboard Page</h2>
      <h2>{data.login}</h2>
      <h2>{data.name}</h2>
      <h2>{data.bio}</h2>
      <img src={data.avatar_url} alt="avatar" />
      <button onClick={fetchData}>Click to see Your Git</button>
    </div>
  )
}

export default Dashboard