import React from "react";
import { MDBBadge } from "mdb-react-ui-kit";

const Conversation = () => {
  return (
      <div
        className="d-flex rounded border-bottom border-secondary-subtle p-2 overflow-auto align-items-center "
        role="button">
        <div className="d-inline-flex position-relative">
          <MDBBadge className="position-absolute top-0 start-100 translate-middle p-1  bg-danger border border-light rounded-circle">
            <span className="visually-hidden">New alerts</span>
          </MDBBadge>
          <img
            className="rounded-pill shadow-4"
            src="https://mdbootstrap.com/img/Photos/Avatars/man2.jpg"
            style={{ width: "40px", height: "40px" }}
            alt="avatar"
          />
        </div>
        <div className="d-flex w-100 ms-2 justify-content-between">
        <p className="fw-semibold text-white pt-2">John Doe</p>
          <span className="fs-3">😉</span>
        </div>
      </div>
  );
};

export default Conversation;
