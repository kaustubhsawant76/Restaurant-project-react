import React, { lazy,Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
//import About from "./components/About";
//import Contact from "./components/Contact";
import Error from "./components/Error";
//import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
//import Grocery from "./components/Grocery";
import UserContext from "../utils/UserContext";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

const Cart=lazy(()=>import("./components/Cart"))
const Grocery=lazy(()=>import("./components/Grocery"))
const Contact=lazy(()=>import("./components/Contact"))
const About=lazy(()=>import("./components/About"))
const RestaurantMenu=lazy(()=>import("./components/RestaurantMenu"))

//code-splitting
//chunking
//dynamic bundling
//lazy loading
//on demand loading
//all are same means dividing one bundle into many bundles 
//reduced website loading time from 50ms to 10ms using code splitting

const AppLayout = () => {
  const[userName,setUserName]=useState();

  //Authentication
  useEffect(()=>{
    const data={
      name:"Kaustubh Sawant",
    };
    setUserName(data.name);

  },[]);
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
    <div className="app">
      <Header />
      <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
  {
    path:"/about",
    element:<Suspense fallback={<h1>Loading .......</h1>}><About/></Suspense> 
  },
  {
    path:"/contact",
    element:<Suspense fallback={<h1>Loading .......</h1>}><Contact/></Suspense> 
  }, 
  {
    path:"/grocery",
    element:<Suspense fallback={<h1>Loading .......</h1>}><Grocery/></Suspense> //fallback is what should be rendered before loadimg suspense component
  },
  {
    path:"/cart",
    element:<Suspense fallback={<h1>Loading .......</h1>}><Cart/></Suspense> //fallback is what should be rendered before loadimg suspense component
  },
{
  path:"/restaurants/:resId",
  element:<Suspense fallback={<h1>Loading .......</h1>}><RestaurantMenu/></Suspense> 
}],
errorElement:<Error/>,}
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

//css can also be passed inline like eg <div style={}></div>  where {} sould be js object and it that you write css
//passing an argument to a function is called as a prop
//when you want to pass dynamically data to component yoy pass it as a prop
//config driven UI=the ui is driven by data ie config and the config comes from backend that is why we see different data in differrent locations
//whenever we use map function it is very necessary to use keys
//index should be not used as keys
//in worst case if there is no id then you can use index as keys as last option
//src folder is created to keep source code in it and keep components in seperate file
//use .js or .jsx extension while saving the file both are the same no difference
// createBrowserRouter is used to create routing configuration
// RouterProvider is used for rendering by giving path to it 
// both createBrowserRouter and RouterProvider are imported from react-router-dom
//rafce is shortcut for export level functions  in vs code
//by default router has error page after entering wrong url address
//but we can add new error page by errorElement 
//useRouteError is a hook which cathches specific data of error in the form of object
//it is declared in normal variable
//inorder to keep header intact we can use child routes create it in root element
//react-router-dom gives us Outlet for calling chilren routes as component 
//and according to children routes url the component is called
//link component imported from dom is used in place of anchor tag 
//link doesnot refreshes the whole page but only specific compoenent
//that is why it is known as SPA[single page application]
//there are two types of routing 1)server side routing=which is used in old apps eg about.html gets called and the entire website is reloaded
//2)client side rendering-spa applications,page doesnot reloads only coponent is reloaded
//Higher order component is a function which takes a component and returns a component
//context api is used to avoid prop drilling
//prop drilling means sending props to nested components at many levels
//instead we can use context api to create a centralized object and use whereever we want
//it casn be used in functional components with the help of useContext hook
//in class based components it can be used with the help of consumer component
//it can be also used in functional components with provider component
//provider can be wrapped with many components and we can provide different context for them
//redux is not mandatory
//redux is used in large scale apps and contexp api is used in small scale apps
