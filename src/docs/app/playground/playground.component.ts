import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'docs-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  dataModel: string = 'ngModel Test';

}
