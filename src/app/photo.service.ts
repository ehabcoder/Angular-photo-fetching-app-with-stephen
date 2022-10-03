import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http'

interface unsplashResponse {
  urls: {
    regular: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  api = 'https://api.unsplash.com/photos/random';
  constructor(private http: HttpClient) { }

  getRandomPhoto() {
    return this.http.get<unsplashResponse>(this.api, {
      headers: {
        'Authorization': 'Client-ID DAhTk9TQbHPx208AkOiWvHEiaBIoF5gJgh0XzpFCfFo'
      }
    })
  }
}
