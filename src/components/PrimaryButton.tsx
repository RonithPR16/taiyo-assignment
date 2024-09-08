type Props = {
  label: string;
  isDisabled?: boolean;
  onClick: () => void;
    type?:'default' |'warning'
}

function PrimaryButton({label,onClick, isDisabled=false,type='default'}: Props) {
  return (
    
    <button disabled={isDisabled} type="button" className={`text-white ${type== 'default'? 'hover:bg-[var(--primary-button-color)] bg-[var(--primary-button-hover-color)] ':'bg-red-600'} font-medium rounded-lg text-sm px-5 py-2.5 text-center ${isDisabled && 'opacity-80 cursor-not-allowed'}`} onClick={onClick}>{ label}</button>

  )
}

export default PrimaryButton