import React from "react";
import { Navigate } from "react-router-dom";
import { UseLocalContext } from "../context/UseLocalContext";
import { UserRole } from "@/Auth/domain/enums";

const AuthProtected: React.FC<any> = ({ children }) => {

  const { stateUser } = UseLocalContext();  
  const isAdmin = stateUser && stateUser.role === UserRole.ADMIN;

  if (isAdmin) {
    return <React.Fragment>{children}</React.Fragment>;
  }

  return <Navigate to={{ pathname: "/" }} />;
};

export default AuthProtected;
