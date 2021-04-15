import './styles/App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Login from './components/Login'
import Register from './components/Register'
import Nav from './components/Nav';
import UserCart from './components/UserCart';
import { useStateValue } from './StateProvider';
import { useEffect, useState } from 'react'
import { auth, provider } from './firebase'
import { db } from './firebase'
function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    auth.signInWithPopup(provider).then((result) => {
        dispatch({
        type : 'SET_USER',
        user : result.user
        })
    })
  }, []);

  const [postId, setPostId] = useState([]);
  const [Id, setId] = useState([]);
  useEffect(() => {
     db.collection('user_details').onSnapshot(snapshot => {
            setPostId(snapshot.docs.map( doc => ({
                id : doc.id,
            })))
        })
  }, [])

  return (
      <Router>
      {
        !user ? (
          <div>
            <Route path='/login'>
                <Login/>
              </Route>
              <Route path='/Register'>
                <Register/>
              </Route>
          </div>
        ) : (
          <div className="App">
            <Switch>
              <Route exact path='/'>
                <Nav />
                <Home/>
              </Route>
              <Route path='/Contact'>
                <Nav />
                <Contact/>
              </Route>
              <Route path='/Register'>
                <Nav />
                <Register/>
              </Route>
              <Route path='/login'>
                <Nav />
                <Login/>
              </Route>
              <Route path='/userCart'>
                <Nav />
                <UserCart/>
              </Route>
            </Switch>
          </div>
        )
      }
      </Router>
  );
}

export default App;
