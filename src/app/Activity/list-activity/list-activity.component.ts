import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ServiceService} from "../../Service/service.service";
import {Activity} from "../../Modelo/Activity";
import {ResponseError} from "../../Modelo/ResponseError";
import {Employed} from "../../Modelo/Employed";
import {FormControl} from "@angular/forms";

@Component({
    selector: 'app-list-activity',
    templateUrl: './list-activity.component.html',
    styleUrls: ['./list-activity.component.css']
})
export class ListActivityComponent implements OnInit {

    title = 'Todas las actividades';
    description = 'Puedes gestionar todas tus actividades editar, eliminar y asignar un empleado, ademas de ver toda la informacón relevante.';
    label_add_activities = 'Crear actividad';
    is_edit = false;
    errors = new ResponseError();
    activities: Activity[] = [];
    employees: Employed[] = [];
    employedAssigned = 'Asignar empleado';
    date_star = new FormControl('');

    constructor(private service: ServiceService, private router: Router) {
    }

    ngOnInit(): void {
        this.service.getActivities()
            .subscribe(data => {
                this.activities = data;
            })
        this.service.getEmployees()
            .subscribe(data => {
                this.employees = data;
            })
    }

    assignedDateStar(activities: Activity) {
        activities.start_date = this.date_star.value!;
        this.service.assignedDateStar(activities)
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

    assignedEmployed(activities: Activity, employed: Employed) {
        activities.employees_id = employed.id
        this.service.assignedActivity(activities)
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

    AddActivity() {
        this.router.navigate(["add-Activity"])
    }

    EditActivity(activity: Activity) {
        this.router.navigate(["edit-Activity",
            {
                id: activity.id,
                name: activity.name,
                employed_id: activity.employees_id,
                employed_name: activity.name_employed,
                start_date: activity.start_date
            }])
    }

    finishedActivity(activity: Activity) {
        this.service.finishedActivity(activity)
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

    deleteActivity(activity: Activity) {
        this.service.deleteActivity(activity)
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
