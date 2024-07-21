import React from 'react'
import { LoadAPI } from './LoadAPI'

export const Home = (props) => {
  return (
    <div>
        <LoadAPI cat={props.cat}/>
    </div>
  )
}
