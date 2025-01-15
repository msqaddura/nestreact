import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class MovieService {
  constructor(private http: HttpService) {}

  async findAll(query: string, page: string) {
    const response = await lastValueFrom(
      this.http.get(`/search/movie`, {
        params: { page, query },
      })
    );
    return response.data;
  }

  async findOne(id: string) {
    const response = await lastValueFrom(this.http.get(`/movie/${id}`));
    return response.data;
  }

  async findSimilar(id: string) {
    const response = await lastValueFrom(this.http.get(`/movie/${id}/similar`));
    return response.data;
  }
}
