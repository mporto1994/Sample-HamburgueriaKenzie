import {useState, useEffect} from "react"
import "./styles.css"
import {ProductCard} from "../ProductCard"

export const ProductsList = ({prop,func}) => {
    console.log("ProductList  ",prop)
    return(
        <div className="listDiv">
            {prop.map((product, index)=><ProductCard key={index} prod={product} func={func}/>)}
        </div>
    )
}

