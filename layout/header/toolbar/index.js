import { useState } from "react";
import { useDispatch } from "react-redux";
import Flex from "components/flex";
import {
  IoSearchOutline,
  IoNotificationsOutline,
  IoChevronDownOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import { Initials } from "./styled";
import { logOut } from "redux/Auth/actionCreator";

const ToolBar = (props) => {
  const dispatch = useDispatch();

  const [logOutShow, setLogOutShow] = useState(false);
  const showLogOutHandler = () => {
    setLogOutShow((prev) => !prev);
  };

  const handleLogOut = async () => {
    dispatch(logOut());
  };

  return (
    <Flex
      direction="row"
      alignItems="center"
      justifyContent="center"
      gap="7.5px"
      {...props}
    >
      <IoSearchOutline size="20" />
      <IoNotificationsOutline size="20" />
      <Initials>A</Initials>
      {!logOutShow && <span>Administrator x</span>}
      {logOutShow && (
        <Flex style={{ cursor: "pointer" }} onClick={handleLogOut} gap="2.5px">
          <IoLogOutOutline size={20} />
          <span>Sign Out</span>
        </Flex>
      )}
      <IoChevronDownOutline
        onClick={showLogOutHandler}
        style={{
          transform: `${logOutShow ? "rotate(180deg)" : "rotate(0)"}`,
          transition: "all .2s",
          cursor: "pointer",
        }}
      />
    </Flex>
  );
};

export default ToolBar;
