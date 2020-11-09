import React from 'react'

export default function ProductCard(props) {
    return (
        <div>
            <button onClick={()=>props.onClose}>X</button>
            <h1>Image</h1>
            <h1>Title</h1>
            <h1>Price</h1>
            <h1>Condition</h1>
            <h1>Stock</h1>
        </div>
    )
}
