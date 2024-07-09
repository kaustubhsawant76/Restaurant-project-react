import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

 








const AppLayout=()=>{
    return (
    <div className="app">
     <Header/>
     <Body/>
    </div>
    );
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);


//css can also be passed inline like eg <div style={}></div>  where {} sould be js object and it that you write css
//passing an argument to a function is called as a prop
//when you want to pass dynamically data to component yoy pass it as a prop
//config driven UI=the ui is driven by data ie config and the config comes from backend that is why we see different data in differrent locations
//whenever we use map function it is very necessary to use keys
//index should be not used as keys
//in worst case if there is no id then you can use index as keys as last option
//src folder is created to keep source code in it and keep components in seperate file
//use .js or .jsx extension while saving the file both are the same no difference