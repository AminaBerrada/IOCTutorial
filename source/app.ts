import { Root } from "./composition/root";
import { TYPES } from "./composition/types";
import { IPipeline } from "./pipelines/abstractions/IPipeline";
import { IProcessor } from "./processors/abstractions/IProcessor";

export default class App
{
    public static main(): void 
    {
        try
        {
            var container = Root.compose();
            var processor = container.get<IProcessor>(TYPES.IProcessor);

            if (!processor.fetchRecords())
                throw new Error("Failed to fetch records");

            if (!processor.configurePipeline())
                throw new Error("Failed to configure pipeline");
            
            if (!processor.runPipeline())
                throw new Error("Failed to run pipeline");
            
            if (!processor.finalize())
                throw new Error("Failed to finalize processor");

        } catch (ex: any)
        {
            console.error(ex.message);
        }

    }
}