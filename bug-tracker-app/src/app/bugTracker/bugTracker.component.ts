import { Component } from "@angular/core";
import { Bug } from "./models/Bug";

@Component({
    selector : 'app-bug-tracker',
    templateUrl: './bugTracker.component.html'
})
export class BugTrackerComponent{
    bugs: Bug[] = [];
    newBugName : string = '';

    onAddNewClick(){
        var newBug : Bug = {
            id : 1,
            name : this.newBugName,
            isClosed : false,
            createdAt : new Date(),
        }
        this.bugs.push(newBug);
    }

    onRemoveClick(bugToRemove: Bug){
        this.bugs = this.bugs.filter(bug => bug !== bugToRemove);
    }
}