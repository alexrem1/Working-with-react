import React from "react";

class Info extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const showTitle = true;

    if (showTitle) {
      return (
        <div>
          <p>{this.props.number}</p>
          <h1>{showTitle ? this.props.title : "No title"}</h1>
          <p>Manage your stuff</p>
        </div>
      );
    } else {
      return <p>Empty..</p>;
    }
  }
}

Info.defaultProps = {
  title: "default",
  number: 5,
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
