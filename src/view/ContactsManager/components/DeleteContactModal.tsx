import { useDispatch } from 'react-redux';
import PrimaryButton from '../../../components/PrimaryButton';
import { deleteContact } from '../../../store/slices/contactsStore';

type Props = {
    id: string;
    setShowDeleteModal: (val: { id: string; showDelete: boolean }) => void;
}

function DeleteContactModal({ id, setShowDeleteModal }: Props) {
    const dispatch = useDispatch();
    return (
        <div className='w-full '>
            <h1 className="font-bold text-2xl">
                Are you sure you want to delete?
            </h1>
            <div className='mt-10 flex lg:justify-end justify-center gap-2'>

                <PrimaryButton label='Cancel' onClick={() => {
                    setShowDeleteModal({ id: "", showDelete: false })
                }} />
                <PrimaryButton label='Delete' onClick={() => {
                    dispatch(deleteContact(id));
                    setShowDeleteModal({ id: "", showDelete: false });
                }} />
            </div>
        </div>
    )
}

export default DeleteContactModal