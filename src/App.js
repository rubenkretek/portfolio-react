import Nav from './components/Nav';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Work from './pages/Work';
import './styles/global.scss';
import { Switch, Route } from 'react-router-dom';
import WorkItem from './pages/WorkItem';




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

    </>
  );
}

export default App;
