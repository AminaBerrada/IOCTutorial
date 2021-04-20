import { Record } from '../../models/Record';
import { Configs } from '../../models/Configs';

export interface IPipeline 
{
    initialize(configs: Configs): boolean;
    process(record: Record): boolean;
    finalize(): boolean;
}