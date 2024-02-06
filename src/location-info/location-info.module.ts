import { Module } from '@nestjs/common';
import { LocationInfoController } from './location-info.controller';
import { LocationInfoService } from './location-info.service';

@Module({
  controllers: [LocationInfoController],
  providers: [LocationInfoService]
})
export class LocationInfoModule {}
