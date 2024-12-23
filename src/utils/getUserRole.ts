import jwt_decode from "jwt-decode";
import Cookies from "universal-cookie";
const cookies = new Cookies();

interface Decoded {
  exp: number,
  iat: number,
  userEmail: string,
  userId: string,
  userRole: number,
}

// get cookie from browser if logged in
const token = cookies.get("TOKEN");

if(token) {
  const decoded:Decoded = jwt_decode(token);
  var userRole = decoded.userRole;
} else {
  var userRole = 2;
}