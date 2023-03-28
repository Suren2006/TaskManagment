export class Task {
    constructor(id, name, description, status,) {
        this._id = id
        this._date = new Date().toDateString();
        this._name = name;
        this._desc = description;
        this._status = status;
    }

    get name() {
        return this._name
    }

    set name(value) {
        this._name = value
    }

    get description() {
        return this._desc
    }

    set description(value) {
        this._desc = value
    }

    get status() {
        return this._status
    }

    set status(value) {
        this._status = value
    }

}
