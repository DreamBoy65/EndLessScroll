import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function Skull() {
  const array = Array.from({length: 40})

  return (
      <div>{
      array.map((e, i) => {
        return (
          <div key={i} className="child">
            <div className="p1">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png" className="loader" />
            </div>
            <div className="p2">
              <span className="bold loader-1"></span>
              <span className="ads loader-1"></span>
              <span className="about loader-1"></span>
          </div>
        </div>
      )
    })
      } </div>
  )
}