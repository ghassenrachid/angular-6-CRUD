export class Post {
    idUser: string;
    id: string;
    title: string;
    body: string;

    constructor(json: any) {
  
        if (json !== undefined) {
            this.idUser = json.idUser;
            this.id = json.id;
            this.title = json.title;
            this.body = json.body;
        }
    }
  }
