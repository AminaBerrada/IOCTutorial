import { Root } from "./composition/root";
import { TYPES } from "./composition/types";
import { IProcessor } from "./processors/abstractions/IProcessor";

export default class App
{
    public static async main(): Promise<void> 
    {
        try
        {
            var container = Root.compose();
            var processor = container.get<IProcessor>(TYPES.IProcessor);
            
            var initialized = await processor.fetchRecords();
            if (!initialized)
                throw new Error("Failed to fetch records");

            var configured = await processor.configurePipeline();
            if (!configured)
                throw new Error("Failed to configure pipeline");
            
            var ran = await processor.runPipeline();
            if (!ran)
                throw new Error("Failed to run pipeline");
            
            var finalized = await processor.finalize();
            if (!finalized)
                throw new Error("Failed to finalize processor");

        } catch (ex: any)
        {
            console.error(ex.message);
        }

    }
}