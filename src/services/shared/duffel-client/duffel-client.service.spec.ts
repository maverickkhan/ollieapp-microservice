import { Test, TestingModule } from '@nestjs/testing';
import { DuffelClientService } from './duffel-client.service';

describe('DuffelClientService', () => {
  let service: DuffelClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DuffelClientService],
    }).compile();

    service = module.get<DuffelClientService>(DuffelClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
