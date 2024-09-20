import React from "react";
import { TbLogout2 } from "react-icons/tb";
import useLogout from "../../hooks/useLogout";
const Logout = () => {
  const { loading, logout } = useLogout();
  return <>
   {!loading ? (
        <button className="btn mb-1 fs-3 text-white" onClick={logout} aria-label="Logout">
          <TbLogout2 />
        </button>
      ) : (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
  
</>
};
export default Logout;
