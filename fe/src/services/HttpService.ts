export interface IHttpService {
    get<T>(url: string): Promise<T>;

    post<B, T>(url: string, body: B): Promise<T>;
}

const BASE_URL = 'http://localhost:8080';
const USER_ID = '1';

interface CallParams {
    body?: string;
    headers?: Record<string, string>;
}

class HttpService implements IHttpService {

    async get<T>(url: string): Promise<T> {
        return this.makeCall('GET', url);
    }

    async post<B, T>(url: string, body: B): Promise<T> {
        return this.makeCall('POST', url, {
            body: body && JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    private async makeCall<T>(method: string, url: string, params: CallParams = {}): Promise<T> {
        const fullUrl: string = `${BASE_URL}${url}`;
        const response = await fetch(fullUrl, {
            method,
            body: params.body,
            headers: {
                'User-Id': USER_ID,
                ...(params.headers || {}),
            },
        });

        return response.json();
    }
}

const httpService: IHttpService = new HttpService();

export const useHttpService = (): IHttpService => httpService;
