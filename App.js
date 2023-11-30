// import React, { Component } from 'react'

// export default class App extends Component {
//   state = {
//     num:0
//   }
//   render() {
//     return (
//       <div>{this.state.num}
//         <button onClick={() => {this.setState({num:this.state.num+1}) }}>+</button>
//       </div>
//     )
//   }
// }
import React, { Component } from 'react'

export default class App extends Component {
   
  state = {
    person: {fullName:"ahmed ali", bio:"gffg", imgSrc:"https://i.pinimg.com/736x/90/8e/70/908e70d0a4e2127a41a748ababc7d886.jpg", profession:"football player" },
    shows: true,
    counter:0,
  }
  getData(){
    setInterval(() => {
      
      this.setState({
      counter: this.state.counter+1, 
      })
    }, 1000)
  }
  componentDidMount(){
    this.getData();
    
  }
  render() {
    return (
      
      <div >

       { (this.state.shows ===true )?
        <div>
       <h1>{this.state.person.fullName}</h1>
       <h2>{this.state.person.bio}</h2>
            <img src={this.state.person.imgSrc} alt="Profile" width={'400px'} height={"400px"}  />
            <h2>{this.state.person.profession}</h2>
            <h2>{this.state.counter }</h2>
       </div> :null
        }




        <button onClick={() => { if (this.state.shows === true) { this.setState({ shows: false }); } else { this.setState({ shows: true }) }; console.log(this.state.shows) }}>hide/show me</button>
        
      </div>
    )
    
  }
}

// with function**********************************************************
// import React, { useState } from 'react'

// const App = () => {
//   const [num, setNum] = useState(0);

//   return (
//     <div>
//       <h2>{ num}</h2>
//       <button onClick={() => setNum(num + 1)  }>+</button>
      
//     </div>
//   )
// }

// export default App