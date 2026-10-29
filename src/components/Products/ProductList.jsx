import React, { useState } from 'react'
import "./Products.css"

function ProductList() {
    const[name,setName]=useState("")
    const[price,setPrice]=useState("")
    const[category,setcategory]=useState("")
    const[quantity,setQuantity]=useState("")
    const[decription,setDescription]=useState("")
    const[error,setError]=useState("")
    const[products,setProducts]=useState([])


    const createNewProduct=(e)=>{
        e.preventDefault()
        console.log('test');
        if(name.trim()===""){
            setError("name is required")
        } else if(price === ""){
            setError("Price is required")
        } else if(category === ""){
            setError("cat is required")
        } else{
            const newProduct={
                id:Date.now(),
                name:name,
                category:category,}
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
                    <p>Toal products</p>
                    <h2>34</h2>
                </div>
            </div>
        </main>

        <div className='card'>
            <h2>Add new products</h2>
        </div>
        
        <form  onSubmit={createNewProduct}>
            <div className='form-grid'>
            <div className='form-group'>
                <label htmlFor="">Products name</label>
                <input type="text" 
                value={name}
                onChange={(e)=>setName(e.target.value)}/>
            </div>

            <div className='form-group'>
                <label htmlFor="">Product price</label>
                <input type="number" 
                value={price}
                onChange={(e)=>setPrice(e.target.value)}/>
            </div>

            <div className='form-group'>
                <label htmlFor="">Category</label>
                <select name="" id=""
                value={category}
                 onChange={(e)=>setcategory(e.target.value)}>
                    <option value="">None</option>
                    <option value="Electronics">Electronics</option>
                    <option value="School">School</option>
                </select>
            </div>

            <div className='form-group'>
                <label htmlFor="">Quantity</label>
                <input type="number"
                value={quantity}
                onChange={(e)=>setQuantity(e.target.value)} />
            </div>

            <div className='form-group'>
                <label htmlFor="">Description</label>
                <textarea name="" id="" 
                value={decription} onChange={(e)=>setDescription(e.target.value)}>Description</textarea>

            </div>
        </div>
        <button>Submit</button>
        </form>

        <div className='products'>
            {
                products.map((product)=>(
                    <div className='product' key={product.id}>
                        <h3>{product.name}</h3>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ProductList