import './Chat.css'


export default function ChatHeader() {
   return (
      <div className='chatHeader'>
         <div className="chatHeader__left">
            <h3>
               <span className="chatHeader__hash">#</span>
               test channel name
            </h3>
         </div>
         <div className="chatHeader__right"></div>


      </div>
   )
}