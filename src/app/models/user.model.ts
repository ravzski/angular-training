export class User {

  public id: any;
  public email: string;
  public first_name: string;
  public last_name: string;
  public role: string;
  public current_access_token: string;

  constructor(fields?: any) {

     if (fields) {
       Object.assign(this, fields);
     }

     this.first_name = this.first_name || '';
     this.last_name = this.last_name || '';
     this.current_access_token = this.current_access_token || '';
     this.email = this.email || '';
     this.role = this.role || '';

     return this;
  }

  name() {
    return [this.first_name, this.last_name].join(' ');
  }
}