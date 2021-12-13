import React from 'react'
import { IconProps } from './types'

const IconFilterCone: React.FC<IconProps> = ({ width = 16, height = 16 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.6663 2H1.33301L6.66634 8.30667V12.6667L9.33301 14V8.30667L14.6663 2Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconFilterCone
