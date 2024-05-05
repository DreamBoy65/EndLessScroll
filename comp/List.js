import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Skull from './Skul.js'

export default function List({ page = 1 }) {
  let [data, setData] = useState(null)
  
  const fetchUsers = async() => {
    const data = await fetch("https://end-less-users.vercel.app/users?page=" + page)
    .then(res => res.json())
    .catch(e => console.log(e))
    
    setData(data.users)
  }
  
  useEffect(() => {
    fetchUsers()
  }, [])
  
  if(!data) {
    return <Skull />
  }
  
  return (
    <div>
      {
        data.map((e, i) => {
        return (
            <div key={i} className="child">
              <div className="p1">
                <img src={e.avatar} />
            </div>
            <div className="p2">
              <span className="bold">
              {e.firstName} {e.lastName}
              </span>
              <span className="ads">
              {e.country}/{e.city}/{e.address}
              </span>
              <span className="about">
              {e.about.slice(0, 50)}... read more &gt;&gt;
              </span>
            </div>
          </div>
          )
        })
      }
    </div>
  )
}