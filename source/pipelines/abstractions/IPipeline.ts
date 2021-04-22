import { Record } from '../../models/Record';
import { Configs } from '../../models/Configs';

export interface IPipeline 
{
    initialize(configs: Configs): Promise<boolean>;
    process(record: Record): Promise<boolean>;
    finalize(): Promise<boolean>;
}