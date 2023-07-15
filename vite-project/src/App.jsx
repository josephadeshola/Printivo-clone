
import './App.css'
import Navbar from './assets/Componets/Navbar'
import Yournav from './assets/Componets/Yournav'
import Carosel from './assets/Componets/Carosel'
import Cards from './assets/Componets/Cards'
import Service from './assets/Componets/Service'
import Amazing from './assets/Componets/Amazing'
// import IMAGES from '../Images.js'





function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
<Navbar/>
<Yournav/>
<Carosel/>
<Cards/>
<Service/>
<Amazing/>
  {/* <div className=''>
    {
      IMAGES && IMAGES.map((item)=>{
        <div key={item.id}>
          <img src={item.image} alt="" />

        </div>
      })
    }
  </div> */}

</>   

  )
}

export default App
