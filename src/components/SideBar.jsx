import './SideBar.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SideBarChanel from './SideBarChanel';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MicIcon from '@mui/icons-material/Mic';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';

export default function SideBar() {
   return (
      <div className='sideBar'>
         <div className="sideBar__top">
            <h3>Employment project</h3>
            <ExpandMoreIcon />
         </div>

         <div className="sideBar__channels">
            <div className="sideBar__channelsHeader">
               <div className="sideBar__header">
                  <ExpandMoreIcon />
                  <h4>Text channels</h4>
               </div>
               <AddIcon className='sideBar__addChanel' />
            </div>
            <div className="sideBar__channelsList">
               <SideBarChanel />
               <SideBarChanel />
               <SideBarChanel />
               <SideBarChanel />
               <SideBarChanel />
            </div>
         </div>

         <div className="sideBar__voice">
            <SignalCellularAltIcon className="sideBar__voiceIcon" fontSize='large' />
            <div className="sideBar__voiceInfo">
               <h3>Voice Connected</h3>
               <p>Stream</p>
            </div>
            <div className="sideBar__voiceIcons">
               <InfoIcon className='sideBar__1icon' />
               <CallIcon className='sideBar__2icon' />
            </div>
         </div>
         <div className="sideBar__profile">
            <AccountCircleIcon />
            <div className="sideBar__profileInfo">
               <h3>@q3.wwe._</h3>
               <p>#thisismyid</p>
            </div>
            <div className="sideBar__profilesIcons">
               <MicIcon />
               <HeadphonesIcon />
               <SettingsIcon />
            </div>

         </div>

      </div>
   )
}