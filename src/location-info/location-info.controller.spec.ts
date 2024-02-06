import { Test, TestingModule } from '@nestjs/testing';
import { LocationInfoController } from './location-info.controller';

describe('LocationInfoController', () => {
  let controller: LocationInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocationInfoController],
    }).compile();

    controller = module.get<LocationInfoController>(LocationInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
