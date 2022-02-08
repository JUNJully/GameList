import React from 'react'

function SortButton({sortGames}){
    return (
        <select onChange={(e)=>sortGames(e.target.value)}>
            <option value='0'>Сортировать</option>
            <option value='1'>A-Z</option>
            <option value='2'>Z-A</option>
        </select>
    )
}

export default SortButton