import { useState } from "react";

function GreetuserFnctnCmpt() {

    //const [state, setState] = useState(initialState);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    //----event for handling firstName
    // const handleFirstName = (e) => { //instead of uing seperate function i wrote the arrow function inside the input tag
    //     setFirstName(e.target.value);
    // }

    return(
        <>
            <div style={{margin : "50% 0 20px "}}>
                <label htmlFor="firstName">firstName : </label>
                <input type="text"  id="firstName" name="firstName" onChange={e => setFirstName(e.target.value)} />
                {/* <input type="text"  id="firstName" name="firstName" onChange = {handleFirstName} /> */}
            </div>

            <div>
                <label htmlFor="lastName">lastName : </label>
                <input type="text" id="lastName" name="lastName" onChange={e => setLastName(e.target.value)} />
            </div>
            <br />
            <h1>User Name : {firstName} {lastName}</h1>
        </>
    )
}

export default GreetuserFnctnCmpt;