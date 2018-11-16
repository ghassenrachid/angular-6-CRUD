export class User {
    id: string;
    name: string;
    username: string;
    email: string;

    constructor(json: any) {
  
        if (json !== undefined) {
            this.id = json.id;
            this.name = json.name;
            this.username = json.username;
            this.email = json.email;
        }
    }
  }
