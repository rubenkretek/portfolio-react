import './styles/app.scss';
import Nav from './components/Nav';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Work from './pages/Work';
import { Switch, Route } from 'react-router-dom';
import WorkItem from './pages/WorkItem';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/work" exact>
          <Work />
        </Route>
        <Route path="/work/:id">
          <WorkItem />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
