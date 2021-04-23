import 'reflect-metadata';
import { Mock, It, Times } from 'moq.ts';
import { expect } from 'chai';
import { ProvidedstringProcessor } from '../../source/processors/implementations/providedstringprocessor';
import { IPipeline } from '../../source/pipelines/abstractions/IPipeline';
import { Configs } from '../../source/models/Configs';
import { Record } from '../../source/models/Record';


describe("Tests for ProvidedstringProcessor class", () => {


    it("configurePipeline should return true", async() => {

        var pipeline = new Mock<IPipeline>();
        pipeline
            .setup(obj => obj.initialize(It.IsAny<Configs>()))
            .returns(Promise.resolve(true));

        var processor = new ProvidedstringProcessor(pipeline.object());
        var success = await processor.configurePipeline();

        expect(success, 'Expected true, was false').to.be.true;
    });

    it("configurePipeline should return false", async() => {

        var pipeline = new Mock<IPipeline>();
        pipeline
            .setup(obj => obj.initialize(It.IsAny<Configs>()))
            .returns(Promise.resolve(true));

        var processor = new ProvidedstringProcessor(pipeline.object());
        var success = await processor.configurePipeline();

        var verifyFunc = () => pipeline.verify(obj => obj.initialize(It.IsAny<Record>()), Times.Once());

        expect(success, 'Expected false, was true').to.be.true;
        expect(verifyFunc).to.not.throw(Error());

    });
    
    it("fetchRecords should return true", async() => {

        var pipeline = new Mock<IPipeline>();

        var processor = new ProvidedstringProcessor(pipeline.object());
        var success = await processor.fetchRecords();

        expect(success, 'Expected true, was false').to.be.true;
    }); 

        
    it("finalize should return true", async() => {

        var pipeline = new Mock<IPipeline>();

        var processor = new ProvidedstringProcessor(pipeline.object());
        var success = await processor.finalize();

        expect(success, 'Expected true, was false').to.be.true;
    }); 



    it("runPipeline should return true", async() => {

        var pipeline = new Mock<IPipeline>();
        pipeline
            .setup(obj => obj.process(It.IsAny<Record>()))
            .returns(Promise.resolve(true));

        var processor = new ProvidedstringProcessor(pipeline.object());
        var success = await processor.runPipeline();

        expect(success, 'Expected true, was false').to.be.true;

    });

    it("runPipeline should return false", async() => {

        var pipeline = new Mock<IPipeline>();
        pipeline
            .setup(obj => obj.process(It.IsAny<Record>()))
            .returns(Promise.resolve(false));

        var processor = new ProvidedstringProcessor(pipeline.object());

        var success =  await processor.runPipeline();

        var verifyFunc = () => pipeline.verify(obj => obj.process(It.IsAny<Record>()), Times.Once());

        expect(success, 'Expected false, was true').to.be.false;
        expect(verifyFunc).to.not.throw(Error())

    });

});