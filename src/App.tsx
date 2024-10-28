import './App.css'
import Body from './components/Body'
import Navbar from './components/Navbar'
import { FileUpload } from './components/ui/file-upload'

function App() {
  return (
    <>
<div className='h-full bg-myblue'>
<Navbar/>
<Body/>
<FileUpload/>
</div>
    </>
  )
}

export default App
