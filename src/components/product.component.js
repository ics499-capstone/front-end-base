import React, { Component } from "react";
import axios from "axios";

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signUpForm: [],
      error: "",
    };
  }

  componentWillMount() {
    axios
      // .get("https://jsonplaceholder.typicode.com/posts")
      .get("http://localhost:5000/api/data/product", 
      {
          // no payload required
      })

      .then((response) => {
        console.log(response);
        this.setState({ signUpForm: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          errorMsg: "Registration is not available, Please try again",
        });
      });
  }

  render() {
    const { signUpForm, errorMsg } = this.state;
    return (
      <div style={{ display: "flex", justifyContent: "center", padding: 30 }}>
        <div>
          <h2>Product Page</h2>
          {signUpForm.length
            ? signUpForm.map((currentSignUpform) => (
                <div key={currentSignUpform.id}>{currentSignUpform.title}</div>
              ))
            : null}
          {errorMsg ? <div>{errorMsg} </div> : null}
        </div>
      </div>
    );
  }
}

export default Products;
