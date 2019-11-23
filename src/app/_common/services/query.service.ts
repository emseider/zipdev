import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { API_KEY } from '../constants/endpoints';

@Injectable()
export class QueryService {

    constructor(private http: HttpClient) {
    }

    get(endpoit: string, params?: any): Promise<any> {
        return this.http.get(endpoit,
            {
                headers: new HttpHeaders().set('user-key', API_KEY),
                params
            }).toPromise();
    }
}
