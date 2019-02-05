import { Component, Input, Output, EventEmitter, TemplateRef, OnInit, ViewChild, AfterViewInit, ElementRef, Renderer2, ViewContainerRef, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';

//TODO: Remove all unused imports at end.

//import { InputDDirective } from '../input-d/input-d.directive'

@Component({
  selector: 'input-wrapper',
  templateUrl: './input-wrapper.component.html'
})
export class InputWrapperContainerComponent implements OnInit{


  @Input() template: TemplateRef<any>;

  // @ViewChild('testRef') testRef: ElementRef ;

  public label;
  public inputHelpText: string = "";
  public secondaryLabel: string = "";
  public theme: string;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private cd: ChangeDetectorRef   //TODO: Remove All

  ){ }

    ngOnInit() {

    }

    ngOnChanges(changes: SimpleChanges){

      }

    ngAfterViewInit() {

    }


}
