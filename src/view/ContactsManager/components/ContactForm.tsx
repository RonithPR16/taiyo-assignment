import CustomInput from '../../../components/CustomInput'
import { ContactDetailsProp } from '../../../types/contact-info.type'
import RadioButton from '../../../components/RadioButton';
import PrimaryButton from '../../../components/PrimaryButton';
import { useCallback } from 'react';

type Props = {
  userInfo: ContactDetailsProp;
  setUserInfo: (val: ContactDetailsProp) => void;
  onSubmit: () => void
}

function ContactForm({ setUserInfo, userInfo, onSubmit }: Props) {

  const checkValid = useCallback(() => {
    const {id,...data} = userInfo
    const isInvalid = Object.values(data).includes('') || userInfo.phoneNumber.length < 10;
    return isInvalid
  },[userInfo])

  return (
    <div className='bg-white w-full'>
      <CustomInput value={userInfo.firstName} onChange={(e) => {
        setUserInfo({ ...userInfo, firstName: e })
      }} label='First Name' placeholder='Please enter first name' />
      <CustomInput value={userInfo.lastName} onChange={(e) => {
        setUserInfo({ ...userInfo, lastName: e })
      }} label='Last Name' placeholder='Please enter last name' />
      <CustomInput type='num' value={userInfo.phoneNumber}
      maxLength={10}
        onChange={(e) => {
        setUserInfo({ ...userInfo, phoneNumber: e })
      }}

        label='Number' placeholder='Please enter phone no' />
      <div className='grid grid-cols-[1fr,2fr]'>
        <h1 className="font-xl">
          Status:
        </h1>
        <div>
          <RadioButton isChecked={userInfo.status === 'active'} label='Active' onClick={() => {
            setUserInfo({ ...userInfo, status: 'active' })
          }} />
          <RadioButton isChecked={userInfo.status === 'inactive'} label='InActive' onClick={() => {
            setUserInfo({ ...userInfo, status: 'inactive' })
          }} />
        </div>
      </div>
      <div className="mt-5 flex justify-end">
        <PrimaryButton
          label={`${userInfo.id.length ? 'Save Changes' : 'Create contact'}`}
          onClick={onSubmit}
          isDisabled={checkValid()}
        />
      </div>
    </div>
  )
}

export default ContactForm