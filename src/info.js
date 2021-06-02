import React from "react";

class Info extends React.Component {
  render() {
    const title = "This is my title";
    const showTitle = true;

    if (showTitle) {
      return (
        <div>
          <h1>{showTitle ? title : "No title"}</h1>
          <p>Manage your stuff</p>
        </div>
      );
    } else {
      return <p>Empty..</p>;
    }
  }
}

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
