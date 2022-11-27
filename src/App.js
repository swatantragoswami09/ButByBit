import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Hyperswap from './components/Hyperswap/Hyperswap';
import Hyperbridge from './components/Hyperbridge/Hyperbridge';
import Hyperlend from './components/hyperlend/Hyperlend';
import Hyperlaunch from './components/Hyperlaunch/Hyperlaunch';
import About from './components/About/About';
import Termsofservice from './components/Termsofservice/Termsofservice';
import Privacypolicy from './components/Privacypolicy/Privacypolicy';
// import Footer from './components/Footer/Footer';
import Faq from './components/Faq/Faq';
import Governance from './components/Governance/Governance';
import Wallet from './components/Wallet/Wallet';
import Tokenomics from './components/Tokenomics/Tokenomics';
import Contact from './components/Contact/Contact';
import Thanks from './components/Thanks/Thanks';
import Documentation from './components/Documentation/Documentation';
import TradingCompetition from './components/TradingCompetition/TradingCompetition';
import Demo from './components/Demo/Demo';
import Roadmap from './components/Roadmap/Roadmap';
import Footer from "./components/Finalfooter/Footer"
import Header from './components/Banner/Header';
import Layout from './Layout1';
function App() {
  return (
    <div className="App">
      {/* <iframe> */}
      <Layout />

      {/* </iframe> */}
     
    </div>
  );
}

export default App;
