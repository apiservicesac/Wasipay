import { UserRole } from '@/Auth/domain/enums';
import { TokenService } from '@/shared/services/token';
import React from 'react';


interface AuthorizationProps {
    children?: React.ReactNode;
    onlyAdmin?: boolean;
}

export const LoggedIn: React.FC<AuthorizationProps> = ({ children }) => {
    return <>{children}</>;
};

export const LoggedOut: React.FC<AuthorizationProps> = ({ children }) => {
    return <>{children}</>;
};

const Authorization: React.FC<AuthorizationProps> = ({ children, onlyAdmin=false }) => {
    const tokenService = new TokenService()
    const sessionToken = tokenService.getTokens();

    const isAdmin = onlyAdmin && !sessionToken.expired && sessionToken.decoded.role === UserRole.ADMIN;

    // Check for LoggedIn and LoggedOut components
    let childrenLoggedIn: React.ReactNode | undefined;
    let childrenLoggedOut: React.ReactNode | undefined;

    React.Children.forEach(children, (child) => {
        if (React.isValidElement(child)) {
            if (child.type === LoggedIn) {
                childrenLoggedIn = child.props.children;
            } else if (child.type === LoggedOut) {
                childrenLoggedOut = child.props.children;
            }
        }
    });

    if (isAdmin) {
        return <>{children}</>;
    }

    if (childrenLoggedIn !== undefined && childrenLoggedOut !== undefined) {
        return !sessionToken.expired ? <>{childrenLoggedIn}</> : <>{childrenLoggedOut}</>;
    }

    return null;
};

export default Authorization;
