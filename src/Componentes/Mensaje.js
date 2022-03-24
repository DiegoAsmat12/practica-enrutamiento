import React from "react";

const Mensaje = (props) =>{
    const {params} = props.match
    const verifyParam = () =>{
        if(!isNaN(+params.control)){
            return (<div style={params.backgroundColor? {backgroundColor:params.backgroundColor}:{}}>
                        <p style={params.color? {color:params.color}:{}}>The number is: {params.control}</p>
                    </div>);
        }
        else{
            return (<div style={params.backgroundColor? {backgroundColor:params.backgroundColor}:{}}>
                        <p style={params.color? {color:params.color}:{}}>The Word is: {params.control}</p>
                    </div>);
        }
    }
    return(
        <div>{ verifyParam()}</div>
    )


}



export default Mensaje;