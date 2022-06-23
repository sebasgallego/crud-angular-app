export class Employed {

    private _id: String | undefined;
    private _name: String | undefined;
    private _lastName: String | undefined;
    private _email: String | undefined;
    private _phone: String | undefined;

    public constructor(init?: Partial<Employed>) {
        Object.assign(this, init);
    }

    get id(): String | undefined {
        return this._id;
    }

    set id(value: String | undefined) {
        this._id = value;
    }

    get name(): String | undefined {
        return this._name;
    }

    set name(value: String | undefined) {
        this._name = value;
    }

    get lastName(): String | undefined {
        return this._lastName;
    }

    set lastName(value: String | undefined) {
        this._lastName = value;
    }

    get email(): String | undefined {
        return this._email;
    }

    set email(value: String | undefined) {
        this._email = value;
    }

    get phone(): String | undefined {
        return this._phone;
    }

    set phone(value: String | undefined) {
        this._phone = value;
    }

}