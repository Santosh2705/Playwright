// Real time examples of If, ELse If statements

let userloggedin = false;
let user_assigned = "Editor"

if (userloggedin){

    if (user_assigned === "Admin"){
        console.log ("Welcome User: You have access for all the roles ")
    }
    else if (user_assigned === "Editor"){
        console.log("Welcome User: You have access to Edit the content")
    }
    else if (user_assigned === "Viewer"){
        console.log ("Welcome User: You have access only to view the files")
    }
 
}

else{
    console.log ("Kindly login first to access")
}