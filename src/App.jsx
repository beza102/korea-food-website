import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';


export default function App() {
  return (
    <div className="App">
      <header className="food">
        <h1>Korean Food</h1>
        <p>A guide to the flavor, and culture of korean cuisine</p>
      </header>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
