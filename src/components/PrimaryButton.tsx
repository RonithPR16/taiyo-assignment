import React from 'react'

type Props = {
  label: string;
  isDisabled?: boolean;
    onClick: () => void;
}

function PrimaryButton({label,onClick, isDisabled=false}: Props) {
  return (
    
    <button disabled={isDisabled} type="button" className={`text-white hover:bg-[var(--primary-button-color)] bg-[var(--primary-button-hover-color)] font-medium rounded-lg text-sm px-5 py-2.5 text-center ${isDisabled && 'opacity-80 cursor-not-allowed'}`} onClick={onClick}>{ label}</button>

  )
}

export default PrimaryButton