import React, { useState } from 'react'
import "./Products.css"

function ProductList() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [quantity, setQuantity] = useState("")
    const [description, setDescription] = useState("")
    const [error, setError] = useState("")
    const [products, setProducts] = useState([])

    const createNewProduct = (e) => {
        e.preventDefault()
        console.log({name,price,category,quantity,description});


        if (name.trim() === "") {
            setError("Name is required")
        } else if (price === "") {
            setError("Price is required")
        } else if (category === "") {
            setError("Category is required")
        } else {
            
            setError("")

            const newProduct = {
                id: Date.now(),
                name: name,
                price: price,
                category: category,
                quantity: quantity,
                description: description
            }

            
            setProducts([...products, newProduct])

         
        }
    }

    return (
        <div className='app'>
            <header className='header'>
                <h1>Manage products</h1>
            </header>

            <main className='container'>
                <div className='stats'>
                    <div className='stats-card'>
                        <p>Total products</p>
                        <h2>{products.length}</h2>
                    </div>
                </div>
            </main>

            <div className='card'>
                <h2>Add new products</h2>
            </div>
            
            <form onSubmit={createNewProduct}>
                <div className='form-grid'>
                    <div className='form-group'>
                        <label>Products name</label>
                        <input 
                            type="text" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className='form-group'>
                        <label>Product price</label>
                        <input 
                            type="number" 
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>

                    <div className='form-group'>
                        <label>Category</label>
                        <select 
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="">None</option>
                            <option value="Electronics">Electronics</option>
                            <option value="School">School</option>
                        </select>
                    </div>

                    <div className='form-group'>
                        <label>Quantity</label>
                        <input 
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)} 
                        />
                    </div>

                    <div className='form-group'>
                        <label>Description</label>
                        <textarea 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                </div>

                {error && <p className='error'>{error}</p>}
                
                <button type='submit' className='add-btn'>Submit</button>
            </form>

            <div className='products'>
                {products.map((product) => (
                    <div className='product' key={product.id}>
                        <h3>{product.name}</h3>
                        <p>Price: ${product.price}</p>
                        <p>Category: {product.category}</p>
                        {product.description && <p>{product.description}</p>}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductList