import { Component } from "react";
export default class Customer extends Component {
  constructor(props) {
    super();
    this.fName = props.fName;
    this.lName = props.lName;
    this.street = props.street;
    this.date = new Date(props.date);
    this.pic = props.pic;
  }
  render() {
    return (
      <div>
        <h3>{this.fName}</h3>
        <h3>{this.lName}</h3>
        <h3>{this.street}</h3>
        <h3>{this.date.toString()}</h3>
        <img width="200" height="200" src={this.pic} alt="" />
      </div>
    );
  }
}
