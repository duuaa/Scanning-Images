import { Injectable } from '@angular/core';
declare let Dynamsoft: any;

@Injectable({
  providedIn: 'root',
})
export class ScanService {
  DWObject: any;

  constructor() {
    // Set the resources path for Dynamic Web TWAIN
    Dynamsoft.DWT.ResourcesPath = 'https://unpkg.com/dwt@latest/dist/';
    this.initializeDWT();
  }

  async initializeDWT() {
    try {
      this.DWObject = await Dynamsoft.DWT.CreateDWTObject();
      console.log('Dynamic Web TWAIN initialized');
    } catch (error) {
      console.error('Error initializing DWT:', error);
    }
  }

  acquireImage(): void {
    if (this.DWObject) {
      this.DWObject.SelectSource(
        () => {
          this.DWObject.OpenSource();
          this.DWObject.AcquireImage(() => {
            console.log('Image acquired successfully');
          });
        },
        (error: any) => {
          console.error('Error selecting source:', error);
        }
      );
    }
  }
}
