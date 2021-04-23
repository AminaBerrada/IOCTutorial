import { IProcessor } from "../abstractions/IProcessor";
import { TYPES } from '../../composition/types';
import { inject, injectable } from "inversify";
import { IPipeline } from "../../pipelines/abstractions/IPipeline";
import { Configs } from "../../models/Configs";
import { Record } from "../../models/Record";
import { Status } from "../../enums/status";

@injectable()
export class ProvidedstringProcessor implements IProcessor
{
    private _record: Record;
    private _pipeline: IPipeline;

    constructor(@inject(TYPES.IPipeline) pipeline: IPipeline)
    {
        this._pipeline = pipeline;
    }

    public async fetchRecords(): Promise<boolean> 
    {
        this._record = new Record(Status.Pending, "Woof Woof");
        return true;
    }

    public async configurePipeline(): Promise<boolean>
    {
        var success = false;

        try 
        {
            success = await this._pipeline.initialize(new Configs());
            if  (!success)
                throw new Error("Failed to intialize");
        } catch (err: any)
        {
            console.error(err.message);
        }

        return success;
    }

    public async runPipeline(): Promise<boolean> 
    {
        var success = false;
        try 
        {
            success = await this._pipeline.process(this._record);
            if (!success)
                throw new Error("Failed to process");
        } catch (err: any)
        {
            console.error(err.message);
        }
        return success;
        
    }

    public async finalize(): Promise<boolean> 
    {
        return true;
    }
    
}