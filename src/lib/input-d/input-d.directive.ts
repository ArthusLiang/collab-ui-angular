import { Directive, OnInit, Input, Output, EventEmitter, TemplateRef, ComponentRef, ComponentFactoryResolver, ViewContainerRef, OnChanges, SimpleChanges, AfterViewInit, ElementRef, HostBinding } from '@angular/core';

import { InputWrapperContainerComponent } from '../input-wrapper-container';
//TODO: Remove all unused imports at end.
//TODO: Find solution to hostbinding/adding the css classes conditionally to input element based on @Inputs.

@Directive({
  selector: '[cui-input]',
  host: {
    'class': 'cui-input'
  }
})


export class InputDDirective implements OnInit{

  @HostBinding('class.cui-input') true; //Not working as it is likely going to ng-template not <input>?


  @Input() public label: string;
  @Input() public inputHelpText: string;
  @Input() public secondaryLabel: string;
  @Input() public theme: string;


  // @HostBinding('class') get className(): string {
  //   return 'cui-input'
  // }

  private wrapperContainer: ComponentRef<InputWrapperContainerComponent>;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,

    private element: ElementRef //TODO: Remove

  ) {


   }

  ngOnInit() {

    const containerFactory = this.componentFactoryResolver.resolveComponentFactory(InputWrapperContainerComponent);
    this.wrapperContainer = this.viewContainerRef.createComponent(containerFactory);
    this.wrapperContainer.instance.template = this.templateRef;

    this.wrapperContainer.instance.label = this.label;
    this.wrapperContainer.instance.inputHelpText = this.inputHelpText;
    this.wrapperContainer.instance.secondaryLabel = this.secondaryLabel;
    this.wrapperContainer.instance.theme = this.theme;

  }

   ngOnChanges(changes: SimpleChanges){
    console.log('changes: ', changes)
  }

  ngAfterViewInit(){

  }

    get inputClasses() { //Should be Host Binding Ideally.
    return {
      // ['cui-input']: true,
      // [this.inputSize + ' columns']: this.inputSize,
      // ['cui-input-group--' + this.theme]: this.theme,
      // [this.errorType]: this.errorType,
      // ['cui-input--nested-' + this.nestedLevel]: this.nestedLevel,

      // [this.inputClassName]: this.inputClassName,
      // ['read-only']: this.readOnly,
      // ['disabled']: this.disabled,
      // ['dirty']: this.value
    };
  }

}
