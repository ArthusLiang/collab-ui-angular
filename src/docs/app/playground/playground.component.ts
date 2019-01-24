import { Component, OnInit } from '@angular/core';
import { AlertService } from '@collab-ui/angular';

@Component({
  selector: 'docs-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {
  key: string;
  constructor(private alertService: AlertService) {}

  showAlert() {
    this.key = this.alertService.info('Alert', 'Who\'s awesome?  You are!');
  }

  hideAlert() {
    this.alertService.hide(this.key);
  }


  ngOnInit() {}


}
