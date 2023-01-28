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
      <Hero />
      <div className='container'>
        {cards}
      </div>
    </div>
  );
}

export default App;
