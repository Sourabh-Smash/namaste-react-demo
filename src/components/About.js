import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("parent-constructor");
  }

  componentDidMount() {
    // console.log("parent-componentDidMount");
  }
  render() {
    // console.log("parent-Render");
    return (
      <>
        <h1>About Us Page</h1>
        <p>Hello I am Sourabh Manawat</p>
        <UserContext.Consumer>
          {({ user }) => <span className="p-2 m-2 font-bold text-xl">{user.name}-{ user.email}</span>}
        </UserContext.Consumer>
        <Profile name="first-Class" />
        {/* <Profile name="second-Class" /> */}
      </>
    );
  }
}
export default About;
