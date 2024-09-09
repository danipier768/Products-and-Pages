import React, { useEffect, useState } from 'react'

  const Users = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/users')
    .then((response) => response.json())
    .then((jsonData) => setData(jsonData))
    .catch((error) => console.error('Error feching data', error))

    
  }, [])

  return (
    <>
    <div>
      <div className='card bg-danger h-25 w-25'>
        <h1>dsda</h1>{
          data.map((item) =>(
            <img key={item.id} src={item.avatar} alt="" />
          ))}
      </div>
      <div></div>
    </div>
    </>
  )
}

export default Users
