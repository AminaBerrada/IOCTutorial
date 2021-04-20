export interface IProcessor
{
    fetchRecords(): boolean;
    configurePipeline(): boolean;
    runPipeline(): boolean;
    finalize(): boolean;
}