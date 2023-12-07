import './App.css';
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import Favorites from './components/Favorites'
import Trip from './components/Trip';
import Java from './components/Java';
import Region from './components/Region';

import "./style/landingPage.css"

function App() {
  return (
    <div>
      {/* Intro Section Start */}
      <div className='myBg'>
        <NavBar/>
        <Intro/>
      </div>
      {/* Intro Section End */}

      {/* Favorites Section Start */}
      <div className='favorites'>
        <Favorites/>
      </div>
      {/* Favorite Section End */}

      {/* Trip Section Start */}
      <div className='trip'>
        <Trip/>
      </div>
      {/* Trip Section End */}

      {/* Java Section Start */}
      <div className='java'>
        <Java/>
      </div>
      {/* Java Section End */}

      {/* Region Section Start */}
      <div className='region'>
        <Region/>
      </div>
      {/* Region Section End */}
    </div>
  );
}

export default App;
