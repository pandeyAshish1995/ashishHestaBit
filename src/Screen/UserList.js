import React from "react";
/* component */
import UserCard from "./UserCard";
import { LoaderComponent } from "./Components";
/* theme */
import { userListTheme as theme } from "../theme/userComponentTheme";

const UserList = props => {
  const { data = [], loading, loadMore } = props;

  return (
    <>
      <div style={theme?.containerStyle}>
        {data.map((value, index) => {
          return <UserCard value={value} key={value?.id || index} />;
        })}
      </div>
      <LoaderComponent loadMore={loadMore} loading={loading} />
    </>
  );
};

export default UserList;
