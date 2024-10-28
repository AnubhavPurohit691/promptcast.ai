import Navbar from '../components/Navbar'
import Body from '../components/Body'
import { FileUpload } from '../components/ui/file-upload'

const Home = () => {
  return (
    <div>
      <>
<div className='h-full bg-myblue'>
<Navbar/>
<Body/>
<FileUpload/>
</div>
    </>
    </div>
  )
}

export default Home
