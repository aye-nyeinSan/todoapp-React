import React ,{Component} from 'react';
import Todolist from "./Todolist";
import "./css/style.css";


class App extends Component{
    constructor(props){
        super(props);

         this.state={
                text:'',items:[],
         }
         this.Reset=this.Reset.bind(this);
         this.handlesubmit=this.handlesubmit.bind(this);
         this.handlechange=this.handlechange.bind(this);
    }

    handlechange(e){
        this.setState( {text: e.target.value});
    }

 handlesubmit (e ){
    e.preventDefault();
    if(this.state.text.length === 0) return ;
     const  newItem ={
           text: this.state.text,
           id:Date.now()
     };
        this.setState(state=>({items:state.items.concat(newItem),text:'' }));}
           
        
        Reset(){
                this.setState({items:[],text:''})
            }
         
       

     
    render(){
        return(
        <div>
            <h1> ToDo_List </h1>

            <Todolist items={this.state.items} 
            reset={this.Reset} /> 

           <form onSubmit={this.handlesubmit}>
           <label>
                What you have to do Today!!
            </label>
          
            <br></br>
            <input 
            onChange={ this.handlechange}  value={this.state.text}/>
            <br></br>

            <button >Add {this.state.items.length+1} </button>

              <button onClick={this.Reset} >
               Finish
                 </button>
           </form>
           

        </div>)
    }

}
 export default App;