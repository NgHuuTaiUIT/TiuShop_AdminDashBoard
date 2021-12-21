import React from "react";
import Table from "../../components/Table/Table";
import customerList from "../../assets/JsonData/customers-list.json";
import styles from "./Customer.module.css";

const customerTableHeader = [
  "",
  "name",
  "email",
  "phone",
  "total orders",
  "total spend",
  "location"
];

const renderHead = (item, index) => <th key={index}>{item}</th>;
const renderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.email}</td>
    <td>{item.phone}</td>
    <td>{item.total_orders}</td>
    <td>{item.total_spend}</td>
    <td>{item.location}</td>
  </tr>
);

function Customers() {
  return (
    <div>
      <h1 className="page-header">customers</h1>
      <div className="row">
        <div className="col-12">
          <div className={`card ${styles.card}`}>
            <div className="card__body">
              <Table
                limit="10"
                headData={customerTableHeader}
                renderHead={(item, index) => renderHead(item, index)}
                bodyData={customerList}
                renderBody={(item, index) => renderBody(item, index)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customers;
