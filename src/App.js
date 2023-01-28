import './App.css';
import Card from './Card';
import Hero from './Hero';
import Navbar from './Navbar';
import data from './data.js';





function App() {

  const cards = data.map((item) => {
    return (
      <Card 
        {...item}
        key={item.id}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <Hero 
        img="./images/hero.png"
        h1="Online Experience"
        p="Join unique interactive activities led by one-of-a-kind hosts-all without leaving home."
      />
      <div className='container-cards'>
        {cards}
      </div>
    </div>
  );
}

export default App;
