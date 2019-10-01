import React from 'react'
import { Route } from 'react-router-dom'
import Header from './containers/Header'
import Footer from './containers/Footer'
import Home from './views/Home'
import Form from './views/Form'
import Event from './views/Event'
import Auth from './views/Auth/Auth'
import { AppConfig } from './config'
import Demographics from './views/Demographics'
import Dashboard from './views/Dashboard'
import PatientsParse from './components/Patient/PatientsParse'
import Patient from './components/Patient/View'

const App = () => (
  <div>
    <Header />

    <div className="container" id="main">
      { AppConfig.projectUrl === 'https://reactstarter.form.io' ?
        <div className="alert alert-warning">This app is still configured to use the default project. Be sure to create your own project in form.io and change the PROJECT_URL in src/config.js</div>
        : null
      }
      <Route exact path="/" component={Home} />
      <Route path="/form" component={Form} />
      <Route path="/event" component={Event} />
      <Route path="/auth" component={Auth} />
      <Route path="/demographics" component={Demographics} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/patients" component={PatientsParse} />
      <Route path="/patients/:id" component={Patient}/>
    </div>

    <Footer />
  </div>
)

export default App
