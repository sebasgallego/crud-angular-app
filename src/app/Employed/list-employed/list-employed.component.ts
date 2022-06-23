import {Component, OnInit} from '@angular/core';
import {ResponseError} from "../../Modelo/ResponseError";
import {ServiceService} from "../../Service/service.service";
import {Router} from "@angular/router";
import {Activity} from "../../Modelo/Activity";
import {Employed} from "../../Modelo/Employed";

@Component({
    selector: 'app-list-employed',
    templateUrl: './list-employed.component.html',
    styleUrls: ['./list-employed.component.css']
})
export class ListEmployedComponent implements OnInit {

    title = 'Todos los empleados';
    description = 'Puedes gestionar todas tus empleados editar y eliminar, ademas de ver toda la informacón relevante.';
    label_add_employed = 'Crear empleado';
    errors = new ResponseError();
    employees: Employed[] = [];

    constructor(private service: ServiceService, private router: Router) {
    }

    ngOnInit(): void {
        this.service.getEmployees()
            .subscribe(data => {
                this.employees = data;
                console.log(data)
            })
    }

    AddEmployed() {
        this.router.navigate(["add-Employed"])
    }

    deleteActivity(employed: Employed) {
        this.service.deleteEmployed(employed)
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
