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
    private _stringRecord: Record;
    private _pipeline: IPipeline;

    constructor(@inject(TYPES.IPipeline) pipeline: IPipeline)
    {
        this._pipeline = pipeline;
    }

    public fetchRecords(): boolean 
    {
        this._stringRecord = new Record(Status.Pending, "Woof Woof");
        return true;
    }

    public configurePipeline(): boolean
    {
        var success = false;

        try 
        {
            success = this._pipeline.initialize(new Configs());
            if  (!success)
                throw new Error("Failed to intialize");
        } catch (err: any)
        {
            console.error(err.message);
        }

        return success;
    }

    public runPipeline(): boolean 
    {
        var success = false;

        try 
        {
            success = this._pipeline.process(this._stringRecord);
            if  (!success)
                throw new Error("Failed to intialize");
        } catch (err: any)
        {
            console.error(err.message);
        }

        return success;
        
    }

    public finalize(): boolean 
    {
        return true;
    }
    
}