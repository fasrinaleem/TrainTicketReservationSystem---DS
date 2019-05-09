import React, { Component } from "react";

import visalogo from "../resources/visalogo.png";
import masterlogo from "../resources/masterlogo.png";
import { SOURCE, DESTINATION, NOOFTICKETS } from "./TicketBooking";

class PaymentMethod extends Component {
  // handleSubmit = e => {
  //   e.preventDefault();

  //   console.log(`Form submitted:`);

  //   // this.setState({
  //   //   method: this.state.value
  //   // });

  //   if (e.target.id === "creditcard") {
  //     // alert(e.target.id);
  //     this.props.history.push(`/book/step4`);
  //   } else this.props.history.push(`/book/step5`);
  //   // } else {
  //   //   alert(e.target.id);
  //   // }
  // };

  constructor(props) {
    super(props);
    this.state = {
      method: "",
      source: "",
      destination: "",
      nooftickets: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({ source: sessionStorage.getItem(SOURCE) });
    this.setState({ destination: sessionStorage.getItem(DESTINATION) });
    this.setState({ nooftickets: sessionStorage.getItem(NOOFTICKETS) });
  }

  handleChange(e) {
    this.setState({
      method: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    let method = this.state.method;

    if (method === "creditcard") {
      this.props.history.push(`/book/step4`);
    } else if (method === "mobile") {
      this.props.history.push(`/book/step5`);
    }
  }

  render() {
    return (
      <div style={{ backgroundColor: "#D3D3D3" }}>
        <div className="container" style={{ marginTop: 0 }}>
          <center>
            <div className="card" style={{ width: 600 }}>
              <h5
                className="card-header info-color white-text text-center py-4"
                style={{ backgroundColor: " #0000FF " }}
              >
                <strong style={{ color: "white" }}>
                  {" "}
                  <h5>Your Details</h5>
                  <h6>
                    {" "}
                    Source :{" "}
                    <input
                      type="text"
                      value={this.state.source}
                      readOnly
                      style={{ backgroundColor: "#80aaff" }}
                    />{" "}
                  </h6>
                  <h6>
                    {" "}
                    Destination :{" "}
                    <input
                      type="text"
                      value={this.state.destination}
                      readOnly
                      style={{ backgroundColor: "#80aaff" }}
                    />
                  </h6>
                  <h6>
                    {" "}
                    No of tickets :{" "}
                    <input
                      type="text"
                      value={this.state.nooftickets}
                      readOnly
                      style={{ backgroundColor: "#80aaff" }}
                    />
                  </h6>{" "}
                  <h6>
                    {" "}
                    Your Total Bill :{" "}
                    <input
                      type="text"
                      value={this.state.nooftickets * 10}
                      readOnly
                      style={{ backgroundColor: "#80aaff" }}
                    />
                  </h6>
                  Select the Payment Method
                  <br />
                </strong>
              </h5>

              <div className="card-body px-lg-5">
                <form
                  className="text-center"
                  style={{ color: "#757575" }}
                  onSubmit={this.handleSubmit}
                >
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="creditcard"
                      name="method"
                      value="creditcard"
                      onChange={this.handleChange}
                    />
                    <label className="custom-control-label" for="creditcard">
                      Credit Card
                      <div>
                        <img src={visalogo} width="50" height="20" alt="" />
                        <img src={masterlogo} width="50" height="22" alt="" />
                      </div>
                    </label>
                  </div>
                  <div className="custom-radio">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="mobilenum"
                      name="method"
                      value="mobile"
                      //  onClick={this.handleSubmit}
                      onChange={this.handleChange}
                    />
                    <label className="custom-control-label" for="mobilenum">
                      Mobile Number (Payment will added to the mobile bill)
                    </label>
                  </div>
                  <button
                    className="btn btn-outline-primary btn-rounded btn-block z-depth-0 my-4 waves-effect"
                    type="submit"
                  >
                    NEXT
                  </button>
                </form>
              </div>
            </div>
          </center>
        </div>
      </div>
    );
  }
}

export default PaymentMethod;
