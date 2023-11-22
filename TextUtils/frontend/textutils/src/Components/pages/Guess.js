import React from 'react'
import '../css/guess.css'
import GameCard from '../js/GameCard'

export default function Guess() {
    var name = "The 1"
  return (
    <div className='root-guess-game'>
        
        <div className="heading-game"><h1># GuEsS ThE CaRd #</h1></div>

        <div className="recognize-name"><h1>Recognize : {name}</h1></div>

        <div className="selection-part">
            {/* <GameCard/> */}
        </div>

    </div>
  )
}
