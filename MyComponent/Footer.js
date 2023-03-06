import React from 'react'

export const Footer = () => {
  let footerstyl={
    position:'absolute',
    top:'94.0vh',
    width:'100%'

  }
  return (
    <footer className='bg-dark text-white text-center' style={footerstyl}>
      <p>
      Copyright &copy; My Todo-list.com
      </p>
      </footer>
  )
}
