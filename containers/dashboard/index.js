import Col from "components/col";
import Row from "components/row";
import { DashboardWidget } from "components/widgets";
import { BiUserCircle, BiCheckCircle, BiTime, BiXCircle } from "react-icons/bi";
import { BsExclamationCircle } from "react-icons/bs";

const Dashboard = () => {
  return (
    <Row
      justifyContent="flex-start"
      alignItems="flex-start"
      style={{ padding: "2.5rem 0" }}
      gap="2rem"
      wrap
    >
      <Col gap="1rem" alignItems="center" flexBasis={["100%", "inherit"]}>
        <DashboardWidget Icon={<BiUserCircle size={25} />} />
        <DashboardWidget Icon={<BiUserCircle size={25} />} />
        <DashboardWidget Icon={<BiUserCircle size={25} />} />
        <DashboardWidget Icon={<BiUserCircle size={25} />} />
      </Col>
      <Col gap="1rem" alignItems="center" flexBasis={["100%", "inherit"]}>
        <DashboardWidget Icon={<BiCheckCircle size={25} />} />
        <DashboardWidget Icon={<BiCheckCircle size={25} />} />
        <DashboardWidget Icon={<BiCheckCircle size={25} />} />
        <DashboardWidget Icon={<BiCheckCircle size={25} />} />
      </Col>
      <Col gap="1rem" alignItems="center" flexBasis={["100%", "inherit"]}>
        <DashboardWidget Icon={<BiTime size={25} />} />
        <DashboardWidget Icon={<BiTime size={25} />} />
        <DashboardWidget Icon={<BiTime size={25} />} />
        <DashboardWidget Icon={<BiTime size={25} />} />
      </Col>
      <Col gap="1rem" alignItems="center" flexBasis={["100%", "inherit"]}>
        <DashboardWidget Icon={<BiXCircle size={25} />} />
        <DashboardWidget Icon={<BiXCircle size={25} />} />
        <DashboardWidget Icon={<BiXCircle size={25} />} />
      </Col>
      <Col gap="1rem" alignItems="center" flexBasis={["100%", "inherit"]}>
        <DashboardWidget Icon={<BsExclamationCircle size={25} />} />
        <DashboardWidget Icon={<BsExclamationCircle size={25} />} />
        <DashboardWidget Icon={<BsExclamationCircle size={25} />} />
      </Col>
    </Row>
  );
};

export default Dashboard;
