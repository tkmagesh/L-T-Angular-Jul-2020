import { Bug } from "../models/Bug";
import { BugStorageService } from "./bugStorage.service";
import { Injectable } from '@angular/core';

@Injectable()
export class BugOperationsService{

    constructor(private bugStorage : BugStorageService){ 

    }
    createNew(bugName : string):Bug{
        const newBug = {
            id : 0,
            name : bugName,
            isClosed : false,
            createdAt : new Date()
        };
        this.bugStorage.save(newBug);
        return newBug;
    }
    
    toggle(bugToToggle : Bug) : void {
        bugToToggle.isClosed = !bugToToggle.isClosed;
        this.bugStorage.save(bugToToggle);
    }

    getAll() : Bug[] {
        return this.bugStorage.getAll();
    }

    remove(bug : Bug) {
        this.bugStorage.remove(bug);
    }

}