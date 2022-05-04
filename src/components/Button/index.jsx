import {useState, useEffect} from "react"
import "./styles.css"

export const Button = ({content , func, funcParams}) => {

    return(
        <button className="buttonC" onClick={func}>
            {content}
        </button>
    )
}

