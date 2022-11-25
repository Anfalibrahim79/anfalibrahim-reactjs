import React from 'react'

export const ShowError = ({errorShow}) => {
  return (
    <ul style={{color: 'red'}}>
       {
        errorShow.map ((e, i) => <li key={i}>{e}</li>)
       }
    </ul>
  )
}
