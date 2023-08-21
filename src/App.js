import Chat from "./components/Chat";
import SideBar from "./components/SideBar";
import './index.css'

function App() {
   return (
   <div className='app'> 
      <SideBar />

      <Chat />
   </div>
   );
}

export default App;
