import React from 'react'
import { IconProps } from './types'

const IconEye: React.FC<IconProps> = ({ width = 18, height = 16, color = 'none' }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 18 16" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.66602 7.99996C1.66602 7.99996 4.33268 2.66663 8.99935 2.66663C13.666 2.66663 16.3327 7.99996 16.3327 7.99996C16.3327 7.99996 13.666 13.3333 8.99935 13.3333C4.33268 13.3333 1.66602 7.99996 1.66602 7.99996Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
        stroke="black"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconEye
