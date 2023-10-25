import React, { useState } from 'react'
import Navbar from '../../components/nav/nav'
import "./view.css"
import { useNavigate } from 'react-router-dom'

const View = () => {

    const [count, setCount] = useState(1)
    const navigate = useNavigate()

    const inc = ()=>{
        setCount(count + 1)
    }

    const dec = ()=>{
        if(count > 1){
            setCount(count - 1)
        }else{
            setCount(count)
        }
    }

    const handleCustom = ()=>{
        navigate("/menu")
    }

  return (

    <section>
       <Navbar/>

       <div className='viewOrderContainer'>
       
            <div className='orderImgContainer'>
                <img src='/assets/fff.png' alt='' className=''/>
            </div>

            <div className='orderInfoContainer'>

                <div className='orderInfoItemContainer'>
                    <div>
                        <input type='checkbox' name='' value={""} className=''/>
                        <select>
                            <option>Extra Meat</option>
                            <option>Extra Bush Meat</option>
                            <option>Extra Goat Meat</option>
                        </select>
                    </div>
                    <div className='orderincForm'>
                        <button className='orderDec' onClick={dec}>-</button>
                        <input type='number' className='orderIncInput' value={count}/>
                        <button className="orderInc" onClick={inc}>+</button>
                    </div>
                </div>

                <div className='orderInfoItemContainer'>
                    <div>
                        <input type='checkbox' name='' value={""} className=''/>
                        <span> Plantain</span>
                    </div>
                    <div className='orderincForm'>
                        <button className='orderDec' onClick={dec}>-</button>
                        <input type='number' className='orderIncInput' value={count}/>
                        <button className="orderInc" onClick={inc}>+</button>
                    </div>
                </div>

                <div className='orderInfoItemContainer'>
                    <div>
                        <input type='checkbox' name='' value={""} className=''/>
                        <select>
                            <option>Full chicken</option>
                            <option>chicken Lap</option>
                            <option>chicken Gizzard</option>
                            <option>chicken Wing</option>
                            <option>Turkey</option>
                            <option>Beef</option>
                            <option>Fish</option>
                        </select>
                    </div>
                    <div className='orderincForm'>
                        <button className='orderDec' onClick={dec}>-</button>
                        <input type='number' className='orderIncInput' value={count}/>
                        <button className="orderInc" onClick={inc}>+</button>
                    </div>
                </div>

                <div className='orderInfoItemContainer'>
                    <div>
                        <input type='checkbox' name='' value={""} className=''/> 
                        <select>
                            <option>Soft Drink</option>
                            <option>Fanta</option>
                            <option>Coke</option>
                            <option>Pepsi</option>
                            <option>Youghurt</option>
                            <option>Sprite</option>
                            <option>Predator</option>
                            <option>Fearless</option>
                            <option>Mountain Dew</option>
                            <option>Bottle Water</option>
                        </select>
                    </div>
                    <div className='orderincForm'>
                        <button className='orderDec' onClick={dec}>-</button>
                        <input type='number' className='orderIncInput' value={count}/>
                        <button className="orderInc" onClick={inc}>+</button>
                    </div>
                </div>

                <div className='orderNowBtnContainer'>
                    <button className='orderNowBtn'>Order Now</button>
                    <button className='customBtn' onClick={handleCustom}>Custom Order</button>
                </div>

            </div>

       </div>

    </section>
  )

}

export default View