import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource} from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})


export class PhotoService {
    public photos: Photo[] = [];      
    construtor() { }

    public async addNewToGallery() {
  // Take a photo
     const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
  });
          
    this.photos.unshift({
      filepath: 'soon...',
      webviewPath: capturedPhoto.webPath
});
}
  }
      export interface Photo {
       filepath: string;
       webviewPath: string;
}
//33:31 minutos de aula
//Parou aqui 52:40 minutos de aula