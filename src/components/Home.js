import React, { Component } from "react";
import { withRouter } from "react-router";
import ReactTable from "react-table";
import "react-table/react-table.css";
import Data from "./../User.json";

class Home extends Component {
  handleLogout = e => {
    this.props.history.replace("/login");
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
          onClick={e => this.handleLogout(e)}
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

export default withRouter(Home);
