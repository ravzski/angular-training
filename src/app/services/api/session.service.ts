import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpService, LocalStorage } from '../utils';
import { User } from '../../models/user.model';

const ENDPOINT = `${environment.API_URL}/api/sessions`;

@Injectable()
export class SessionService {
  public currentUser = new BehaviorSubject<User>(new User());

  constructor(
    private storage: LocalStorage,
    private http: HttpService
  ) { }


  userSignedIn(): boolean {
    return !!this.storage.get('accessToken')
  }

  login(payload: any): any {
    debugger;
    return this.http.post(ENDPOINT, payload, true);
  }

  setSession(data: any): void {
    this.storage.set('accessToken', data.auth_token);
    this.storage.set('userId', data.email);
    this.storage.setObject('currentUser', data);
    this.currentUser.next((new User(data)));
  }

  getCurrentUser(): any {
    const user = new User(this.storage.getObject('currentUser'));
    this.currentUser.next(user);

    return user;
  }

  signOut(): any {
    return this.http.delete(ENDPOINT);
  }

  clearSession(): void {
    this.storage.clear();
  }
}
