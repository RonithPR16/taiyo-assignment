import React from 'react'

type Props = {
    label: string;
    onClick: () => void;
}

function PrimaryButton({label,onClick}: Props) {
  return (
    
    <button type="button" className="text-white hover:bg-[var(--primary-button-color)] bg-[var(--primary-button-hover-color)] font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={onClick}>{ label}</button>

  )
}

export default PrimaryButton