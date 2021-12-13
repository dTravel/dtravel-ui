import React from 'react'
import { IconProps } from './types'

const IconBookmark: React.FC<IconProps> = ({ width = 16, height = 16 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13 15L8 11.5385L3 15V2.15385C3 1.84783 3.1317 1.55434 3.36612 1.33795C3.60054 1.12157 3.91848 1 4.25 1H11.75C12.0815 1 12.3995 1.12157 12.6339 1.33795C12.8683 1.55434 13 1.84783 13 2.15385V15Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconBookmark
