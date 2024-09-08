import { useState } from 'react'
import PrimaryButton from '../../components/PrimaryButton'
import CustomModal from '../../components/CustomModal';
import CustomInput from '../../components/CustomInput';
import RadioButton from '../../components/RadioButton';

type Props = {}

function ContactsManager({ }: Props) {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleAddContact = () => {
    console.log('add contact')
    setShowModal(!showModal)
  }

  const handleModelClose = () => {
    setShowModal(!showModal)
  }
  return (
    <div className='px-5 pt-5'>
      <div className='flex justify-end mb-5'>
      <PrimaryButton label='Create contact' onClick={handleModelClose} />
      </div>
      <div className='h-full w-full flex flex-col p-20 items-center m-auto text-center gap-2'>
        <h1 className='font-bold text-xl'>No contact found</h1>
        <h2 className='font-medium'>Please add contact from Create contact button </h2>
      </div>

      <CustomModal visible={showModal} setVisible={handleModelClose}>
           <div className='bg-white w-full'>
          <CustomInput value='' onChange={(e)=>{console.log(e)}} label='First Name' placeholder='Please enter first name'/>
          <CustomInput value='' onChange={(e)=>{console.log(e)}} label='Last Name' placeholder='Please enter last name'/>
          <CustomInput value='' onChange={(e) => { console.log(e) }} label='number' placeholder='Please enter phone no' />
          <div className='grid grid-cols-[1fr,2fr]'>
              <h1 className="font-xl">
                  Status:
              </h1>
            <div>
              <RadioButton isChecked label='Active'/>
              <RadioButton isChecked={false} label='InActive' />
              </div>
          </div>
             <div className="mt-10 flex justify-end">
                <PrimaryButton label='Create contact' onClick={handleAddContact} />
              </div>
    </div>
       </CustomModal>
    </div>

  )
}

export default ContactsManager