import React, { useEffect, useState } from "react";
import "./menu.css";
import Navbar from "../../components/nav/nav";
import CounterInput from "../../components/incinput/count_input";

const MenuPage = () => {
  const [meat, setMeat] = useState([]);

  const meats = [{
    beef: "Beef",
    fChicken: "Full Chicken",
    gChicken: "Chicken Gizzard",
    lChicken: "Chicken Laps",
    wChicken: "chicken Wings",
    rChicken: "Roasted Chicken",
    frChicken: "Fried Chicken",
    gm: "Goat Meat",
    fish: "Fish",
    sFish: "Smoke Fish",
    b: "Barbeque",
  }];

  const drinks = {
        fanta: "fanta", coke: "coke", sprite:"sprite", yoghurt: "yoghurts", pepsi:"pepsi", water:"bottle water", 
  }


  return (
    <section>
      <Navbar />
      <div className="MenuHeader">
        <h1>Order From Menu</h1>

            <div className="menuTable">

                <div className="menuItem">
                        <h3>Soft Drinks</h3>
                        <div>
                            <input type="checkbox" name="" value={''}/>
                            <span> {drinks.coke}</span>
                            <CounterInput/>
                        </div>
                        <div>
                            <input type="checkbox" name="" value={''}/>
                            <span> {drinks.fanta}</span>
                        </div>
                        <div>
                            <input type="checkbox" name="" value={''}/>
                            <span> {drinks.sprite}</span>
                        </div>
                        <div>
                            <input type="checkbox" name="" value={''}/>
                            <span> {drinks.pepsi}</span>
                        </div>
                        <div>
                            <input type="checkbox" name="" value={''}/>
                            <span> {drinks.yoghurt}</span>
                        </div>
                        <div>
                            <input type="checkbox" name="" value={''}/>
                            <span> {drinks.water}</span>
                        </div>
                        
                </div>

                <div className="menuItem">
                        <h3>Grain Food</h3>
                        <div>
                            <input type="checkbox" name="" value={''}/>
                            <span> White Rice & Stew</span>
                        </div>
                        <div>
                            <input type="checkbox" name="" value={''}/>
                            <span> Jollof Rice</span>
                        </div>
                        <div>
                            <input type="checkbox" name="" value={''}/>
                            <span> Fried Rice</span>
                        </div>
                        <div>
                            <input type="checkbox" name="" value={''}/>
                            <span> Coconut Rice</span>
                        </div>
                        <div>
                            <input type="checkbox" name="" value={''}/>
                            <span> Vegetable Rice</span>
                        </div>
                        <div>
                            <input type="checkbox" name="" value={''}/>
                            <span> Chinese Rice</span>
                        </div>
                        
                </div>


                <div className="menuItem">
                        <h3>Swallow</h3>
                        <div>
                            <input type="checkbox" name="" value={''}/>
                            <span> Amala</span>
                        </div>
                        <div>
                            <input type="checkbox" name="" value={''}/>
                            <span> Pounded Yam</span>
                        </div>
                        <div>
                            <input type="checkbox" name="" value={''}/>
                            <span> Semo</span>
                        </div>
                        <div>
                            <input type="checkbox" name="" value={''}/>
                            <span> Fufu/Akpu</span>
                        </div>
                        <div>
                            <input type="checkbox" name="" value={''}/>
                            <span> Tuwo</span>
                        </div>
                        <div>
                            <input type="checkbox" name="" value={''}/>
                            <span> Wheat</span>
                        </div>
                        
                </div>

                <div className="menuItem">
                        <h3>Soups</h3>
                        <div>
                            <input type="checkbox" name="" value={''}/>
                            <span> Ewedu</span>
                        </div>
                        <div>
                            <input type="checkbox" name="" value={''}/>
                            <span> Okro Soup</span>
                        </div>
                        <div>
                            <input type="checkbox" name="" value={''}/>
                            <span> Pepe Soup</span>
                        </div>
                        <div>
                            <input type="checkbox" name="" value={''}/>
                            <span> White Soup</span>
                        </div>
                        <div>
                            <input type="checkbox" name="" value={''}/>
                            <span> Oha</span>
                        </div>
                        <div>
                            <input type="checkbox" name="" value={''}/>
                            <span> Egunsi soup</span>
                        </div>

                        <div>
                            <input type="checkbox" name="" value={''}/>
                            <span> Ejikaiko soup</span>
                        </div>

                        <div>
                            <input type="checkbox" name="" value={''}/>
                            <span> Ogbono soup</span>
                        </div>
                        
                </div>

                <div className="menuItem">
                        <h3>Snacks</h3>
                        <div>
                            <input type="checkbox" name="" value={''}/>
                            <span> Burger</span>
                        </div>
                        <div>
                            <input type="checkbox" name="" value={''}/>
                            <span> Pizza</span>
                        </div>
                        <div>
                            <input type="checkbox" name="" value={''}/>
                            <span> Meat Pie</span>
                        </div>
                        <div>
                            <input type="checkbox" name="" value={''}/>
                            <span> Chicken Pie</span>
                        </div>
                        <div>
                            <input type="checkbox" name="" value={''}/>
                            <span> Fish Pie</span>
                        </div>
                        <div>
                            <input type="checkbox" name="" value={''}/>
                            <span> Shawarma</span>
                        </div>

                        <div>
                            <input type="checkbox" name="" value={''}/>
                            <span> Saucage</span>
                        </div>

                        <div>
                            <input type="checkbox" name="" value={''}/>
                            <span> Hot Dog</span>
                        </div>

                        <div>
                            <input type="checkbox" name="" value={''}/>
                            <span> Donot</span>
                        </div>

                        <div>
                            <input type="checkbox" name="" value={''}/>
                            <span> Small Chops</span>
                        </div>
                        
                </div>

        
            </div>

      </div>
    </section>
  );
};

export default MenuPage;
