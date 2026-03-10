/*
Classification Matrix:
- always + blocker → P0 | always + major → P1 | always + minor → P2
- often + blocker → P1 | often + major → P2 | often + minor → P3
- rarely + blocker → P2 | rarely + major → P3 | rarely + minor → P4
*/

let frequency = "rarely";
let severity = "blocker";

if (frequency == "always"){
    if (severity == "blocker"){
        console.log("P0")
    }
    else if(severity == "major") {
        console.log("P1")

    }else if(severity == "minor"){
        console.log("P2")
    }
    else{
        console.log("Not a Bug")
    }
}

if (frequency == "often"){
    if (severity == "blocker"){
        console.log("P1")
    }
    else if(severity == "major") {
        console.log("P2")

    }else if(severity == "minor"){
        console.log("P3")
    }
    else{
        console.log("Not a Bug")
    }
}

if (frequency == "rarely"){
    if (severity == "blocker"){
        console.log("P2")
    }
    else if(severity == "major") {
        console.log("P3")

    }else if(severity == "minor"){
        console.log("P4")
    }
    else{
        console.log("Not a Bug")
    }
}