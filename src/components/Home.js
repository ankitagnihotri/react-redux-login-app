import React, { Component } from "react";
import ReactTable from "react-table";
import { connect } from "react-redux";
import "react-table/react-table.css";
import Data from "./../User.json";

class Home extends Component {
  handleLogout = () => {
    let url = window.location.href;
    let temp = url.split("/home");
    let loginUrl = temp[0] + "/login";
    window.open(loginUrl, "_top");
  };

  render() {
    const columns = [
      {
        Header: "ID",
        accessor: "id"
      },
      {
        Header: "Name",
        accessor: "name"
      },
      {
        Header: "Age",
        accessor: "age"
      },
      {
        Header: "Gender",
        accessor: "gender"
      },
      {
        Header: "Email",
        accessor: "email"
      },
      {
        Header: "Phone Number",
        accessor: "phoneNo"
      }
    ];

    return (
      <div>
        <div
          style={{ float: "right", marginRight: "60px", cursor: "pointer" }}
          onClick={this.handleLogout}
        >
          Logout
        </div>
        <div style={{ display: "block", marginTop: "40px", padding: "50px" }}>
          <ReactTable
            className="data-table"
            data={Data}
            pageSizeOptions={[5, 10, 20, 25, 50]}
            defaultPageSize={10}
            columns={columns}
            style={{ textAlign: "center" }}
          />
        </div>
      </div>
    );
  }
}

const mapStatetoProps = ({ Login }) => {
  const { loggedIn } = Login;
  return {
    loggedIn
  };
};

export default connect(
  mapStatetoProps,
  {}
)(Home);

// export default Home;
