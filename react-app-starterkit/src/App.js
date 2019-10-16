import React from 'react'
import { Route } from 'react-router-dom'
import Header from './containers/Header'
import Footer from './containers/Footer'
import Form from './views/Form'
import Event from './views/Event'
import Auth from './views/Auth/Auth'
import Paik1 from './views/Questionnaire/paik1'
import Test1 from './views/Questionnaire/test1'
import Test2 from './views/Questionnaire/test2'
import Test3 from './views/Questionnaire/test3'
import Dashboard from './views/Dashboard'
import PatientsParse from './components/Patient/PatientsParse'
import Patient from './components/Patient/View'

const App = () => (
  <div>
    <Header />

    <div className="container" id="main">
      <Route exact path="/" component={PatientsParse} />
      <Route path="/form" component={Form} />
      <Route path="/event" component={Event} />
      <Route path="/auth" component={Auth} />
      <Route path="/paik1" component={Paik1} />
      <Route path="/test1" component={Test1} />
      <Route path="/test2" component={Test2} />
      <Route path="/test3" component={Test3} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/patients" component={PatientsParse} />
      <Route path="/patients/:id" component={Patient}/>
    </div>

    <Footer />
  </div>
)

export default App
