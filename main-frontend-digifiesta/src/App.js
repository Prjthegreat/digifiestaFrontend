import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Link,Switch } from 'react-router-dom'
import HomePage from './pages/HomePage';
import MainEventsPage from './pages/EventsPage/MainEventsPage';
import RegisterForm from './components/registration/RegisterForm';
import {AuthContext} from './context/auth-context'
import {useState,useCallback} from 'react'
function App() {
 const [isLoggedIn,setIsLoggedIn]=useState(false)
 const [userid,setuserid]=useState(null)
 const [token,setToken]=useState(null)
const login=useCallback(
  (uid,token) => {
    setuserid(uid)
    setIsLoggedIn(true)
    setToken(token)
    localStorage.setItem('useritems',JSON.stringify({
      token,
      uid:userid
    }))
  },
  [],
)

const logout=useCallback(
  () => {
    setIsLoggedIn(false)
    setToken(null)
    setuserid(null)
    localStorage.removeItem('useritems')
  },
  [],
)
  
  return (
    <div className="App">
      <Router>
         <Switch>
           <AuthContext.Provider value={{islogin:isLoggedIn,login:login,logout:logout,token:token}} >
           <Route  exact path="/" >
             <HomePage />
           </Route>
           <Route  exact path="/eventpage" >
            <MainEventsPage />
           </Route>
           <Route  exact path="/soon" >
            coming soon
           </Route>
           <Route  exact path="/pricing_plane" >
           <RegisterForm />
           </Route>
           </AuthContext.Provider>
         </Switch>
      </Router>
    </div>
  );
}

export default App;

