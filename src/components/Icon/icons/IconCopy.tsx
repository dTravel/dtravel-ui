import React from 'react'
import { IconProps } from './types'

const IconCopy: React.FC<IconProps> = ({ width = 16, height = 16 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.3333 6H7.33333C6.59695 6 6 6.59695 6 7.33333V13.3333C6 14.0697 6.59695 14.6667 7.33333 14.6667H13.3333C14.0697 14.6667 14.6667 14.0697 14.6667 13.3333V7.33333C14.6667 6.59695 14.0697 6 13.3333 6Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33301 10H2.66634C2.31272 10 1.97358 9.85956 1.72353 9.60952C1.47348 9.35947 1.33301 9.02033 1.33301 8.66671V2.66671C1.33301 2.31309 1.47348 1.97395 1.72353 1.7239C1.97358 1.47385 2.31272 1.33337 2.66634 1.33337H8.66634C9.01996 1.33337 9.3591 1.47385 9.60915 1.7239C9.8592 1.97395 9.99967 2.31309 9.99967 2.66671V3.33337"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconCopy
