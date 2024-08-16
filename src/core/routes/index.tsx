import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { authRoutes, authDashboardRoutes, publicRoutes } from './allRoutes';
import LayoutAuth from '@/common/layout_1';
import { AuthDashbaordProtected, AuthProtected } from './AuthProtected';

const RouteIndex = () => {
  return (
    <React.Fragment>
      <Routes>
        {publicRoutes.map((route: any, idx: number) => (
          <Route
            key={idx}
            path={route.path}
            element={
                <route.component />
            }
          />
      ))} 
      {authRoutes.map((route: any, idx: number) => (
        <Route
          key={idx}
          path={route.path}
          element={
            <AuthProtected>
                <route.component />
            </AuthProtected>      
          }
        />
      ))}
      {authDashboardRoutes.map((route: any, idx: number) => (
        <Route
          key={idx}
          path={route.path}
          element={
            <AuthDashbaordProtected>
              <LayoutAuth>
                <route.component />
              </LayoutAuth>
            </AuthDashbaordProtected>      
          }
        />
      ))}        
      </Routes>
    </React.Fragment>
  );
};

export default RouteIndex;
