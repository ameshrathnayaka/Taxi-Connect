import { Component } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-driver-info',
  templateUrl: './driver-info.component.html',
  styleUrls: ['./driver-info.component.scss'],
  providers: [NgbRatingConfig],
})
export class DriverInfoComponent {
  currentRate = 3;
  addRate = 1;

  constructor(config: NgbRatingConfig) {
		config.max = 5;
	}
}
