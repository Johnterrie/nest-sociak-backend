import { Test, TestingModule } from '@nestjs/testing';
import { LocationInfoService } from './location-info.service';

describe('LocationInfoService', () => {
  let service: LocationInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocationInfoService],
    }).compile();

    service = module.get<LocationInfoService>(LocationInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
