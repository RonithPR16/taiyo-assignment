import { useState } from 'react'
import PrimaryButton from '../../components/PrimaryButton'
import CustomModal from '../../components/CustomModal';
import { ContactDetailsProp } from '../../types/contact-info.type';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import ContactCard from './components/ContactCard';
import ContactForm from './components/ContactForm';
import DeleteContactModal from './components/DeleteContactModal';
import { addOrEditContact } from '../../store/slices/contactsStore';

function ContactsManager() {
  const dispatch = useDispatch()
  const users = useSelector((state: RootState) => state.contacts.contacts)
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<{ id: string; showDelete: boolean }>({
    id: '',
    showDelete: false
  });
  const defaultUserInfo: ContactDetailsProp = {
    firstName: "",
    id: "",
    lastName: "",
    phoneNumber: "",
    status: "active",
  };
  const [userInfo, setUserInfo] = useState<ContactDetailsProp>(defaultUserInfo)

  const handleAddOrEditContact = () => {
    dispatch(addOrEditContact(userInfo));
    setShowModal(!showModal);
    setUserInfo(defaultUserInfo)
  };

  const handleModelClose = () => {
    setShowModal(!showModal);
    setUserInfo(defaultUserInfo)
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
        <div className='flex flex-col gap-2'>
          {users.map((user) => <ContactCard key={user.id} user={user} onDelete={() => {
            setShowDeleteModal({ id: user.id, showDelete: true })
          }} onEdit={() => {
            setUserInfo(user);
            setShowModal(true)
          }} />)}
        </div>
      </>}

      <CustomModal visible={showModal} setVisible={handleModelClose}>
        <ContactForm
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          onSubmit={handleAddOrEditContact}
        />
      </CustomModal>

      <CustomModal visible={showDeleteModal.showDelete} setVisible={() => {
        setShowDeleteModal({ id: '', showDelete: false })
      }}>
        <DeleteContactModal id={showDeleteModal.id} setShowDeleteModal={setShowDeleteModal}/>
      </CustomModal>
    </div>

  )
}

export default ContactsManager