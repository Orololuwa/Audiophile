import React from "react";
import { Title } from "./styled";
import Dashboard from "containers/dashboard";
import Table from "containers/table";
import Badge from "components/badge";
import Button from "components/Button";
import { IoEllipsisVertical } from "react-icons/io5";
import { currencyFormatter, getStatusColor } from "utilities";
import withAuth from "HOC/withAuth";

const columns = [
  {
    name: "Customer's Name",
    selector: (row) => row.name,
  },
  {
    name: "Status",
    cell: (row) => (
      <Badge colorScheme={getStatusColor(row.status)}>{row.status}</Badge>
    ),
  },
  {
    name: "Savings Amount (₦)",
    selector: (row) => row.savings,
    format: (row) => currencyFormatter(row.savings),
  },
  {
    name: "",
    cell: (row, index, column, id) => (
      <Button variant="outline" onClick={() => console.log(row.id)}>
        View More Details
      </Button>
    ),
  },
  {
    name: "",
    cell: (row, index, column, id) => (
      <Button onClick={() => console.log(row.id)}>View Analysis</Button>
    ),
  },
  {
    name: "",
    cell: (row, index, column, id) => (
      <Button variant="ghost" onClick={() => console.log(row.id)}>
        <IoEllipsisVertical size={20} />
      </Button>
    ),
    maxWidth: "fit-content",
  },
];

const Home = (props) => {
  const { data } = props;
  return (
    <div style={{ background: "#000", paddingTop: "5rem" }}>
      <Title>
        <h3>Dashboard</h3>
        <p>Good Morning, Administrator X</p>
      </Title>
    </div>
  );
};

export default withAuth(Home);
