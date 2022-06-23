import {Employed} from "./Employed";

export class Activity {

    private _id: String | undefined;
    private _name: String | undefined;
    private _name_employed: String | undefined;
    private _employees_id: String | undefined;
    private _status_id: number | undefined;
    private _status: String | undefined;
    private _start_date: String | undefined;
    private _delay_days: String | undefined;

    get name_employed(): String | undefined {
        return this._name_employed;
    }

    set name_employed(value: String | undefined) {
        this._name_employed = value;
    }

    get id(): String | undefined {
        return this._id;
    }

    set id(value: String | undefined) {
        this._id = value;
    }

    get delay_days(): String | undefined {
        return this._delay_days;
    }

    set delay_days(value: String | undefined) {
        this._delay_days = value;
    }

    get name(): String | undefined {
        return this._name;
    }

    set name(value: String | undefined) {
        this._name = value;
    }

    get employees_id(): String | undefined {
        return this._employees_id;
    }

    set employees_id(value: String | undefined) {
        this._employees_id = value;
    }

    get status_id(): number | undefined {
        return this._status_id;
    }

    set status_id(value: number | undefined) {
        this._status_id = value;
    }

    get status(): String | undefined {
        return this._status;
    }

    set status(value: String | undefined) {
        this._status = value;
    }

    get start_date(): String | undefined {
        return this._start_date;
    }

    set start_date(value: String | undefined) {
        this._start_date = value;
    }
}