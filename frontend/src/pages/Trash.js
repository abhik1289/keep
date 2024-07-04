import React from 'react'
import BodyPart from '../components/BodyPart'
import Header from '../components/header'
import Trash from './../components/Trash/index';


export default function TrashPage({width,SetWidth}) {
  return (
    <div>
     <Header  width={width} SetWidth={SetWidth} />
     <BodyPart body={<Trash/>} width={width}  SetWidth={SetWidth}/>
    </div>
  )
}
