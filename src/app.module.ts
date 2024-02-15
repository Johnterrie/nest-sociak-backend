import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AdminModule } from './admin/admin.module';
import { AppUpdateModule } from './app_update/app_update.module';
import { AuthModule } from './auth/auth.module';
import { ChatModule } from './chat/chat.module';
import { HashtagModule } from './hashtag/hashtag.module';
import { LocationInfoModule } from './location-info/location-info.module';
import { NotificationModule } from './notification/notification.module';
import { PostModule } from './post/post.module';
import { ProjectModule } from './project/project.module';
import { ProjectService } from './project/project.service';



@Module({
  imports: [UsersModule, AdminModule, AppUpdateModule, AuthModule, ChatModule, HashtagModule, LocationInfoModule, NotificationModule, PostModule, ProjectModule, MongooseModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, ProjectService],
})
export class AppModule { }
