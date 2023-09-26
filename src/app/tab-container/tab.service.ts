// tab.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TabService {
  private selectedTabIndex = 0;

  setSelectedTabIndex(index: number) {
    this.selectedTabIndex = index;
  }

  getSelectedTabIndex() {
    return this.selectedTabIndex;
  }
}
