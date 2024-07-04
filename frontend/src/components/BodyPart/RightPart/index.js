import React from 'react'

export default function RightPanel({width,component}) {
  return (
    <div className="notesView relative h-screen duration-200 ease-linear" style={{ width: `calc(100% - ${width})` }}>
        {component}
    </div>
  )
}
