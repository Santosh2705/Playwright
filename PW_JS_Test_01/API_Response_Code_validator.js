/*
- 200 → "PASS - OK: Request successful"
- 201 → "PASS - Created: Resource created successfully"
- 301 → "WARNING - Moved Permanently: URL has changed"
- 400 → "FAIL - Bad Request: Check request payload"
- 401 → "FAIL - Unauthorized: Check auth token"
- 403 → "FAIL - Forbidden: Insufficient permissions"
- 404 → "FAIL - Not Found: Check endpoint URL"
- 500 → "FAIL - Internal Server Error: Backend issue"
- Any other → "UNKNOWN - Unhandled status code"
*/
let response_code = 201;

if (response_code == 200){
    console.log("PASS - OK: Request successful")
}
else if (response_code == 201){
    console.log("PASS - Created: Resource created successfully")
}
else if (response_code == 301){
    console.log("WARNING - Moved Permanently: URL has changed")
}
else if (response_code == 400){
    console.log("FAIL - Bad Request: Check request payload")
}
else if (response_code == 401){
    console.log("FAIL - Unauthorized: Check auth token")
}
else if (response_code == 403){
    console.log("FAIL - Forbidden: Insufficient permissions")
}
else if (response_code == 404){
    console.log("FAIL - Not Found: Check endpoint URL")
}
else if (response_code == 500){
    console.log("FAIL - Internal Server Error: Backend issue")
}
else{
    console.log("UNKNOWN - Unhandled status code")
}