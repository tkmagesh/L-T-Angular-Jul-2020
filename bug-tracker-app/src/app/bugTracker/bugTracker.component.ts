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

    onBugNameClick(bugToToggle : Bug){
        bugToToggle.isClosed = !bugToToggle.isClosed;
    }

    onRemoveClosedClick(){
        this.bugs = this.bugs.filter(bug => !bug.isClosed);
    }

    getClosedCount(){
        return this.bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
    }
}