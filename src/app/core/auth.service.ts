import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable ,  BehaviorSubject } from 'rxjs';
import { tap , distinctUntilChanged, map } from 'rxjs/operators';

import { User } from './user.model';
import { TokenStorage } from './token-storage';
import {HttpClient} from '@angular/common/http';
import {UserInfoModel} from '../model/userInfo.model';

interface State {
  user: User;
  authenticated: boolean;
}

const defaultState: State = {
  user: null,
  authenticated: false
};

const _store = new BehaviorSubject<State>(defaultState);

class Store {
  private _store = _store;
  changes = this._store.asObservable().pipe(distinctUntilChanged());

  setState(state: State) {
    console.log('update user state:' + JSON.stringify(state));
    this._store.next(state);
  }

  getState(): State {
    return this._store.value;
  }

  updateState(data: State) {
    this._store.next(Object.assign({}, this.getState(), data));
  }

  purge() {
    this._store.next(defaultState);
  }
}

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    private jwt: TokenStorage,
    private router: Router) {}


  register(registerModel: UserInfoModel ): Observable<any> {
    return this.http.post('token/register', UserInfoModel);
  }

  attemptAuth(ussername: string, password: string): Observable<any> {
    const credentials = {username: ussername, password: password};
    console.log('attempAuth ::');
    return this.http.post('token/generate-token', credentials);
  }

}
