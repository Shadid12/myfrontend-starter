import React from "react";
import ReactDOM from "react-dom";

export default class App extends React.Component {
  render() {
    return(
      <div>Hello worlds!!!</div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("app"));