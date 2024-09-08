import { useState } from 'react'
import PrimaryButton from '../../components/PrimaryButton'
import CustomModal from '../../components/CustomModal';
import CustomInput from '../../components/CustomInput';
import RadioButton from '../../components/RadioButton';
import { ContactDetailsProp } from '../../types/contact-info.type';

type Props = {}

function ContactsManager({ }: Props) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<ContactDetailsProp>({
    firstName: '',
    id: '',
    lastName: '',
    phoneNumber: '',
    status:'active'
  })

  const [users, setUsers] = useState<ContactDetailsProp[]>([
    {
      firstName: 'Ronith',
      lastName: 'PR',
      id: 'eufhieuh',
      phoneNumber: '8105261162',
      status:'active'
    }
  ]);

  const handleAddContact = () => {
    console.log('add contact', userInfo);
    setUsers([...users, userInfo])
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
     {users.length === 0 ? <div className='h-full w-full flex flex-col p-20 items-center m-auto text-center gap-2'>
        <h1 className='font-bold text-xl'>No contact found</h1>
        <h2 className='font-medium'>Please add contact from Create contact button </h2>
      </div> : <>
      here comes user
      </>}

      <CustomModal visible={showModal} setVisible={handleModelClose}>
           <div className='bg-white w-full'>
          <CustomInput value={userInfo.firstName} onChange={(e) => {setUserInfo((prev)=>({...prev, firstName: e})) }} label='First Name' placeholder='Please enter first name'/>
          <CustomInput  value={userInfo.lastName }  onChange={(e) => {setUserInfo((prev)=>({...prev, lastName: e})) }} label='Last Name' placeholder='Please enter last name'/>
          <CustomInput  type='number' value={userInfo.phoneNumber }  onChange={(e) => {setUserInfo((prev)=>({...prev, phoneNumber: e})) }}label='number' placeholder='Please enter phone no' />
          <div className='grid grid-cols-[1fr,2fr]'>
              <h1 className="font-xl">
                  Status:
              </h1>
            <div>
              <RadioButton isChecked={userInfo.status === 'active' } label='Active' onClick={()=>{setUserInfo((prev)=>({...prev, status:'active'}))}}/>
              <RadioButton isChecked={userInfo.status === 'inactive' } label='InActive' onClick={()=>{setUserInfo((prev)=>({...prev, status:'inactive'}))}} />
              </div>
          </div>
             <div className="mt-5 flex justify-end">
                <PrimaryButton label='Create contact' onClick={handleAddContact} />
              </div>
    </div>
       </CustomModal>
    </div>

  )
}

export default ContactsManager