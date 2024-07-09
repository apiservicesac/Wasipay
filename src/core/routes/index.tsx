import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { authRoutes, publicRoutes } from './allRoutes';
import LayoutAuth from '@/common/layout_1';
import AuthProtected from './AuthProtected';

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
              <LayoutAuth>
                <route.component />
              </LayoutAuth>
            </AuthProtected>      
          }
        />
      ))}        
      </Routes>
    </React.Fragment>
  );
};

export default RouteIndex;
