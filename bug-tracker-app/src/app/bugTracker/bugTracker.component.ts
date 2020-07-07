import { Component } from "@angular/core";
import { Bug } from "./models/Bug";
import { BugOperationsService } from "./services/bugOperations.service";
import { BugStorageService } from "./services/bugStorage.service";
@Component({
    selector : 'app-bug-tracker',
    templateUrl: './bugTracker.component.html'
})
export class BugTrackerComponent{
    bugs: Bug[] = [];
    newBugName : string = '';

    constructor(private bugOperations : BugOperationsService, private bugStorage : BugStorageService){
        this.bugs = this.bugStorage.getAll();
    }

    onAddNewClick(){
        var newBug : Bug = this.bugOperations.createNew(this.newBugName);
        this.bugStorage.save(newBug);
        this.bugs.push(newBug);
    }

    onRemoveClick(bugToRemove: Bug){
        this.bugStorage.remove(bugToRemove);
        this.bugs = this.bugs.filter(bug => bug !== bugToRemove);
    }

    onBugNameClick(bugToToggle : Bug){
        this.bugOperations.toggle(bugToToggle);
        this.bugStorage.save(bugToToggle);
    }

    onRemoveClosedClick(){
        const closedBugs = this.bugs.filter(bug => bug.isClosed);
        closedBugs.forEach(closedBug => this.bugStorage.remove(closedBug));
        this.bugs = this.bugStorage.getAll();
    }

    getClosedCount(){
        return this.bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
    }
}