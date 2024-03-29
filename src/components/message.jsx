import React from "react";

const Messages = (prop) => {
  const { name, greetings, confirmation, insert_date } = prop;

  return (
    <div className="greeting-item mt-4">
      <div>
        <div className="d-flex justify-content-between">
          <div>
            <h6
              className="mb-0"
              style={{
                fontSize: "18px",
                fontFamily: "Josefin Sans, sans-serif",
              }}
            >
              {name}
            </h6>
            <p
              style={{
                fontWeight: "300",
                fontSize: "14px",
                fontFamily: "Josefin Sans, sans-serif",
              }}
            >
              {confirmation}
            </p>
          </div>
          <div className="align-self-start">
            <p
              style={{
                fontWeight: "300",
                fontSize: "14px",
                fontFamily: "Josefin Sans, sans-serif",
              }}
            >
              {insert_date}
            </p>
          </div>
        </div>
        <div
          className="text-greeting mt-2"
          style={{ fontFamily: "Josefin Sans, sans-serif" }}
        >
          <p>{greetings}</p>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default Messages;
