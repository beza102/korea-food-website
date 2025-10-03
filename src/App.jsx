import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const FAMOUS_DISHES = [
    {
      name: "Bibimbap",
      image: "/Bibimbap.jpeg", 
      description: "Mixed rice with vegetables, meat, and gochujang.",
      link: "#bibimbap"
    },
    {
      name: "Ramen",
      image: "/korean-ramen-3.jpg", 
      description: "Noodle soup with savory broth, toppings, and spices.",
      link: "#ramen"
    },
    {
      name: "Korean Corn Dog",
      image: "/korean-ramen-3.jpg", 
      description: "Often contain cheese cheese or fish sausage replacing part of the hot dog. Sugar is a popular condiment for Korean hot dogs.",
      link: "#corndog"
    },
    {
      name: "Korean Pizza",
      image: "", 
      description: "Popular pizza toppings in Korea include sweet potato, corn, seafood, and kimchi.",
      link: "#pizza"
    },
    {
      name: "Korean Fried Chicken",
      image: "", 
      description: "In Korea, it is popular to eat fried chicken with sweet and spicy sauce or powdered cheese.",
      link: "#chicken"
    },
    {
      name: "Gimbap",
      image: "",
      description: "A seweed and rice roll with vegetables, egg, or meat sliced into bite-sized pieces and commonly eaten as part of a packed lunch.",
      link: "#gimbap"
    }
];



export default function App() {
  return (
    <div className="App">
      <Header  dishes={FAMOUS_DISHES}/>
      <Body  famouseDishes={FAMOUS_DISHES}/>
      <Footer />
    </div>
  );
}
