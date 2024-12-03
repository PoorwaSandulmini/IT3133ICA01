import '../assets/CSS/layout.css';
import {useState} from 'react';

export default function Product(props){
    const[quantity,setQuantity]=useState(0);
    const addItem=()=>{
        if(quantity>0){
            const item={
                name:props.flower.name,
                quantity:quantity,
                price:props.flower.price*quantity,
            }
            props.setGprice(props.gPrice+item.price)
            props.setCart((prev)=>([...prev,item]));
        }
    }
    
    return(
        <div className="grid-item">

            <div class="card">
                <img src={require(`../assets/image/${props.flower.img}`)} />
                <div class="card-body">
                    <h5 class="card-title">Price:{props.flower.price}</h5>
                    <div class="quantity-container">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" onChange={(e)=>setQuantity(e.target.value)}/>
                    </div>
                    <button class="card-button"onClick={addItem}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}