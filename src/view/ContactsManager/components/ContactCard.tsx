import { ContactDetailsProp } from '../../../types/contact-info.type'
import Badge from '../../../components/Badge';
import { PencilSimple, Trash } from '@phosphor-icons/react';

type Props = {
  user: ContactDetailsProp;
  onEdit: () => void;
  onDelete: () => void;
}

function ContactCard({ user, onDelete, onEdit }: Props) {
  return (
    <div className='px-4 py-6 bg-sky-50 rounded-lg border-black-100'>
      <div className="flex items-center">
        <div className="flex flex-col gap-1 flex-1">
          <p className=''>Name: {user.firstName} {user.lastName}</p>
          <p className=''>Phone number: {user.phoneNumber}</p>
        </div>
        <div className='flex items-center gap-2'>
          <Badge text={user.status} type={user.status} />
          <button className='rounded-full bg-sky-200 p-2 cursor-pointer' onClick={onEdit}>
            <PencilSimple />
          </button>

           <button className='rounded-full bg-red-400 p-2 cursor-pointer' onClick={onDelete}>
            <Trash />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactCard