import React ,{Component } from 'react';

class Todolist extends Component{
   
    
render(){
    
  
    return(
        <div>
         
        {this.props.items.map(item => (
          <ul><label><input type="checkbox"/> {item.text}</label>
          <br></br></ul>
          
        ))}

        
        </div>

    )
}
} 
export default Todolist;