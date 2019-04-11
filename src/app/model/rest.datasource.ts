import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from './product.module';
import {Cart} from './cart.model';
import {Order} from './order.model';

const PROTOCOL = 'http';
const PORT = 3500;

@Injectable()
export class RestDataSource {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  getProducts(): Observable<Product[]> {
    return this.sendRequest('GET', 'products');
  }

  saveOrder(order: Order): Observable<Order> {
    return this.sendRequest('POST', 'orders', order);
  }
  private sendRequest(method: string, url: string, body?: Product | Order): Observable<any> {
    return this.http.request(method, this.baseUrl + url, body);
  }
}
