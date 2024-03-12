
import Headers from './Headers'
import { Button } from 'bootstrap'
import { useNavigate } from 'react-router-dom'
import Layout from './Layout';

export default function Error() {
    const navigate= useNavigate();
  return (
    <Layout>
    <div className='mt-5 py-5'>
        <Headers title ="sorry the page you are looking for does not exist"/>
        <Button onClick={()=> navigate("/")}>Click to go home</Button>
    </div>
    </Layout>
  );
}
