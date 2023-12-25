import { Component } from "react";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        id: "",
        location: "",
        avatar_url: "",
      },
    };
    console.log("Child-constructor-" + this.props.name);
  }
  async componentDidMount() {
      console.log("child-componentDidMount-" + this.props.name);
  }
    componentDidUpdate() {
        console.log("ComponentDidUpdate");
    }
    componentWillUnmount() {
        console.log("ComponentWillUnmount");  
    }
  render() {
    console.log("child-render-" + this.props.name);
    return (
      <div>
        <h1>hello</h1>
        <h2>{this.state.userInfo.name}</h2>
        <h2>{this.state.userInfo.id}</h2>
        <img src={this.state.userInfo.avatar_url} alt="" />
        <h2>{this.state.userInfo.location}</h2>
      </div>
    );
  }
}
export default Profile;
