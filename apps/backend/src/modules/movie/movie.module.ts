import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { HttpModule } from '@nestjs/axios';

const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODE5MDM5N2ZmZTdiNmRkODdiNWFiMTNjMjJkNDc0YiIsIm5iZiI6MTczNjMyNzA3Ny4xMjksInN1YiI6IjY3N2UzZmE0MjE4ZmQ1N2FjZjRlNWJkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Nq9YZXi7lRNywLBBAJU6XtkMIgjQ9ab9BkbxUa9AnU8';
@Module({
  imports: [
    HttpModule.register({
      baseURL: 'https://api.themoviedb.org/3',
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }),
  ],
  controllers: [MovieController],
  providers: [MovieService],
})
export class MovieModule {}
