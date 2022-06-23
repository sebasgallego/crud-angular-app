import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ServiceService} from "../../Service/service.service";
import {Activity} from "../../Modelo/Activity";
import {ResponseError} from "../../Modelo/ResponseError";
import {Employed} from "../../Modelo/Employed";

@Component({
    selector: 'app-list-activity',
    templateUrl: './list-activity.component.html',
    styleUrls: ['./list-activity.component.css']
})
export class ListActivityComponent implements OnInit {

    title = 'Todas las actividades';
    description = 'Puedes gestionar todas tus actividades editar, eliminar y asignar un empleado, ademas de ver toda la informacón relevante.';
    label_add_activities = 'Crear actividad';
    errors = new ResponseError();
    activities: Activity[] = [];
    employees: Employed[] = [];
    employedAssigned = 'Asignar empleado';

    constructor(private service: ServiceService, private router: Router) {
    }

    ngOnInit(): void {
        this.service.getActivities()
            .subscribe(data => {
                this.activities = data;
                console.log(data)
            })
        this.service.getEmployees()
            .subscribe(data => {
                this.employees = data;
                console.log(data)
            })
    }

    assignedEmployed(activities: Activity,employed: Employed) {
        console.log("*********"+activities.name)
        console.log("*********"+employed.name)
    }

    AddActivity() {
        this.router.navigate(["add-Activity"])
    }

    deleteActivity(activities: Activity) {
        this.service.deleteActivity(activities)
            .subscribe(
                response => {
                    if (response.status) {
                        this.ngOnInit();
                    } else {
                        this.errors.message = response.message;
                        this.errors.status = response.status;
                        console.log(response.message);
                    }
                },
                err => {
                    this.errors.message = err.error.message;
                    this.errors.status = false;
                    console.log(this.errors);
                })
    }
}
