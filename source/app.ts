import { Root } from "./composition/root";
import { TYPES } from "./composition/types";
import { IPipeline } from "./pipelines/abstractions/IPipeline";
import { IProcessor } from "./processors/abstractions/IProcessor";

export default class App
{
    public static main(): void 
    {
        var container = Root.compose();
        var processor = container.get<IProcessor>(TYPES.IProcessor);
        processor.fetchRecords();
        processor.configurePipeline();
        processor.runPipeline();
        processor.finalize();
    }
}