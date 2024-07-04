import React from 'react'
import LeftPanel from './LeftPart'
import RightPanel from './RightPart'

export default function BodyPart({ width,SetWidth,body}) {
  return (
    <div className='pt-[4rem] flex relative'>
      <LeftPanel width={width} SetWidth={SetWidth}/>
      <RightPanel component={body} width={width} />
    </div>
  )
}
