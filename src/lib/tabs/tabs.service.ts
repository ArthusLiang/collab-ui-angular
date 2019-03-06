import { Injectable } from '@angular/core';
import { Subject, of } from 'rxjs';

@Injectable()
export class TabsService {

  private Pane = 0;
  private Tabs = 0;
  private currentTabValue = 0;
  private currentFocusValue = 0;
  private TabDic = {};

  private current = new Subject<number>();
  current$ = this.current.asObservable();
  private focusIndex = new Subject<number>();
  focusIndex$ = this.focusIndex.asObservable();

  constructor() {
    this.current$.subscribe( index => {
      this.currentTabValue = index;
    });
    this.focusIndex$.subscribe( index => {
      this.currentFocusValue = index;
    });
  }

  public registerPane = () => {
    return this.Pane++;
  }
  public registerTab = () => {
    return this.Tabs++;
  }

  public registerKey = (key, value) => {
    key = key.toLowerCase();
    if ( this.TabDic[key] === undefined) {
      this.TabDic[key] = [];
    }
    this.TabDic[key].push(value);
  }

  public select = (index) => {
    this.setFocus(index);
    this.current.next(index);
  }

  public selectFocus = (index) => {
    if (this.currentFocusValue !== this.currentTabValue) {
        this.current.next(this.currentFocusValue);
    }
  }

  public setFocus = (index) => {
    this.focusIndex.next(index);
  }

  public setFocusPre = () => {
    this.setFocus(Math.max(0, this.currentFocusValue - 1));
  }

  public setFocusNext = () => {
    this.setFocus(Math.min(this.Tabs, this.currentFocusValue + 1));
  }

  public setFocusLast = () => {
    this.setFocus(this.Tabs - 1);
  }

  public setFocusByFirstCharacter = (key) => {
    key = key.toLowerCase();
    const arr = this.TabDic[key];
    let index,
      length,
      tabIndex  = this.currentFocusValue;
    if (arr !== undefined) {
      length = arr.length;
      index = arr.indexOf(this.currentFocusValue);
      if (index !== -1 && length > 1 && index + 1 < length) {
        tabIndex = arr[index + 1];
      } else {
        tabIndex = arr[0];
      }
    }
    if (tabIndex !== this.currentFocusValue) {
      this.setFocus(tabIndex);
      return true;
    }
    return false;
  }
}
