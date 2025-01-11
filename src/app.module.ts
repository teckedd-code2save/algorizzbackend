import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CareersModule } from './apis/careers/careers.module';
import { ChatModule } from './apis/chat/chat.module';
import { PeopleModule } from './apis/people/people.module';

@Module({
  imports: [
    ConfigModule.forRoot({
    isGlobal: true, 
    envFilePath: '.env', 
  }),
    CareersModule,
    ChatModule,
    PeopleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}