import React from 'react'
import Aux from '../../../hoc/Aux'


const OrderSummary = (props) =>{
const ingredientsummary=Object.keys(props.ingredients)
.map(igKey=>{
return (<li><span style={{textTransform:"capitalize"}}>{igKey}</span>:{props.ingredients[igKey]}</li>)
})

return (
    <Aux>
        <h3>Your Order</h3>
        <p>Delicious burger with following ingredients:</p>
        <ul>
            {ingredientsummary}
        </ul>
    </Aux>
)
}
export default OrderSummary