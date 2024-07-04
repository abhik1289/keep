import React from 'react'
import BodyPart from '../components/BodyPart'
import Header from '../components/header'
import Archive from './../components/BodyPart/Archive/index';
export default function ArchivePage({width,SetWidth}) {
  return (
    <div><div>
    <Header  width={width} SetWidth={SetWidth} />
    <BodyPart body={<Archive/>} width={width}  SetWidth={SetWidth}/>
   </div></div>
  )
}
