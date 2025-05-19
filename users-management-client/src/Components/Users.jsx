import React from "react";
import { use } from "react";

const Users = ({ usersPromise }) => {
  const users = use(usersPromise);

  console.log(users);

  return (
    <div>

      <div>
        {users.map((user) => (
          <p key={user.id}>
            {user.name} : {user.email}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
