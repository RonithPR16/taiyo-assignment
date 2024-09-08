import PrimaryButton from '../../components/PrimaryButton'

type Props = {}

function ContactsManager({ }: Props) {
  return (
    <div className='px-5 pt-5'>
      <div className='flex justify-end mb-5'>
      <PrimaryButton label='Create contact' onClick={() => {
        console.log('first')
      }} />
      </div>
      <div className='h-full w-full flex flex-col p-20 items-center m-auto text-center gap-2'>
        <h1 className='font-bold text-xl'>No contact found</h1>
        <h2 className='font-medium'>Please add contact from Create contact button </h2>
      </div>
    </div>

  )
}

export default ContactsManager