import { Component } from '@angular/core';

@Component({
  selector: 'app-image-uploader-component',
  imports: [],
  templateUrl: './image-uploader-component.html',
  styleUrl: './image-uploader-component.css',
})
export class ImageUploaderComponent {
  fileName = "";
  images: { base64: string }[] = [];
  filesCount = 0;
  onFileSelected(event: any) {
    console.log(event.target.files.length);
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      if (files[i]) {
        this.fileName = files[i].name;
        if (!files[i].type.startsWith('image/')) {
          alert("Please select only image file");
          return;
        }
        this.filesCount++;
        const reader = new FileReader();
        reader.onload = () => {
          const base64 = reader.result as string;
          this.images.push({ base64 });
            console.log(this.images);
        }
        reader.readAsDataURL(files[i]);
      }
    }
  }
}
