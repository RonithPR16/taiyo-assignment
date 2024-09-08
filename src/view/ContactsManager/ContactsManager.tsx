import { useState } from 'react'
import PrimaryButton from '../../components/PrimaryButton'
import CustomModal from '../../components/CustomModal';

type Props = {}

function ContactsManager({ }: Props) {
  const [showModal, setShowModal] = useState<boolean>(false);

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
        <div className='bg-white'>
          <h1>hi</h1>
       </div>
       </CustomModal>
    </div>

  )
}

export default ContactsManager