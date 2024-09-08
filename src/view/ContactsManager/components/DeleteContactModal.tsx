    import PrimaryButton from '../../../components/PrimaryButton';

type Props = {
    id: string;
}

function DeleteContactModal({id}: Props) {
  return (
      <div className='w-full '>
          <h1 className="font-bold text-2xl">
              Are you sure you want to delete?
          </h1>
          <div className='mt-10 flex lg:justify-end justify-center gap-2'>
                  
             <PrimaryButton label='Cancel' onClick={()=>{}}/>
             <PrimaryButton label='Delete' onClick={()=>{}}/>
          </div>
    </div>
  )
}

export default DeleteContactModal