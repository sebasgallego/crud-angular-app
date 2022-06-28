export class Activity {

    id: String | undefined;
    name: String | undefined;
    name_employed: String | undefined;
    employees_id: String | undefined;
    status_id: number | undefined;
    status: String | undefined;
    start_date: String | undefined;
    delay_days: number | undefined;

    constructor(id: String | undefined,
                name: String | undefined,
                name_employed: String | undefined,
                employees_id: String | undefined,
                status_id: number | undefined,
                status: String | undefined,
                start_date: String | undefined,
                delay_days: number | undefined) {
        this.id = id;
        this.name = name;
        this.name_employed = name_employed;
        this.employees_id = employees_id;
        this.status_id = status_id;
        this.status = status;
        this.start_date = start_date;
        this.delay_days = delay_days;
    }
}