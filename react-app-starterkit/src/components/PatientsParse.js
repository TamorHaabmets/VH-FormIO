import React, { Component } from 'react';


class PatientsParse extends Component{
    constructor(){
        super();
        this.state = {
        patients: [],
        }
    }

    
    render(){ 
    return(
        <div>
        <div>
            {this.state.forms}
        </div>
        </div>
    );
    }
}

export default PatientsParse;