import React from 'react'
import { IconProps } from './types'

const IconWallet: React.FC<IconProps> = ({ width = 16, height = 16, color = 'none' }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.08323 1.31995C1.53072 1.31995 1.00083 1.53943 0.610153 1.93011C0.219471 2.32079 0 2.85067 0 3.40317V12.5982C0 13.1507 0.219471 13.6806 0.610153 14.0713C1.00083 14.4619 1.53072 14.6814 2.08323 14.6814L13.3323 14.6815L13.3377 14.6814C13.8924 14.6661 14.4221 14.4468 14.8253 14.0655C15.2284 13.6841 15.4767 13.1674 15.5227 12.6144L15.5234 12.6063V10.0033C15.6545 9.86547 15.7573 9.70285 15.8256 9.52465L15.8283 9.51759L15.8305 9.51034C15.9694 9.0422 16.0236 8.55303 15.9906 8.06587V7.92418C16.0221 7.44084 15.9679 6.95571 15.8305 6.4912L15.8283 6.48367L15.8255 6.47633C15.7571 6.29905 15.6543 6.13736 15.5234 6.00046V3.39508L15.5227 3.38701C15.4767 2.83396 15.2284 2.31729 14.8253 1.93591C14.4221 1.55454 13.8924 1.33517 13.3377 1.31995H2.08323ZM1.54474 2.86468C1.68755 2.72187 1.88125 2.64163 2.08323 2.64163H13.3323C13.5343 2.64163 13.728 2.72187 13.8708 2.86468C14.0136 3.0075 14.0939 3.2012 14.0939 3.40317V5.55806H9.8849C9.2367 5.55806 8.61506 5.81556 8.15672 6.2739C7.69838 6.73224 7.44089 7.35388 7.44089 8.00207C7.44089 8.65026 7.69838 9.2719 8.15672 9.73024C8.61506 10.1886 9.2367 10.4461 9.8849 10.4461H14.0994V12.601L14.0994 12.6032C14.1006 12.7043 14.0816 12.8047 14.0436 12.8984C14.0056 12.9921 13.9493 13.0773 13.878 13.149C13.8067 13.2207 13.7218 13.2775 13.6283 13.316C13.5348 13.3546 13.4346 13.3742 13.3335 13.3736L13.3323 13.5685V13.3736H2.08323C1.88125 13.3736 1.68755 13.2933 1.54474 13.1505C1.40192 13.0077 1.32168 12.814 1.32168 12.612V3.40317C1.32168 3.2012 1.40192 3.0075 1.54474 2.86468ZM9.09227 7.20806C9.30248 6.99785 9.5876 6.87975 9.8849 6.87975H14.3718C14.5197 6.87975 14.5649 6.90476 14.5728 6.91013C14.5738 6.91031 14.5765 6.91082 14.5889 6.94221C14.6642 7.258 14.6909 7.58335 14.6689 7.90729L14.6685 8.08086L14.6694 8.09405C14.6913 8.41799 14.6642 8.74337 14.5889 9.05916C14.5765 9.09055 14.5735 9.09115 14.5725 9.09134C14.5646 9.0967 14.5197 9.12162 14.3718 9.12162H9.8849C9.5876 9.12162 9.30248 9.00352 9.09227 8.79331C8.88205 8.58309 8.76395 8.29798 8.76395 8.00069C8.76395 7.70339 8.88205 7.41828 9.09227 7.20806Z"
        fill="black"
      />
      <path
        d="M9.43555 8.00178C9.43555 8.12403 9.47181 8.24354 9.53973 8.34518C9.60765 8.44683 9.70418 8.52606 9.81712 8.57284C9.93007 8.61962 10.0544 8.63186 10.1743 8.60801C10.2942 8.58416 10.4043 8.5253 10.4907 8.43885C10.5772 8.35241 10.636 8.24227 10.6599 8.12237C10.6837 8.00247 10.6715 7.87819 10.6247 7.76524C10.5779 7.6523 10.4987 7.55576 10.3971 7.48784C10.2954 7.41992 10.1759 7.38367 10.0537 7.38367C9.88995 7.38441 9.73317 7.44978 9.61741 7.56553C9.50166 7.68129 9.43629 7.83808 9.43555 8.00178Z"
        fill="black"
      />
    </svg>
  )
}

export default IconWallet