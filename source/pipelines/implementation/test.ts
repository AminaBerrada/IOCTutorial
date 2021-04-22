import { injectable } from "inversify";
import { Configs } from "../../models/Configs";
import { Record } from "../../models/Record";
import { IPipeline } from "../abstractions/IPipeline";

@injectable()
export class Test implements IPipeline
{
    async initialize(configs: Configs): Promise<boolean> {
        return true;
    }
    async process(record: Record): Promise<boolean> {
        console.log(record.data);
        return true;
    }
    async finalize(): Promise<boolean> {
        return true;
    }
    
}