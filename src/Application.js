import React, { Component  } from 'react';
import HighScore from "./HighScore";
 import "./css/style.css";


class Application extends Component{

   constructor(props){
       super(props);

       this.state={
           count:0,
           overTen:false
       }
   }


   clickfunction = ()=>{
       this.setState({ count:this.state.count+1 });
   }

   Reset= (e) =>{
       console.log("Reset"+e);
       this.setState({count:0,overTen:false});
   }

   componentDidUpdate(props,state){
    console.log("Updated from",state,"to",this.state );
       if(this.state.count>10  &&  this.state.count!== state.count ){
           this.setState({overTen:true});
       }
      
   }

   render(){
       let {count}=this.state;
       return(
           <div>
               <h1>You have clicked the Button {count} Times.</h1>

                <HighScore overTen={this.state.overTen} OnReset={(e)=>this.Reset(e)}/>

               <button onClick={(e)=>this.clickfunction(e)}>Click Me</button>
           </div>
       )
   }


}
export default  Application;