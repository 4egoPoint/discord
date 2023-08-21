import { Avatar } from '@mui/material'
import './Chat.css'


export default function Massage() {
   return (
      <div className='massage'>
         <Avatar alt='avatar' src=''/>
         <div className="massage__info">
            <h4>mario
               <span className='massage__timestamp'>timestamp</span>
            </h4>
            <p>this is massage</p>
         </div>
         
      </div>
   )
}