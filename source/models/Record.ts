import { Status } from '../enums/status';

export class Record
{
    public status: Status;
    public data: String;

    constructor(status: Status, data: string){
        this.status = status;
        this.data = data;
    }
}