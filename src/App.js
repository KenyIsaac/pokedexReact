import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/layout/NavBar';
import { Login } from './components/Login';
import { SignUp } from './components/SignUp';
import { Home } from './components/Home';
import { AuthProvider } from './context/AuthContext';
import Dashboard from './components/layout/Dashboard';
import backgroundImage from './patterns.jpg';
import Pokemon from './components/pokemon/Pokemon';

class App extends Component {
  render() {
    return (
      <>

      <AuthProvider>
        <Router>

            <div className="App" style={{background:`url(${backgroundImage})`}}>
            
              <NavBar />
            
              <div className="container">                
                  <Switch>
                    <PrivateRoute exact path="/home" component={Home} />
                    <Route path='/login' component={Login} />
                    <Route path='/signup' component={SignUp} />
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} /> 
                  </Switch>
              </div>

          </div>
        </Router>
      </AuthProvider>


      </>
    );
  }
}


export default App;
