import React from "react";
import { PropTypes } from "prop-types";

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      title: "Hello",
    };
    // this.buttonPressed = this.buttonPressed.bind(this);
  }

  buttonPressed() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count} </p>
        <button onClick={() => this.buttonPressed()}>Click Me!</button>
      </div>
    );
  }
}

Info.defaultProps = {
  title: "default",
  number: 5,
};

Info.propTypes = {
  title: PropTypes.string,
};

// Functional into class based component. React recommend functional components unless the project has a lot of state then use class components

// function Info() {
//     const title = "This is my title";
//     const showTitle = true;

//     if (showTitle) {
//       return (
//         <div>
//           <h1>{showTitle ? title : "No title"}</h1>
//           <p>Manage your stuff</p>
//         </div>
//       );
//     } else {
//       return <p>Empty..</p>;
//     }
//   }

export default Info;
