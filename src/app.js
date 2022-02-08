import React from 'react'
import {useState} from 'react'
import LoadButton from './components/loadButon'
import ListGame from './components/ListGame'
import AddGame from './components/addGame'
import SortButton from './components/sortButton'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react/cjs/react.production.min'


function App() {
    
    const [array, setArray] = useState([])
   
    async function loadList() {
        const response = await fetch('https://api.npoint.io/817eebf87e3033d5dc99')
        const data = await response.json()
        setArray(array.concat(data.data))
    }

    function createGame(name,icon_url){
      setArray(array.concat([{name,icon_url}]))
    }

    function deleteGame(title){
        setArray(array.filter(item=>item.name!==title))
    }
      function sortGames(value){
        let arr = Object.assign([],array)
         if(value ==='1') {
            arr.sort((a,b) => a.name[0] > b.name[0] ? 1:-1)
         }
         if(value ==='2') {
            arr.sort((a,b) => a.name[0] < b.name[0] ? 1:-1)
          }
          setArray(arr)
      }  

      function upTitle(title) {
        let arr = Object.assign([],array)
        arr.map(function(item,index,a) {
          let value = a[index-1];
          if (item.name == title && index > 0 ) {
            a[index-1]=a[index]
            a[index]=value
          }
          return item 
        })
        setArray(arr)
      }

      function downTitle(title) {
        let arr = Object.assign([],array)
        for (let i=arr.length-1;i>=0;i--){
          let value = arr[i];
          if (arr[i].name == title) {
            arr[i]=arr[i+1];
            arr[i+1]=value;
          }
        }
        setArray(arr)

      }

    return ( 
              <div>
        <div>    
        <AddGame onCreate={createGame}/> 
        </div>
        <div>
        <h1>Список игр <SortButton sortGames={sortGames}/>   <LoadButton click = {loadList}/> </h1>
        <p><ListGame array={array} deleteGame={deleteGame} up={upTitle} down={downTitle}/></p>
        </div>
        </div> 
        )
}

export default App
//<p><span></span> </p>