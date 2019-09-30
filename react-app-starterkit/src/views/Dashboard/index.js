import React, { Component } from 'react';

const Dashboard = class extends Component {
  render() {
    return (
      <div>
        <h3>TÖÖLAUD</h3>
        <div class="dropdown">
          <button class="dropbtn">Küsimustikud</button>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </div>
    );
  }
}


export default Dashboard