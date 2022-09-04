import { Test, TestingModule } from '@nestjs/testing';
import { FlightOperationsService } from './flight-operations.service';

describe('FlightOperationsService', () => {
  let service: FlightOperationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FlightOperationsService],
    }).compile();

    service = module.get<FlightOperationsService>(FlightOperationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
