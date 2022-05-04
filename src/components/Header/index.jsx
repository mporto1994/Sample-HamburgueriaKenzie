import {useState, useEffect} from "react"
import "./styles.css"
import {Button} from "../Button"

export const Header = ({search}) => {

    const[word,setWord]=useState("")
    
    return(
        <header>
            <p>Burguer <span>Kenzie</span></p>
            
            <div className="PesquisarDiv">
                <input 
                    type="text" 
                    placeholder="Digitar sua Pesquisa"
                    value={word}
                    onChange={(event)=>setWord(event.target.value)}
                />
                <Button content="pesquisar" func= {()=>search(word)} />
            </div>
        </header>
    )
}

