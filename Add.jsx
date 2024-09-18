import React, { useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
const Add = () => {

    const [image, setImage] = useState(false)
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Salad"

    })
    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }
    const onSubmitHandler = async (event) => {
        event.preventDefault();
        
       
    }

    return (
        <div className='add'>

            {/* <form className='flex-col' onSubmit={onSubmitHandler}> */}
            <form className='flex-col' onSubmit={onSubmitHandler}>

                <div className="add-img-upload flex-col">
                    <p>Uplaod Image</p>
                    <label htmlFor="image">
                        <img src={image ? URL.createObjectURL(image) : assets.upload}  />
                    </label>
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden required />
                </div>

                <div className="add-product-name flex-col">
                    <p>Product name</p>
                    <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' />

                </div>

                <div className="add-product-description flex-col">
                    <p>product description</p>
                    <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='write content here' required></textarea>
                </div>

                <div className="add-category-price">
                    <div className="add-category flex-col">
                        <p>Product category</p>
                        <select onChange={onChangeHandler} name="category">
                            <option value="salad">salad</option>
                            <option value="Rolls">Rolls</option>
                            <option value="Deserts">Deserts</option>
                            <option value="Sandwich">Sandwich</option>
                            <option value="Cake">Cake</option>
                            <option value="Pure veg">Pure veg</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Noodles">Noodles</option>

                        </select>
                    </div>
                    <div className="add-price flex-col">
                        <p>Product price</p>
                        <input onChange={onChangeHandler} value={data.price} type="Number" name="price" placeholder='$20' />
                    </div>
                </div>
              
                <button type='submit' className='add-btn'>Add</button>
        </form>
        </div>
    )
}

export default Add