import React from "react";
import { Navigate } from "react-router-dom";
import { UseLocalContext } from "../context/UseLocalContext";
import { UserRole } from "@/Auth/domain/enums";

const AuthProtected: React.FC<any> = ({ children }) => {

  const { stateUser } = UseLocalContext();
  console.log(stateUser)
  const isLoggedIn = !!stateUser;
  const isAdmin = stateUser && stateUser.role === UserRole.ADMIN;

  if (!isLoggedIn && !isAdmin) {
    return <Navigate to={{ pathname: "/" }} />;  
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default AuthProtected;
