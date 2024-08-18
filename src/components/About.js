import User from "./User";
import UserClass from "./UserClass";
const About=()=>
{
    return (
        <div>
            <h1>this is about</h1>
            {/* <User name={"Kaustubh sawant (function)"}/>  */}

            <UserClass name={"Kaustubh Sawant (class)"} Location={"Mumbai (Class)"}/>
        </div>
    )
}

export default About;
//the above example shows props passing in functional components as well as class based components