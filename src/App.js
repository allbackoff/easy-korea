import './App.css';
import fire from './fire'
import styles from  './styles.css'
import Header from './components/Header'
import HomePage from './components/HomePage'
import Page from './components/Page'
import React, {useState, useEffect} from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import Guides from './components/Guides';
import Forum from './components/Forum';
import Forum1 from './components/Forum1';
import HospitalGuide from './components/HospitalGuide'
import AirportGuide from './components/AirportGuide'
import DocumentsGuide from './components/DocumentsGuide'
import FoodGuide from './components/FoodGuide'
import TransportGuide from './components/TransportGuide'

import visa from'./components/Documents/visa'
import arc from './components/Documents/arc'
import residency from './components/Documents/residency'

import Emergency from './components/Emergency'
import EmergencyReceive from './components/EmergencyReceive'
import EmergencyGive from './components/EmergencyGive'
import EmergencyConfirm from './components/EmergencyConfirm'
import EmergencyHospital from './components/EmergencyHospital'
import EmergencyReceiveConfirmation from './components/EmergencyReceiveConfirmation'
import AskQuestion from './components/AskQuestion'


function App() {
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [hasAccount, setHasAccount] = useState(false)
  

  const clearInputs = () => {
    setEmail('')
    setPassword('')
  }

  const clearErrors = () => {
    setEmailError('')
    setPasswordError('')
  }

  const handleLogin = () => {
    clearErrors()
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        switch(error.code){
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-fount':
            setEmailError(error.message)
            break
          case 'auth/wrong-password':
            setPasswordError(error.message)
            break
        }
      })
  }

  const handleSignup = () => {
    clearErrors()
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        switch(error.code){
          case 'auth/email-already-in-use':
          case 'auth/invalid-email':
            setEmailError(error.message)
            break
          case 'auth/weak-password':
            setPasswordError(error.message)
            break
        }
      })
  }

  const handleLogout = () => {
    fire.auth().signOut()
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if(user) {
        clearInputs()
        setUser(user)
      } else {
        setUser('')
      }
    })
  }

  useEffect(() => {
    authListener()
  }, [])

  return (
    <Router>
      <div className="App">
        <Header styles = {styles} user={user}/>
        <Switch>
            {!user ? (
              <Route path="/login" render={(props) => (
                <Login {...props}
                 email={email}
                 setEmail={setEmail}
                 password={password}
                 setPassword={setPassword}
                 handleLogin={handleLogin}
                 handleSignup={handleSignup}
                 hasAccount={hasAccount}
                 setHasAccount={setHasAccount}
                 emailError={emailError}
                 passwordError={passwordError}
                 user={user}
                 handleLogout={handleLogout}
                 />
              )} />
            ) : (
              <Route path="/mypage" render={(props) => (
                <Page {...props} 
                handleLogout={handleLogout}
                user={user}
                />
              )} />
            )}
            <Route exact path="/guides" component={Guides}/>
            <Route exact path="/guides/hospital" component={HospitalGuide} />
            <Route exact path="/guides/airport" component={AirportGuide} />
            <Route exact path="/guides/documents" component={DocumentsGuide} />
            <Route exact path="/forum" component={Forum} />
            <Route exact path="/forum/ask" component={AskQuestion} />
            <Route exact path="/forum1" component={Forum1} />
            <Route exact path="/guides/food" component={FoodGuide}/>
            <Route exact path="/guides/transport" component={TransportGuide} />

            <Route exact path="/guides/documents/arc" component={arc} />
            <Route exact path="/guides/documents/visa" component={visa} />
            <Route exact path="/guides/documents/residency" component={residency} />

            <Route exact path="/emergency" component={Emergency} />
            <Route exact path="/emergency/receive" component={EmergencyReceive} />
            <Route exact path="/emergency/give" component={EmergencyGive} />
            <Route exact path="/emergency/give/confirm" component={EmergencyConfirm} />
            <Route exact path="/emergency/hospital" component={EmergencyHospital} />
            <Route path = "/emergency/receive/" component = {EmergencyReceiveConfirmation}/>

            <Route path="/" component={HomePage}/>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
