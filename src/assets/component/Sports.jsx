import React from 'react'
import { LoadAPI } from './LoadAPI'
export const Sports = (props) => {
  return (
    <LoadAPI cat={props.cat}/>
  )
}
