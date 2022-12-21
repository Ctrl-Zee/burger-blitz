import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface ApiParameter {
  key: string;
  value: any;
}

const apiRoot = environment.apiRoot;

@Injectable()
export class ApiService {
  constructor(protected httpClient: HttpClient) {}

  private buildHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      Accept: 'application/json',
      apiKey:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxcW5wZW1tbmZ6enp2eGNsbWNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE1NDY4ODMsImV4cCI6MTk4NzEyMjg4M30.c0ptceUO0XpW89Sq4JwiAcoqq2fS2A8suAsYK4h1iMA',
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxcW5wZW1tbmZ6enp2eGNsbWNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE1NDY4ODMsImV4cCI6MTk4NzEyMjg4M30.c0ptceUO0XpW89Sq4JwiAcoqq2fS2A8suAsYK4h1iMA`,
    });
    return headers;
  }

  private buildParams(values?: Array<ApiParameter>): HttpParams {
    let params = new HttpParams();
    if (values) {
      values.forEach((val) => {
        const isUndefined = typeof val.value === 'undefined';
        const hasValue = val.value !== null;
        const isNan = typeof val.value === 'number' && isNaN(val.value);
        if (!isUndefined && hasValue && !isNan) {
          params = params.append(val.key, val.value);
        }
      });
    }
    return params;
  }

  /**
   * Make a HTTP PUT call to an API
   * @param {string} url
   * @param {T} send Generic parameter
   * @param {Array<ApiParameter>} params Optional
   * @returns An Observable of type TReceive
   */
  doPut<TSend, TReceive>(
    url: string,
    send: TSend,
    params?: Array<ApiParameter>
  ): Observable<TReceive> {
    url = apiRoot + url;
    if (params) {
      return this.httpClient.put<TReceive>(url, send, {
        headers: this.buildHeaders(),
        params: this.buildParams(params),
      });
    } else {
      return this.httpClient.put<TReceive>(url, send, {
        headers: this.buildHeaders(),
      });
    }
  }

  /**
   * Make a HTTP POST call to an API
   * @param {string} url
   * @param {T} send Generic parameter
   * @param {Array<ApiParameter>} params Optional
   * @returns An Observable of type TReceive
   */
  doPost<TSend, TReceive>(
    url: string,
    send: TSend,
    params?: Array<ApiParameter>
  ): Observable<TReceive> {
    url = apiRoot + url;
    if (params) {
      return this.httpClient.post<TReceive>(url, send, {
        headers: this.buildHeaders(),
        params: this.buildParams(params),
      });
    } else {
      return this.httpClient.post<TReceive>(url, send, {
        headers: this.buildHeaders(),
      });
    }
  }

  /**
   * Make a HTTP GET call to an API.
   * @param {string} url
   * @param {Array<ApiParameter>} params Optional
   * @returns An Observable of type T
   * @example
   * const lookupParam: ApiParameter[] = [];
   * lookupParam.push({ key: 'upperPrice', value: 15 });
   * return this.apiService.doGet<GameDetail>('deals', lookupParam);
   */
  doGet<T>(url: string, params?: Array<ApiParameter>): Observable<T> {
    url = apiRoot + url;
    if (params) {
      return this.httpClient.get<T>(url, {
        headers: this.buildHeaders(),
        params: this.buildParams(params),
      });
    }
    return this.httpClient.get<T>(url, { headers: this.buildHeaders() });
  }

  /**
   * Make a HTTP DELETE call to an API
   * @param {string} url
   * @param {Array<ApiParameter>} params Optional
   * @returns An Observable of type T
   */
  doDelete<T>(url: string, params?: Array<ApiParameter>): Observable<T> {
    url = apiRoot + url;
    if (params) {
      return this.httpClient.delete<T>(url, {
        headers: this.buildHeaders(),
        params: this.buildParams(params),
      });
    }
    return this.httpClient.delete<T>(url, { headers: this.buildHeaders() });
  }
}
