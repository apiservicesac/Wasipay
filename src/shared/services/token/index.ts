import jwt from 'jsonwebtoken';

export class TokenService {
    private readonly secretKey: string;
    private readonly accessTokenKey: string = 'accessToken';
    private readonly refreshTokenKey: string = 'refreshToken';

    constructor() {
        this.secretKey = process.env.VITE_JWT_SECRET_KEY || 'jwt_secret_key';

    }

    private verifyToken(token: string): { expired: boolean, decoded: any | null } {
        try {
        const decoded = jwt.verify(token, this.secretKey, { algorithms: ['HS256'] }) as { [key: string]: any };
        const { role, type } = decoded;
        return { expired: false, decoded: { role, type } };
        } catch (error) {
        return { expired: true, decoded: null };
        }
    }

    public setTokens(accessToken: string, refreshToken: string): void {
        localStorage.setItem(this.accessTokenKey, accessToken);
        localStorage.setItem(this.refreshTokenKey, refreshToken);
    }

    private getAccessToken(): { expired: boolean, decoded: any | null } {
        const accessToken = localStorage.getItem(this.accessTokenKey);
        if (!accessToken) {
        return { expired: true, decoded: null };
        }
        return this.verifyToken(accessToken);
    }

    private getRefreshToken(): { expired: boolean, decoded: any | null } {
        const refreshToken = localStorage.getItem(this.refreshTokenKey);
        if (!refreshToken) {
        return { expired: true, decoded: null };
        }
        return this.verifyToken(refreshToken);
    }

    public updateAccessTokens(newAccessToken: string, newRefreshToken: string): void {
        localStorage.setItem(this.accessTokenKey, newAccessToken);
        localStorage.setItem(this.refreshTokenKey, newRefreshToken);

    }

    public removeTokens(): void {
        localStorage.removeItem(this.accessTokenKey);
        localStorage.removeItem(this.refreshTokenKey);
    }

    public getTokens(): { expired: boolean, decoded: any | null } {
        const accessTokenStatus = this.getAccessToken();
        if (!accessTokenStatus.expired) {
        return accessTokenStatus;
        }

        const refreshTokenStatus = this.getRefreshToken();
        if (!refreshTokenStatus.expired) {
        return refreshTokenStatus;
        }

        return { expired: true, decoded: null };
    }
}