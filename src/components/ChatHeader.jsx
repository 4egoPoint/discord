import './Chat.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import HelpIcon from '@mui/icons-material/Help';



export default function ChatHeader() {
   return (
      <div className='chatHeader'>
         <div className="chatHeader__left">
            <h3>
               <span className="chatHeader__hash">#</span>
               test channel name
            </h3>
         </div>


         <div className="chatHeader__right">
            <NotificationsIcon />
            <EditLocationAltIcon />
            <PeopleAltIcon />
            <div className="chatHeader__search">
               <input type="text" placeholder='Search' />
               <SearchIcon />
            </div>
            <SendIcon />
            <HelpIcon />

         </div>
      </div>
   )
}