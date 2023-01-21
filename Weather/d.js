import axios from "axios";  

function getuser(){
    axios.get("https://api.github.com/users",{
        auth: {
            username: "abdulquayyum-in",
            password: "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"
        }
    })
    .then((res)=>{
        console.log(res.data)
        console.log("Printed Successfully")
    }).catch((err)=>{
        console.log(err)
        console.log("ran into an error")
    })
}
getuser();