import Spinner from 'react-bootstrap/Spinner';

function Loading() {
  return(
    <div className='d-flex align-items-center justify-content-center min-vh-100'>
  <Spinner animation="grow"  variant= "primary"/>;
  </div> )
}

export default Loading;