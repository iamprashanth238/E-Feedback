import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';


const BackButton = ({destination='/'}) => {
  return (
    <div className='flex'>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <Link to={destination} className='bg-sky-700 text-white px-4 rounded-lg w-fit m-5' style={{}}>
            <BsArrowLeft className='text-2xl' />
        </Link>
    </div>
  )
}

export default BackButton