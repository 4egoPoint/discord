import './Chat.css'
import ChatHeader from './ChatHeader'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import Massage from './Massage';

export default function Chat() {
   return (
      <div className='chat'>
         <ChatHeader />

         <div className="chat__messages">
            <Massage />
         </div>

         <div className="chat__input">
            <AddCircleIcon fontSize='large' />
            <form>
               <input type="text" placeholder={'MASSAGE #TESTCHANNEL'} />
               <button className='chat__inputButton' type='submit'>send massage</button>
            </form>
            <div className="chat__inputIcons">
               <CardGiftcardIcon fontSize='large' />
               <GifIcon fontSize='large' />
               <AddReactionIcon fontSize='large' />
            </div>

         </div>


      </div>
   )
}