import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './shared/typeorm/typeorm.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule, 
    ConfigModule.forRoot({ isGlobal: true }), 
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService })],
  controllers: [],
  providers: [],
})
export class AppModule {}
