import React ,{ Component }from 'react';

class HighScore extends Component{
    render(){ 
       if(this.props.overTen){
           return(<div>
               <h3>hiii!!!</h3>
                  <button  onClick={this.props.OnReset}>
                    Reset 
                  </button>
                  </div>)
       }else { 
             return null;
             }

            }   
}
 export default HighScore;