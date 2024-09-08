import React from 'react'

type Props = {
    isChecked: boolean;
  label: string;
    onClick:()=> void
}

function RadioButton({isChecked,label, onClick}: Props) {
  return (
  <div className="flex items-center mr-4 mb-1" onClick={onClick}>
          <input id={ label} type="radio" name="radio" className="hidden" checked={isChecked} onChange={()=>{}} />
    <label htmlFor="radio1" className="flex items-center cursor-pointer">
     <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
              { label}</label>
   </div>
  )
}

export default RadioButton