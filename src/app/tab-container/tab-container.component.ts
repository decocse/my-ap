import { Route,ActivatedRoute,Router } from '@angular/router';
import { Component,OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { TabService } from './tab.service';
import { MatTabChangeEvent } from '@angular/material/tabs';
@Component({
  selector: 'app-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.css']
})
export class TabContainerComponent implements OnInit{
  public selectedTabIndex = 0; // Set the default tab to Angular
  
  constructor(private router:Router,private route:ActivatedRoute,private tabService: TabService){}
  ngOnInit() {
    // Get the selected tab index from the service
    const selectedTabIndex = this.tabService.getSelectedTabIndex();
    this.selectedTabIndex = selectedTabIndex !== undefined ? selectedTabIndex : 0;
  }
  // Function to change the selected tab index
  onTabChange(event: MatTabChangeEvent) {
    // Update the selected tab index when the tab changes
    this.selectedTabIndex = event.index;
    // Update the selected tab index in the service
    this.tabService.setSelectedTabIndex(this.selectedTabIndex);
  }

  onselect()
  {
    this.router.navigate(['/tabpage'])
  }
}
