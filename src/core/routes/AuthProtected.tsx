import React from "react";
import { Navigate } from "react-router-dom";
import { UseLocalContext } from "../context/UseLocalContext";
import { UserRole } from "@/features/user/domain/enums";

const AuthDashbaordProtected: React.FC<any> = ({ children }) => {

  const { stateUser } = UseLocalContext();  

  if (stateUser && stateUser.role === UserRole.ADMIN) {
    return <React.Fragment>{children}</React.Fragment>;
  }

  return <Navigate to={{ pathname: "/" }} />;
};

const AuthProtected: React.FC<any> = ({ children }) => {

  const { stateUser } = UseLocalContext();  
  if (stateUser && stateUser.role === UserRole.USER || stateUser && stateUser.role === UserRole.ADMIN) {
    return <React.Fragment>{children}</React.Fragment>;
  }

  return <Navigate to={{ pathname: "/login" }} />;
};

export {
  AuthProtected,
  AuthDashbaordProtected
};
