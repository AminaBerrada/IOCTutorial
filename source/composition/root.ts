import "reflect-metadata";
import { Container } from "inversify";
import { IPipeline } from "../pipelines/abstractions/IPipeline";
import { Test } from "../pipelines/implementation/test";
import { IProcessor } from "../processors/abstractions/IProcessor";
import { ProvidedstringProcessor } from "../processors/implementations/providedstringprocessor";
import { TYPES } from './types';

export class Root
{
    public static compose(): Container
    {
        var container = new Container();
        container.bind<IPipeline>(TYPES.IPipeline).to(Test);
        container.bind<IProcessor>(TYPES.IProcessor).to(ProvidedstringProcessor);
        return container;
    }
}