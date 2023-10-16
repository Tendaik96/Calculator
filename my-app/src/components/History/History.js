import React from 'react'


export default function History({search}) {
    console.log(search)
    let list = [];
 list.push(list)
  return (
    <div>
          <h2>History</h2>
          <ul>
              {list.map((result) => (
                  <li key={result.id}>{result}</li>
              ))}
          </ul>     
    </div>
  )
}
