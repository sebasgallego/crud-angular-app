import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EditActivityComponent} from './Activitie/edit-activity/edit-activity.component';
import {AddActivityComponent} from './Activitie/add-activity/add-activity.component';
import {DeleteActivityComponent} from './Activitie/delete-activity/delete-activity.component';
import {ListActivityComponent} from './Activitie/list-activity/list-activity.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ServiceService} from "./Service/service.service";
import {HttpClientModule} from "@angular/common/http";
import { ListEmployedComponent } from './Employed/list-employed/list-employed.component';
import { AddEmployedComponent } from './Employed/add-employed/add-employed.component';
import { EditEmployedComponent } from './Employed/edit-employed/edit-employed.component';


@NgModule({
    declarations: [
        AppComponent,
        EditActivityComponent,
        AddActivityComponent,
        DeleteActivityComponent,
        ListActivityComponent,
        ListEmployedComponent,
        AddEmployedComponent,
        EditEmployedComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [ServiceService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
