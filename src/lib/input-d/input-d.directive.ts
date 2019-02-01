import { Directive, OnInit, Input, TemplateRef, ComponentRef, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

import { InputWrapperContainerComponent } from '../input-wrapper-container'

@Directive({
  selector: '[myWrapperDirective]'
})

export class InputDDirective implements OnInit{

  private wrapperContainer: ComponentRef<InputWrapperContainerComponent>;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    const containerFactory = this.componentFactoryResolver.resolveComponentFactory(InputWrapperContainerComponent);
    this.wrapperContainer = this.viewContainerRef.createComponent(containerFactory);
    this.wrapperContainer.instance.template = this.templateRef;
  }

}
