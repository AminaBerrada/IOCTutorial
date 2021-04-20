import { injectable } from "inversify";
import { Configs } from "../../models/Configs";
import { Record } from "../../models/Record";
import { IPipeline } from "../abstractions/IPipeline";

@injectable()
export class Test implements IPipeline
{
    initialize(configs: Configs): boolean {
        return true;
    }
    process(record: Record): boolean {
        console.log(record.data);
        return true;
    }
    finalize(): boolean {
        return true;
    }
    
}