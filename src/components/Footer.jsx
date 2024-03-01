import { Icon } from '@iconify/react'
import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <h2>© 2024 Deiber</h2>
      <div className="icons">
        <a href="https://github.com/deiberjerez" target="_blank">
          <Icon icon="mdi:github" width="48" height="48" color="white" />
        </a>
        <a href="mailto:deiber22cora@gmail.com" target="_blank">
          <Icon icon="mdi:gmail" width="48" height="48" color="white" />
        </a>
        <a
          href="https://www.linkedin.com/in/deiberjerez"
          target="_blank"
        >
          <Icon icon="mdi:linkedin" width="48" height="48" color="white" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
