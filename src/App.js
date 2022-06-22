import './App.css';
import Header from './components/header';
import Intro from './components/intro';
import LogIn from './components/login';
import Skills from './components/skills';
import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route
} from "react-router-dom";
import Account from './components/Account'
import Example from './components/header';
import Profile from './components/yourProfile';
import Projects from './components/Projects';

function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])
  return (

    <>


      <Router>
        <Routes>
          {!session ?
            <Route path='/' element={<Example />} />
            : <Route path='/' element={<Account key={session.user.id} session={session} />} />
          }
        </Routes>
      </Router>

      <Router>
        <Routes>
          <Route path='/skills' element={<Skills />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
