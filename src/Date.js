import React from 'react'
import Moment from 'moment'

const Date = () => {
  const now = Moment()
  return (
    <div>
      <h1>{now.format('dddd')}</h1>
      <p>{now.format('LL')}</p>
    </div>
  )
}

export default Date
