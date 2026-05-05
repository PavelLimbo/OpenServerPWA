import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpService } from './service/http-service';
import { FormsModule } from '@angular/forms';
import { ImageUploaderComponent } from './components/image-uploader-component/image-uploader-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, ImageUploaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  
}
