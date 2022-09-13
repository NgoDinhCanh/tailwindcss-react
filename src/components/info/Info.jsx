import React, { useEffect, useState } from "react";

const Info = () => {
  const [info, setInfo] = useState({
    firstName: "Ngo",
    lastName: "Canh",
  });
  useEffect(() => {
    console.log("form input");
  }, [info]);

  return (
    <div>
      <input
        type="text"
        name="firstName"
        value={info.firstName}
        onChange={(e) =>
          setInfo({
            ...info,
            firstName: e.target.value,
          })
        }
      />
    </div>
  );
};

export default Info;
