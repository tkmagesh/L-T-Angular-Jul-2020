import { Component } from "@angular/core";
import { Bug } from "./models/Bug";
import { BugOperationsService } from "./services/bugOperations.service";
import { HttpClient } from "@angular/common/http";

@Component({
    selector : 'app-bug-tracker',
    templateUrl: './bugTracker.component.html'
})
export class BugTrackerComponent{
    bugs: Bug[] = [];
    

    sortAttr : string = '';
    sortDesc : boolean = false;

    constructor(private bugOperations : BugOperationsService
        ,private httpClient : HttpClient){


        this.bugs = this.bugOperations.getAll();
    }

    onLoadDataClick(){
        const observable = this.httpClient.get<Bug[]>('http://localhost:3000/bugs');
        observable.subscribe(bugs => console.table(bugs));
    }

    onNewBugCreated(newBug : Bug){
        this.bugs = [...this.bugs, newBug];
    }

    onRemoveClick(bugToRemove: Bug){
        this.bugOperations.remove(bugToRemove);
        this.bugs = this.bugs.filter(bug => bug !== bugToRemove);
    }

    onBugNameClick(bugToToggle : Bug){
        const toggledBug = this.bugOperations.toggle(bugToToggle);
        this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug);
    }

    onRemoveClosedClick(){
        this.bugs
            .filter(bug => bug.isClosed)
            .forEach(closedBug => this.onRemoveClick(closedBug));
    }

}