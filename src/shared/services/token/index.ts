import { jwtDecode } from "jwt-decode";

interface DecodedToken {
    exp: number;
    [key: string]: any;
}

export class TokenService {
    private readonly accessTokenKey: string = 'accessToken';
    private readonly refreshTokenKey: string = 'refreshToken';

    async verifyToken(token: string): Promise<{ expired: boolean, decoded: any | null }> {
        try {
            const decodedToken = jwtDecode<DecodedToken>(token);
            const currentTime = Date.now() / 1000;
            if (decodedToken.exp < currentTime) {
                return { expired: true, decoded: null };
            }
            return { expired: false, decoded: decodedToken };
        } catch (error) {
            return { expired: true, decoded: null };
        }
    }

    public setTokens(accessToken: string, refreshToken: string): void {
        localStorage.setItem(this.accessTokenKey, accessToken);
        localStorage.setItem(this.refreshTokenKey, refreshToken);
    }

    public getAccessToken(): string | null{
        const accessToken = localStorage.getItem(this.accessTokenKey);
        if (!accessToken) {
            return null
        }
        return accessToken
    }

    public getRefreshToken(): string | null {
        const refreshToken = localStorage.getItem(this.refreshTokenKey);
        if (!refreshToken) {
            return null
        }
        return refreshToken
    }

    public updateAccessTokens(newAccessToken: string, newRefreshToken: string): void {
        localStorage.setItem(this.accessTokenKey, newAccessToken);
        localStorage.setItem(this.refreshTokenKey, newRefreshToken);

    }

    public removeTokens(): void {
        localStorage.removeItem(this.accessTokenKey);
        localStorage.removeItem(this.refreshTokenKey);
    }

    public async checkAccessToken(): Promise<{ expired: boolean, decoded: any | null }> {
        const accessTokenStatus = await this.verifyToken(this.getAccessToken()!);
        if (accessTokenStatus.expired) {
            return { expired: true, decoded: null };
        }
        return accessTokenStatus;
    }

    public async checkTokens(): Promise<{ expired: boolean, decoded: any | null }> {
        const accessTokenStatus = await this.verifyToken(this.getAccessToken()!);
        const refreshTokenStatus = await this.verifyToken(this.getRefreshToken()!);

        if (accessTokenStatus.expired && refreshTokenStatus.expired) {
            return { expired: true, decoded: null };
        }

        return accessTokenStatus;
    }
}