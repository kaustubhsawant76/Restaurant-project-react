import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";  //destructured
import UserContext from "../../utils/UserContext";

class About extends Component{
    constructor(props){
        super(props);
        // console.log("parent Constructor");
        
    }

    componentDidMount(){
        
        // console.log("parent Component did mount");
        
    }

    render(){
        // console.log("parent render");
        
        return (
            
            
            <div>
                <h1>This is about</h1>
                <div>
                <UserContext.Consumer>
                    {({loggedInUser})=> <h1 className="text-xl font-bold">{loggedInUser}</h1>}
                </UserContext.Consumer>
                    
                </div>
                {/* <User name={"Kaustubh sawant (function)"}/>  */}
    
                <UserClass name={"Kaustubh Sawant (class)"} Location={"Mumbai (Class)"}/>
            </div>
        )
    
    }
}



export default About;
//the above example shows props passing in functional components as well as class based components
//the below shows the sequence of execution of the class based componrnrt life  cycle
//1)parent Constructor 2)parent render 3)child constructor 4)child render 5)child component did mount 6)parent Component did mount