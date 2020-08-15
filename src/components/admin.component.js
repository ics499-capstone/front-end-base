import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AdminService from "../services/admin.service";

const required = value => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };

// Adding a service
export default class AdminAddService extends Component {
    constructor(props) {
      super(props);
      this.handle = this.handle.bind(this);
      this.onChangeName = this.onChangeName.bind(this);
      this.onChangeDescription = this.onChangeDescription.bind(this);
      this.onChangePrice = this.onChangePrice.bind(this);
  
      this.state = {
        name: "",
        description: "",
        price: false
      };
    }
  
    onChangeName(e) {
      this.setState({
        name: e.target.value
      });
    }
  
    onChangeDescription(e) {
      this.setState({
        description: e.target.value
      });
    }

    onChangePrice(e) {
        this.setState({
          price: e.target.value
        });
      }
  
  
    handle(e) {
      e.preventDefault();
  
      this.setState({
        message: "",
        loading: true
      });
  
      this.form.validateAll();
  
      if (this.checkBtn.context._errors.length === 0) {
        AdminService.addservice(
            this.state.username, 
            this.state.password).then(
          () => {
            this.props.history.push("/profile");
            window.location.reload();
          },
          error => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
  
            this.setState({
              loading: false,
              message: resMessage
            });
          }
        );
      } else {
        this.setState({
          loading: false
        });
      }
    }
  
    render() {
      return (
        <div className="col-md-12">
          <div className="card card-container">
  
            <Form
              onSubmit={this.handle}
              ref={c => {
                this.form = c;
              }}
            >
              <div className="form-group">
                <label htmlFor="name">name</label>
                <Input
                  type="text"
                  className="form-control"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChangeName}
                  validations={[required]}
                />
              </div>
  
              <div className="form-group">
                <label htmlFor="description">description</label>
                <Input
                  type="description"
                  className="form-control"
                  name="description"
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                  validations={[required]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="price">price</label>
                <Input
                    type="price"
                    className="form-control"
                    name="price"
                    value={this.state.price}
                    onChange={this.onChangePrice}
                    validations={[required]}
                />
            </div>
  
              <div className="form-group">
                <button
                  className="btn btn-primary btn-block"
                  disabled={this.state.loading}
                >
                  {this.state.loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Submit</span>
                </button>
              </div>

              <CheckButton
                style={{ display: "none" }}
                ref={c => {
                  this.checkBtn = c;
                }}
              />
            </Form>
          </div>
        </div>
      );
    }
  }