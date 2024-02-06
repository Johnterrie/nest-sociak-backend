import { Module } from '@nestjs/common';
import { AppUpdateController } from './app_update.controller';
import { AppUpdateService } from './app_update.service';

@Module({
  controllers: [AppUpdateController],
  providers: [AppUpdateService]
})
export class AppUpdateModule {}
