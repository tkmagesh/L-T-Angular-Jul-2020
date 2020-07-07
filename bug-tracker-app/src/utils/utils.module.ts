import { NgModule } from "@angular/core";
import { ElapsedPipe } from "./pipes/elapsed.pipe";
import { SortPipe } from "./pipes/sort.pipe";
import { TrimTextPipe } from "./pipes/trimText.pipe";

@NgModule({
    declarations : [
        ElapsedPipe
        , SortPipe
        , TrimTextPipe
    ], 
    providers : [],
    bootstrap : [], 
    imports : [],
    exports : [
        ElapsedPipe
        , SortPipe
        , TrimTextPipe
    ]
})
export class UtilsModule {

}