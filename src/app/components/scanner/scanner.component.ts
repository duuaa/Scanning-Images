import { Component, OnInit } from '@angular/core';
import { ScanService } from 'src/app/services/scan.service';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
})
export class ScannerComponent implements OnInit {
  constructor(private scanService: ScanService) {}

  scanImage() {
    this.scanService.acquireImage();
  }

  ngOnInit() {}
}
