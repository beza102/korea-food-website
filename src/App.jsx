import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const FAMOUS_DISHES = [
    {
        name: "Bibimbap",
        image: "assets/Bibimbap.jpeg", 
        description: "Mixed rice with vegetables, meat, and gochujang.",
        link: "#bibimbap"
    },
    {
        name: "Ramen",
        image: "assets/korean-ramen-3.jpg", 
        description: "Noodle soup with savory broth, toppings, and spices.",
        link: "#ramen"
    }
];



export default function App() {
  return (
    <div className="App">
      <header className="food">
        <h1>Korean Food</h1>
        <p>A guide to the flavor, and culture of korean cuisine</p>
      </header>
      <Header  dishes={FAMOUS_DISHES}/>
      <Body  famouseDishes={FAMOUS_DISHES}/>
      <Footer />
    </div>
  );
}
