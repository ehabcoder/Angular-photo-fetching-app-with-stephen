import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  imageUrl = '';

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.getPhoto();
  }

  getPhoto() {
    this.photoService.getRandomPhoto().subscribe(res => {
      this.imageUrl = res.urls.regular;
    })
  }
}
