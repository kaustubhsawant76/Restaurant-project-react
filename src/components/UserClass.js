import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log("child constructor");
        
        this.state={
            count:0,
            count2:1,
        };
        
    }

    componentDidMount(){
        console.log("child component did mount");
        
    }
    render(){
        console.log("child render");
        
       const {name,Location}=this.props;
       const {count}=this.state;
        return(
            <div className="user-card">
            <h1>Count:{count}</h1>
            <button 
            onClick={()=>{
                //never update state variables directly
                this.setState({
                    count:this.state.count + 1,
                });
            }}
            >Count Increase</button>
            {/* <h1>Count2:{count2}</h1> */}
                <h2>Name:{name}</h2>
                <h3>Location:{Location}</h3>
                <h4>Contact:kaustubhsawant603@gmail.com</h4>
            </div>
        )
    }
}


export default UserClass;