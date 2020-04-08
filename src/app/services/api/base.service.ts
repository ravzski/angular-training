import { Injectable } from '@angular/core';
import { HttpService } from './../utils';
import { Observable } from 'rxjs';

export class BaseService {

  public ENDPOINT: string;

  constructor(
    public http: HttpService,
    public url: string
  ) {
    this.ENDPOINT = url;
  }

  update(id: any, payload: any): any {
    return this.http.patch(`${this.ENDPOINT}/${id}`, payload);
  }

  get(id: any): any {
    return this.http.get(`${this.ENDPOINT}/${id}`);
  }

  query(query: any): any {
    return this.http.get(`${this.ENDPOINT}?${this.buildParams(query)}`);
  }

  buildParams(params: any, prefix=null): any {
    const query = Object.keys(params).map((key) => {
      const value  = params[key];

      if (params.constructor === Array)
        key = `${prefix}[]`;
      else if (params.constructor === Object)
        key = (prefix ? `${prefix}[${key}]` : key);

      if (typeof value === 'object')
        return this.buildParams(value, key);
      else if (value != '')
        return `${key}=${encodeURIComponent(value)}`;
    });

    return [].concat.apply([], query.filter(q=>q)).join('&');
  }

  create(payload: any): any {
    return this.http.post(this.ENDPOINT, payload);
  }

  destroy(id: any, payload: any): any {
   return this.http.delete(`${this.ENDPOINT}/${id}`);
  }

}
