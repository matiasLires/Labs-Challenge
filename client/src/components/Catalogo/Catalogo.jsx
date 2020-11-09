import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

export default function Catalogo(props) {
    const products= props.products
    return (
        <div>
            {products.map(()=>
            <ProductCard title={products.title} />
            )}
        </div>
    )
}
