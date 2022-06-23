import {Employed} from "./Employed";

export class ResponseError {

    private _message: String | undefined;
    private _status: boolean | undefined;


    get message(): String | undefined {
        return this._message;
    }

    set message(value: String | undefined) {
        this._message = value;
    }


    get status(): boolean | undefined {
        return this._status;
    }

    set status(value: boolean | undefined) {
        this._status = value;
    }
}