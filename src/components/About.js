import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent-constructor");
  }

  componentDidMount() {
    console.log("parent-componentDidMount");
  }
  render() {
    console.log("parent-Render");
    return (
      <>
        <h1>About Us Page</h1>
        <p>Hello I am Sourabh Manawat</p>
        <Profile name="first-Class" />
        {/* <Profile name="second-Class" /> */}
      </>
    );
  }
}
export default About;
