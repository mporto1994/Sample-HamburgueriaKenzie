import {useState, useEffect} from "react"
import "./styles.css"
import {ProductCard} from "../ProductCard"

export const Cart = ({removeAll,prop,cartProducts,removeItem}) => {

    const [cartPosition,setCartPosition]=useState([])

    

    return(
        <div className="cartDiv">
            <div className="cartHeaderDiv">
                <h2>Carrinho de Compras</h2>
            </div>
            <div className="allCart">
            <div className="productsDiv">
                {prop.map((prodCart,index)=>{
                return(
                    <div className="prodDiv" key={index}>
                        <figure><img src={prodCart.img}/></figure>
                        <div className="namesButtonDiv">
                            <div className="namesDiv">
                                <p className="cartNameP">{prodCart.name}</p>
                                <p className="cartCategoryP">{prodCart.category}</p>
                            </div>
                            <button onClick={()=>{return(removeItem(index))}}>Remover</button>
                        </div>
                        
                    </div>    
                        )
                })}
                <div className="removeDiv">
                    <div className="totalDiv">
                        <p>Total</p>
                        <p>R$<span>{(cartProducts.reduce((total,acc)=>(total+=acc.price),0)).toFixed(2)}</span></p>
                    </div>
                    <button onClick={()=>removeAll()}>Remover todos</button>
                </div>
            </div>
            </div>
        </div>
    )
}

