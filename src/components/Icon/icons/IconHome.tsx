import React from 'react'
import { IconProps } from './types'

const IconHome: React.FC<IconProps> = ({ width = 16, height = 16, color = 'none' }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 6.00004L8 1.33337L14 6.00004V13.3334C14 13.687 13.8595 14.0261 13.6095 14.2762C13.3594 14.5262 13.0203 14.6667 12.6667 14.6667H3.33333C2.97971 14.6667 2.64057 14.5262 2.39052 14.2762C2.14048 14.0261 2 13.687 2 13.3334V6.00004Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6 14.6667V8H10V14.6667" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default IconHome