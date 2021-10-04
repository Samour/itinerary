export interface IHttpService {
    get<T>(url: string): Promise<T>;
}

const BASE_URL = 'http://localhost:8080';
const USER_ID = '1';

class HttpService implements IHttpService {

    async get<T>(url: string): Promise<T> {
        return this.makeCall(url);
    }

    private async makeCall<T>(url: string): Promise<T> {
        const fullUrl: string = `${BASE_URL}${url}`;
        const response = await fetch(fullUrl, {
            headers: {
                'User-Id': USER_ID,
            },
        });

        return response.json();
    }
}

const httpService: IHttpService = new HttpService();

export const useHttpService = (): IHttpService => httpService;
