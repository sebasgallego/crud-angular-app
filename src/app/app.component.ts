import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Gestion de actividades';
    label_list_activities = 'Actividades';
    label_list_employed = 'Empleados';

    constructor(private router: Router) {
    }

    ngOnInit(): void {
        //this.router.navigate(["list-Activity"])
    }

    ListActivity() {
        this.router.navigate(["list-Activity"])
    }

    ListEmployed() {
        this.router.navigate(["list-Employed"])
    }
}
