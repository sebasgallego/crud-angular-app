import {Component, OnInit} from '@angular/core';
import {ResponseError} from "../../Modelo/ResponseError";
import {FormControl, FormGroup} from "@angular/forms";
import {Employed} from "../../Modelo/Employed";
import {ServiceService} from "../../Service/service.service";
import {Router, ActivatedRoute, ParamMap} from "@angular/router";
import {Activity} from "../../Modelo/Activity";

@Component({
    selector: 'app-edit-activity',
    templateUrl: './edit-activity.component.html',
    styleUrls: ['./edit-activity.component.css']
})
export class EditActivityComponent implements OnInit {

    title = 'Editar actividad';
    description = 'Podrá actualizar los datos de su actividad';
    errors = new ResponseError();
    employees: Employed[] = [];
    activity_edit: Activity = new Activity('',
        '',
        '',
        '',
        0,'',
        '',
        0);
    employedAssigned = 'Seleccionar empleado';
    start_date = new FormControl('');
    name = new FormControl('');

    constructor(private service: ServiceService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.employedAssigned = this.route.snapshot.paramMap.get('employed_name')!
        this.start_date.setValue(this.route.snapshot.paramMap.get('start_date'))
        this.name.setValue(this.route.snapshot.paramMap.get('name')!)
        this.activity_edit.id = this.route.snapshot.paramMap.get('id')!
        this.activity_edit.name = this.route.snapshot.paramMap.get('name')!
        this.activity_edit.employees_id = this.route.snapshot.paramMap.get('employed_id')!
        this.activity_edit.name_employed = this.route.snapshot.paramMap.get('employed_name')!
        this.activity_edit.start_date = this.route.snapshot.paramMap.get('start_date')!
        this.service.getEmployees()
            .subscribe(data => {
                this.employees = data;
                console.log(data)
            })
    }

    assignedEmployed(employed: Employed) {
        this.activity_edit.employees_id = employed.id
        this.activity_edit.name_employed = employed.name + " " + employed.lastName
        this.employedAssigned = employed.name + " " + employed.lastName
    }

    save() {
        this.activity_edit.name = this.name.value!;
        this.activity_edit.start_date = this.start_date.value!;
        console.log(this.activity_edit)
        this.service.editActivity(this.activity_edit)
            .subscribe(
                response => {
                    if (response.status) {
                        this.router.navigate!(['/list-Activity'])
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
                }
            )
    }


}
