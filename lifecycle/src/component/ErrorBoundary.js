import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
      error: null,
    };
  }
  static getDerivedStateFromError(error) {
    console.log("error", error);
    console.log("TypeOfError", typeof error);
    //return the  state
    return {
      hasError: true,
      error, // same as error : error
    };
  }
  componentDidCatch(error, errorinfo) {
    console.log("error in componentDIdCatch", error);
    console.log("errorinfo in componentDIdCatch", errorinfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>ErrorBoundary</div>;
    }
    return this.props.children;
  }
}
