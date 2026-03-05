let browser = "Safari";

switch (browser){
    case "edge":
    case "chrome":
    case "Brave":
    case "Opera":
        console.log("Belongs to Chromium Project");
        break;
    
    case "Safari":
        console.log("Apple Browser!");
        break;
    
    case "Firefox":
        console.log("Mozilla Browser")
        break;
    default:
        console.log("Enter the valid Browser data to validate!")
}