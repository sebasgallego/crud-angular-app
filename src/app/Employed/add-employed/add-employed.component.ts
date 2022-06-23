import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ResponseError} from "../../Modelo/ResponseError";
import {ServiceService} from "../../Service/service.service";
import {Router} from "@angular/router";
import {Employed} from "../../Modelo/Employed";

@Component({
    selector: 'app-add-employed',
    templateUrl: './add-employed.component.html',
    styleUrls: ['./add-employed.component.css']
})
export class AddEmployedComponent implements OnInit {

    title = 'Agregar nuevo empleado';
    description = 'Crea una nuevo empleado.';
    errors = new ResponseError();
    formGroup = new FormGroup({
        name: new FormControl(''),
        lastName: new FormControl(''),
        email: new FormControl(''),
        phone: new FormControl('')
    })

    constructor(private service: ServiceService, private router: Router) {}

    ngOnInit(): void {}

    saveEmployed() {
        let formData = this.formGroup.value as Employed;
        this.service.setEmployed(formData)
            .subscribe(
                response => {
                    if (response.status) {
                        this.router.navigate!(['/list-Employed'])
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
