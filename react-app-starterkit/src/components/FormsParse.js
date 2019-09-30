import React, { Component } from 'react';


class FormsParse extends Component{
    constructor(){
      super();
      this.state = {
        forms: [],
      }
    }

  componentDidMount(){
    var data = {
        content: {
            people: [
              {
                name: "Test",
                age : 24
              },
              {
                name: "Foo",
                age: 25
              }
            ]
         }
      };
    {let forms = data.map((frm) => {
          let a = frm.title
        return(
        //   <div key={frm.results}>
        //     <p src={frm.revisions.title}/>
        //   </div>
        <p>v;abla</p>
        )
      })
      this.setState({forms: forms});
      console.log("state", this.state.forms);
    };
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

export default FormsParse;