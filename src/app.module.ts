import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MoviesModule } from '@src/movies-ms/movie.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MoviesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
