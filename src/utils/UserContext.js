import { createContext } from "react";

const UserContext = createContext({
  user: { name: "Sourabh Manawat", email: "sourabhmanawat@gmail.com" },
});
export default UserContext;