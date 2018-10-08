import React, { Component } from "react";
import './layout.css'

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
          string:''
        };
      }
      change=(e)=>{
          let str1=this.state.string;
          str1+=e.target.value;
          this.setState({
              string:str1
          })
      }

      clears=()=>{
        this.setState({
            string:''
        })
    }

      equals=()=>{
        let result = eval(this.state.string).toString();
        
        this.setState({
            string:result
        })
      }
    render() {
        return (
            <div>
                <div className="content-justify-center">
                    <h1>Calculator</h1>
                </div>

                <div className="d-inline-flex p-2 justify-content-center" style={{border:"solid",borderColor:"green"}}>
                    <form>
                        <div className="p-2 flex-row mt-1 ml-1 mr-1">
                            <input className="textView" value={this.state.string} readOnly/>
                        </div>
                        <div className="p-2 flex-row">
                            <input type="button" className="btn btn-primary ml-1 custom" value="clear" onClick={this.clears}/>
                            <input type="button" className="btn btn-primary ml-1" value="*" onClick={this.change}/>
                            <input type="button" className="btn btn-primary ml-1 mr-1" value="/" onClick={this.change}/>
                        </div>
                        <div className="p-2 flex-row">
                            <input type="button" className="btn btn-primary ml-1" value="7"  onClick={this.change}/>
                            <input type="button" className="btn btn-primary ml-1" value="8"  onClick={this.change}/>
                            <input type="button" className="btn btn-primary ml-1" value="9"  onClick={this.change}/>
                            <input type="button" className="btn btn-primary ml-1 mr-1" value="-" onClick={this.change}/>
                        </div>
                        <div className="p-2 flex-row">
                            <input type="button" className="btn btn-primary ml-1" value="4" onClick={this.change}/>
                            <input type="button" className="btn btn-primary ml-1" value="5" onClick={this.change}/>
                            <input type="button" className="btn btn-primary ml-1" value="6" onClick={this.change}/>
                            <input type="button" className="btn btn-primary ml-1 mr-1" value="+" onClick={this.change}/>
                        </div>
                        <div className="p-2 flex-row">
                            <input type="button" className="btn btn-primary ml-1" value="1" onClick={this.change}/>
                            <input type="button" className="btn btn-primary ml-1" value="2" onClick={this.change}/>
                            <input type="button" className="btn btn-primary ml-1" value="3" onClick={this.change}/>
                            <input type="button" className="btn btn-primary ml-1 mr-1" onClick={this.equals} value="="/>
                            
                        </div>
                        <div className="p-2 flex-col mb-2">
                          <input type="button" className="btn btn-primary ml-1 mr-1" value="0" onClick={this.change}/>
                          <input type="button" className="btn btn-primary ml-1 mr-1 custom2" value="." onClick={this.change}/>
                        </div>
                    </form>
                </div>
            </div >


        );
    }
}
export default Layout;

