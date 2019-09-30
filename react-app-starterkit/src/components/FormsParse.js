// import React, { Component } from 'react';


// class FormsParse extends Component{
//     constructor(){
//       super();
//       this.state = {
//         forms: [],
//       }
//     }

//   componentDidMount(){
//     fetch('https://wauvrnyktlmhhfa.form.io/form')
//     .then (results => {
//       return results.json();
//     }).then(data => {
//       let forms = data.results.map((frm) => {
//           let a = frm.title
//         return(
//         //   <div key={frm.results}>
//         //     <p src={frm.revisions.title}/>
//         //   </div>
//         <p>v;abla</p>
//         )
//       })
//       this.setState({forms: forms});
//       console.log("state", this.state.forms);
//     })
//   }
//   render(){ 
//     return(
//       <div>
//         <div>
//           {this.state.forms}
//         </div>
//       </div>
//     );
//   }
// }

// export default FormsParse;