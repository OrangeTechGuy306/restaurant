import "./home.css";
import Navbar from "../../components/nav/nav";
import Cartcard from "../../components/cards/cartcard";
import PopularCard from "../../components/cards/popularcard";
import OtherCard from "../../components/cards/othercards";

const Homepage = () => {
  const people = [
    { people: 2 },
    { people: 3 },
    { people: 4 },
    { people: 5 },
    { people: 6 },
    { people: 7 },
    { people: 8 },
    { people: 9 },
    { people: 10 },
  ];

  const foods = [
    {
      name: "Amala",
      desc: "1 bottle of coke, 1 bottle water, 2 beef with ewedu",
      price: 1500,
    },
    {
      name: "Akpu",
      desc: "1 bottle of coke, 1 bottle water, 2 beef with egunsi",
      price: 1500,
    },
    {
      name: "Chinese Rice",
      desc: "1 bottle of Fanta, 1 bottle water, full chicken and chop stick",
      price: 4500,
    },
    {
      name: "Fried Rice",
      desc: "1 bottle of Fanta, 1 bottle water, chicken lap, plantain, coleslaw",
      price: 3500,
    },
    {
      name: "Jollof Rice",
      desc: "1 bottle of yoghurt, 1 bottle water, chicken lap, plantain",
      price: 2000,
    },
    { name: "Pizza", desc: "1 bottle of yoghurt, 1 bottle water", price: 5000 },
    {
      name: "Shawarma",
      desc: "1 bottle of yoghurt, 1 bottle water",
      price: 2000,
    },
    {
      name: "Burger",
      desc: "1 bottle of yoghurt, 1 bottle water",
      price: 2500,
    },
    {
      name: "Fish Pie",
      desc: "1 bottle of yoghurt, 1 bottle water",
      price: 1800,
    },
    {
      name: "Meat Pie",
      desc: "1 bottle of yoghurt, 1 bottle water",
      price: 1800,
    },
    {
      name: "Chicken Pie",
      desc: "1 bottle of yoghurt, 1 bottle water",
      price: 2000,
    },
  ];

  return (
    <section>
      <Navbar />

      <div className="flyerContainer">
        <div className="flyerTextContainer">
          <h1>Welcome to the best Food Palace!</h1>
          <h3>Cooking made easy!</h3>
        </div>
        <div className="overlay"></div>
      </div>

      <div className="fCatContainer">
        <h1>Our Varieties of Food</h1>
        <div className="catCardContainer">
          <Cartcard img={"/assets/bb11.png"} title={"Burger"} />
          <Cartcard img={"/assets/p2.png"} title={"Pizza"} />
          <Cartcard img={"/assets/cc2.png"} title={"Grill Chicken"} />
          <Cartcard img={"/assets/sp1.webp"} title={"Spaghetti Boloni"} />
          <Cartcard img={"/assets/sp2.webp"} title={"Macroni"} />
          <Cartcard img={"/assets/rr3.png"} title={"Rice"} />
          <Cartcard img={"/assets/dr2.png"} title={"Soft Drinks"} />
          <Cartcard img={"/assets/pi1.png"} title={"Delicious Snacks"} />
          <Cartcard img={"/assets/sha.png"} title={"Shawarma"} />
          <Cartcard img={"/assets/be4.png"} title={"Beef Meat"} />
        </div>
      </div>

      <div className="popularContainer">
        <h1> Most Popular Food Packages</h1>
        <div className="popularCardsContainer">
          <PopularCard
            img={"/assets/fff.png"}
            type={"Combo Package"}
            op1={"1 Plate of Fried Rice"}
            op2={"Chicken Bucket"}
            op3={"Spaghetti"}
            op4={"Yoghurts"}
            price={5000}
          />
          <PopularCard
            img={"/assets/aaaa2.png"}
            type={"Citizen Combo"}
            op1={"1 Plate of Amala"}
            op2={"2 Titus Fish"}
            op3={"Gbegiri"}
            op4={"Ewedu"}
            price={3000}
          />
          <PopularCard
            img={"/assets/ffo.png"}
            type={"Refuel Maxs"}
            op1={"2 plate of Fried Rice"}
            op2={"2 Chicken Bucket"}
            op3={"Macroni"}
            op4={"2 Yoghurts"}
            price={10000}
          />
          <PopularCard
            img={"/assets/fc1.png"}
            type={"Premium Package"}
            op1={"2 Plate of Fried Rice"}
            op2={"4 Chicken Bucket"}
            op3={"Spaghetti"}
            op4={" 5 Yoghurts"}
            price={20000}
          />
          <PopularCard
            img={"/assets/fc2.png"}
            type={"Ultimate Package"}
            op1={"1 Plate of Fried Rice"}
            op2={"8 Chicken Bucket"}
            op3={"Spaghetti & Macroni"}
            op4={"5 Yoghurts"}
            price={50000}
          />
        </div>
      </div>

      <div className="otherFoodContainer">
        <h1>Our Menu</h1>
        <div className="otherCardFoodContainer">
          {foods.map((food) => (
            <OtherCard
              img={"/assets/fff.png"}
              type={food.name}
              desc={food.desc}
              price={food.price}
            />
          ))}
        </div>
      </div>

      <div className="reserve_orderContainer">
        <div className="reserveContainer">
          <h1>Reserve Table</h1>
          <div className="">
            <form className="reserveForm">
              <div className="">
                <p>Date:</p>
                <input type="date" className="reserveInput" />
              </div>
              <div className="">
                <p>People:</p>
                <select className="">
                  <option value={""}> Select People</option>
                  {people.map((p) => (
                    <option value={p.people}>{p.people} people</option>
                  ))}
                </select>
              </div>
              <div className="">
                <p>First Name:</p>
                <input type="text" className="reserveInput" />
              </div>
              <div className="">
                <p>Last Name:</p>
                <input type="text" className="reserveInput" />
              </div>
              <div className="">
                <p>Mobile No.:</p>
                <input type="tel" className="reserveInput" />
              </div>
              <div className="">
                <p>Email:</p>
                <input type="email" className="reserveInput" />
              </div>
              <div className="">
                <p>Other Description:</p>
                <textarea className="reserveInputDesc" />
              </div>
              <div className="">
                <input type="submit" className="reserveBtn" value={"Reserve Table"} />
              </div>
            </form>
          </div>
        </div>

        <div className="orderContainer">
          <form className="">
            <div>
              <h1>Make a Quick Order</h1>
            </div>
            <div>
              <p>Select the food type</p>
              <select className="orderInput">
                {foods.map((food) => (
                  <option>{food.name}</option>
                ))}
              </select>
            </div>
            <div>
              <p>Add Drink</p>
              <select className="orderInput">
                {foods.map((food) => (
                  <option>{food.name}</option>
                ))}
              </select>
            </div>
            <div>
              <p> Add Snacks</p>
              <select className="orderInput">
                {foods.map((food) => (
                  <option>{food.name}</option>
                ))}
              </select>
            </div>
            <div>
              <p>Add Meat</p>
              <select className="orderInput">
                {foods.map((food) => (
                  <option>{food.name}</option>
                ))}
              </select>
            </div>
            <div className="">
              <p>Other Description:</p>
              <textarea className="reserveInputDesc" />
            </div>
            <div className="">
              <input type="submit" className="orderBtn" value={"Order Now"} />
            </div>
          </form>
        </div>
      </div>

      <div className="aboutUsContainer">
        <div className="aboutTxtContainer">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui sint
            ullam fugit odit necessitatibus quae a reiciendis expedita
            voluptates magnam. Optio, rerum neque error dolorem, id aliquid
            voluptas eum voluptatum, enim in mollitia exercitationem tempore
            inventore nostrum voluptatem beatae ipsa reiciendis fugiat.
            Voluptate quasi tenetur consequuntur similique dolores fuga quisquam
            labore minus in amet eos, veritatis animi ipsa ullam temporibus
            aliquam quis minima ab fugit officia excepturi aliquid odit.
            Voluptatum qui corrupti incidunt voluptas, eos, labore nesciunt
            praesentium pariatur facere quo impedit sapiente vitae quam omnis
            nobis deleniti consequatur et doloremque quae blanditiis? Culpa modi
            tempore et dignissimos vero qui officiis quisquam minus, enim
            voluptatibus repudiandae unde earum? Iste, labore fuga saepe
            repudiandae aliquid ex autem quasi omnis consequuntur commodi, nisi
            delectus dolorum culpa ipsam dicta mollitia architecto eligendi
            maxime earum sequi? Accusamus, quae natus fuga eveniet blanditiis
            numquam dicta obcaecati facilis. Nam laboriosam molestiae sunt
            impedit iste, non facere sapiente soluta. Velit itaque voluptates a
            aliquam ex excepturi quis porro ab repellendus. Nihil, repellendus
            reiciendis nobis atque odio, voluptate suscipit eveniet asperiores,
            aut laboriosam voluptatum tempora dolorum. Aliquam minus nulla
            excepturi illo ab dolorum aliquid vitae beatae est eaque velit
            laboriosam alias, ipsam cupiditate at optio quos distinctio labore.
          </p>
        </div>
        <div className="aboutImgContainer">
          <img src="/assets/chef.png" alt="" className="chefImg" />
        </div>
      </div>
    </section>
  );
};

export default Homepage;
