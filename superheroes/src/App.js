import './App.css';
import Hero from './assets/components/Hero';
const data = require('./data.json');

function App() {
  return (
    <div className="Heroes">
      {
        data.map((hero) => 
            <Hero name={hero.name} universe={hero.universe} alterego={hero.alterego} occupation={hero.occupation} friends={hero.friends} superpowers={hero.superpowers} url={hero.url} key={hero.name}></Hero>
        )
      }
    </div>
  );
}

export default App;
