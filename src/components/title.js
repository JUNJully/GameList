import React from 'react'



function Title({name, icon_url,deleteGame,up,down}) {

    return (
        <div className='title'>
             <li><img src ={icon_url} className='figure'/>
             <span>
                 <button onClick={()=>deleteGame(name)}>&#10006;</button>
                 <p><button onClick={()=>up(name)}>&#9650;</button></p> 
                 <p><button onClick={()=>down(name)}>&#9660;</button></p> 
             </span> 
             <p>{name}</p>           
             </li>
        </div>
       
    )
}

export default Title