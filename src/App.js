import './App.css'
import Home from './Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ContactPage from "./pages/contact/ContactPage";
import PhotoPage from './pages/photopage/PhotoPage';
import Navbar2 from './pages/2-Navbar/Navbar2';
import Contribution from './pages/contribution/Contribution'




function App() {
  return (
      <>

          <Router>
                <Switch>
                    <Route path="/" exact>
                      <Home />
                    </Route>
                    
                    {/* contact page */}
                    <Route path="/contact" exact>
                        <ContactPage />
                    </Route>

                    {/* photopage */}
                    <Route path="/photos" exact>
                        <PhotoPage />
                    </Route>

                    {/* contribution */}
                    <Route path="/contribution" exact>
                        <Navbar2 />
                        <Contribution />
                    </Route>

                </Switch>
          </Router>
      </>
  );
}

export default App;
