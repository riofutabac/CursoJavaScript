import { v7 as uuidv7 } from 'uuid';

export class Todo {
    constructor(description) {
        this.id = uuidv7(); 
        this.description = description;
        this.done = false;
        this.createdAt = new Date();
    }
}
