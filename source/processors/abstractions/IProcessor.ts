export interface IProcessor
{
    fetchRecords(): Promise<boolean>;
    configurePipeline(): Promise<boolean>;
    runPipeline(): Promise<boolean>;
    finalize(): Promise<boolean>;
}