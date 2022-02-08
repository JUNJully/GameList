import React from 'react'
import Title from './title'

function ListGame({array, deleteGame, up, down}){
    console.log(array)

    if (array) {
        return (
            <ul>
               {array.map((item,index)=><Title 
               key={index} name={item.name} 
               icon_url={item.icon_url}
               deleteGame={deleteGame}
               up={up}
               down={down}/>)} 
            </ul>
        )
    }
    return <p></p>
}

export default  ListGame