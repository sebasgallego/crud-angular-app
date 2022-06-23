import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ServiceService} from "../../Service/service.service";
import {Router} from "@angular/router";
import {Activity} from "../../Modelo/Activity";
import {ResponseError} from "../../Modelo/ResponseError";

@Component({
    selector: 'app-add-activity',
    templateUrl: './add-activity.component.html',
    styleUrls: ['./add-activity.component.css']
})
export class AddActivityComponent implements OnInit {

    title = 'Agregar nueva actividad';
    description = 'Crea una nueva actividad.';
    name = new FormControl('');
    errors = new ResponseError();

    constructor(private service: ServiceService, private router: Router) {}

    ngOnInit(): void {}

    saveActivity() {
        let name_activity: string = this.name.value!;
        this.service.setActivity(name_activity)
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
