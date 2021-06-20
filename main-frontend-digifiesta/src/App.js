import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Link,Switch } from 'react-router-dom'
import HomePage from './pages/HomePage';
import MainEventsPage from './pages/EventsPage/MainEventsPage';
import RegisterForm from './components/registration/RegisterForm';
import {AuthContext} from './context/auth-context'
import {useState,useCallback,useEffect} from 'react'
function App() {
 const [isLoggedIn,setIsLoggedIn]=useState(false)
 const [userid,setuserid]=useState(null)
 const [token,setToken]=useState()
const login=useCallback(
  (token) => {
    //setuserid(uid)
    setIsLoggedIn(true)
    setToken(token)
    localStorage.setItem('useritems',JSON.stringify({
      token,
    }))
  },
  [],
)

const logout=useCallback(
  () => {
    setIsLoggedIn(false)
    setToken(null)
    //setuserid(null)
    localStorage.removeItem('useritems')
  },
  [],
)
useEffect(() => {
  const storeData= JSON.parse(localStorage.getItem('useritems')) 
  if(storeData && storeData.token){
    login(storeData.token)
  }
}, [login])
  
  return (
    <div className="App">
      <Router>
      <AuthContext.Provider value={{islogin:isLoggedIn,login:login,logout:logout,token:token}} >
         <Switch>
           
           <Route path="/" exact >
             <HomePage />
           </Route>
           <Route  path="/eventpage" exact >
            <MainEventsPage token={token} />
           </Route>
           <Route   path="/soon" exact >
            coming soon
           </Route>
           <Route  path="/registerhere" exact >
           <RegisterForm />
           </Route>
        
         </Switch>
         </AuthContext.Provider>
      </Router>
    </div>
  );
}

export default App;

