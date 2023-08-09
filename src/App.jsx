import { useState } from "react"
import {RiMenu3Fill, RiUser3Line, RiAddLine, RiPieChartLine, RiCloseLine,RiArrowDownSLine} from "react-icons/ri"
import Cart from "./components/shared/Cart";
import Header from "./components/shared/Header";
import Sidebar from "./components/shared/Sidebar"
import Card from "./components/shared/Card";
function App() {

  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  }

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  }

  return (
    <div className="bg-[#262837] w-full min-h-screen">
    <Sidebar showMenu={showMenu} />
    <Cart showOrder={showOrder} setShowOrder={setShowOrder} />
    {/*Menu Movil*/}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2"><RiUser3Line/></button>
        <button className="p-2"><RiAddLine/></button>
        <button className="p-2" onClick={toggleOrders}><RiPieChartLine/></button>
        <button className="text-white p-2" onClick={toggleMenu}>{showMenu ? <RiCloseLine/> : <RiMenu3Fill />}</button>
      </nav>
      <main className="lg:pl-32 lg:pr-96 pb-20">
        <div className="md:p-8 p-4">
          {/* Header */}
          <Header />
           {/*Title Content */}
           <div className="flex items-center justify-between mb-16">
              <h2 className="text-xl text-gray-300">Choose Dishes</h2>
              <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg"><RiArrowDownSLine />Dine In</button>
            </div>

            {/*Content*/}
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
              {/*Card1*/}
              <Card img="comida.png" description="Speacy seasoned seafood nodles" price="2.29" inventory="20" />
               {/*Card2*/}
              <Card img="comida2.png" description="Curry with stir-fried rice" price="1.29" inventory="40" />
                {/*Card3*/}
              <Card img="comida3.png" description="Margarita pizza" price="5.29" inventory="30" />
               {/*Card4*/}
              <Card img="comida4.png" description="Mixed salad" price="3.29" inventory="15" />
                {/*Card5*/}
              <Card img="comida5.png" description="Speacy seasoned seafood nodles" price="2.29" inventory="20" />
               {/*Card6*/}
              <Card img="comida6.png" description="Speacy seasoned seafood nodles" price="2.29" inventory="20" />
             
            </div>
        </div>
      </main>
    </div>
  )
}

export default App
