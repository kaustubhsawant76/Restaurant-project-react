import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
         console.log("constructor");
        
        this.state={
            userInfo:{
                name:"default",
                location:"default",
                avatar_url:"demo",
            }
        };
        
    }

    async componentDidMount(){
         console.log("component did mount");
        //this is used to make API call just like useEffect hook in functional component
  const data=await fetch("https://api.github.com/users/kaustubhsawant76");
  const json=await data.json();
  console.log(json);
  this.setState({
    userInfo:json,
  })
        
    }

    componentDidUpdate(){
        console.log("componrnt updated");
        
    }

    componentWillUnmount(){
        console.log("component unmounted");
        
    }
        
    render(){
        console.log("render");
        
       const {name,location,avatar_url}=this.state.userInfo;
    //    const {count}=this.state;
        return(
            <div className="user-card">
            {/* <h1>Count:{count}</h1>
            <button 
            onClick={()=>{
                //never update state variables directly
                this.setState({
                    count:this.state.count + 1,
                });
            }}
            >Count Increase</button> */}
            {/* <h1>Count2:{count2}</h1> */}
                <h2>Name:{name}</h2>
                <h3>Location:{location}</h3>
                <h4>Image: <img className="profileimg" src={avatar_url}/> </h4>
                <h4>Contact:kaustubhsawant603@gmail.com</h4>
            </div>
        )
    }
}


export default UserClass;

//Component life cycle is as follows:-
//1)constructor called
//2)render is called by default values
//3)component did mount
//4)render is called again ie rerender with updated values
//5)component did update
//6)componentwillunmount is called when you go to another componenet by clicking on it