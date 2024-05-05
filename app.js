import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import List from "./comp/List.js"

function Main() {
  let [page, setPage] = useState(1)
  let [isOkay, setOkay] = useState(true)
  
  useEffect(() => {
    let el = document.querySelector(".refresh")
    let can = document.querySelector(".can")
    
    el.addEventListener("click", () => {
      setOkay(false)
      setPage(1)
      setOkay(true)
    })
  }, [])
  
  useEffect(() => {
    let el = document.querySelector(".can")
    const handleScroll = (event) => {
      const { scrollTop, clientHeight, scrollHeight } = el;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 20;
      
      if (isAtBottom) {
        setPage(page + 1)
      }
    };

    el.addEventListener('scroll', handleScroll);
    
    return () => el.removeEventListener('scroll', handleScroll);
    
  }, [page]);
  
  return  (
    <div className="can">
    
    {
      isOkay && Array.from({ length: page }).map((_, key) => {
        return <List key={key} page={key + 1} />
      })
    }
    </div>
  )
}


ReactDOM.render(
  <Main />,
  document.getElementById('react-app')
);
