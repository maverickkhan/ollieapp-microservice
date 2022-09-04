import { Test, TestingModule } from '@nestjs/testing';
import { DuffelServiceService } from './duffel-service.service';

describe('DuffelServiceService', () => {
  let service: DuffelServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DuffelServiceService],
    }).compile();

    service = module.get<DuffelServiceService>(DuffelServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
