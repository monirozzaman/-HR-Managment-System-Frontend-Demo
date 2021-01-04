import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiUrlService {

  public apiUrl = environment.baseUrl;
  public loginApi = this.apiUrl + 'api/authenticate';


  constructor() {
  }
}
