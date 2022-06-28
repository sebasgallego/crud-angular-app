import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddActivityComponent} from "./Activity/add-activity/add-activity.component";
import {EditActivityComponent} from "./Activity/edit-activity/edit-activity.component";
import {DeleteActivityComponent} from "./Activity/delete-activity/delete-activity.component";
import {ListActivityComponent} from "./Activity/list-activity/list-activity.component";
import {EditEmployedComponent} from "./Employed/edit-employed/edit-employed.component";
import {ListEmployedComponent} from "./Employed/list-employed/list-employed.component";
import {AddEmployedComponent} from "./Employed/add-employed/add-employed.component";

const routes: Routes = [
    {path: 'add-Activity', component: AddActivityComponent},
    {path: 'edit-Activity', component: EditActivityComponent},
    {path: 'delete-Activity', component: DeleteActivityComponent},
    {path: 'list-Activity', component: ListActivityComponent},
     {path: 'add-Employed', component: AddEmployedComponent},
    {path: 'edit-Employed', component: EditEmployedComponent},
    {path: 'list-Employed', component: ListEmployedComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
