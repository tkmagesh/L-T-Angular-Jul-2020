import { Bug } from "../models/Bug";

export class BugOperationsService{
    createNew(bugName : string):Bug{
        const newBug = {
            id : 0,
            name : bugName,
            isClosed : false,
            createdAt : new Date()
        };
        return newBug;
    }
    
    toggle(bugToToggle : Bug) : void {
        bugToToggle.isClosed = !bugToToggle.isClosed;
    }
}