import React from 'react'
import {useState} from 'react'

function AddGame({onCreate}) {
    const[name,setName] = useState('')
    const[url,setUrl] = useState('')

    function clickHandler(event){
       event.preventDefault()
       if(name.trim()&&url.trim()){
           onCreate(name,url)
           setName('')
           setUrl('')
       }
    }

    function inpName(e){
        setName(e.target.value)
    }

    function inpUrl(e) {
      setUrl(e.target.value)
    }
    return (
        <div className='card'>
        <form>
            <div>
                <label htmlFor='name'>Название игры</label>
                <input type ='text' value={name} onChange={inpName}/>
            </div>
            <div>
                <label htmlFor='url'>URL иконки</label>  
                <input type = 'url' value={url} onChange={inpUrl}/>
            </div>
            <div>
                 <button className='btn' onClick={clickHandler}>Добавить</button>
            </div>            
        </form>
        </div>
        
    )
}

export default AddGame
// 