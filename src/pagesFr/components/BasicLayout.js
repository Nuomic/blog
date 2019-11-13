import React from 'react'
import StarBG from './StarBG'
import Header from './Header'

export default ({ children }) => {
  return (
    <StarBG>
      <Header></Header>
      {children}
    </StarBG>
  )
}
