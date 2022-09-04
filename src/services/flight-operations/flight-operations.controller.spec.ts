import { Test, TestingModule } from '@nestjs/testing';
import { FlightOperationsController } from './flight-operations.controller';
import { FlightOperationsService } from './flight-operations.service';

describe('FlightOperationsController', () => {
  let controller: FlightOperationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FlightOperationsController],
      providers: [FlightOperationsService],
    }).compile();

    controller = module.get<FlightOperationsController>(FlightOperationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
