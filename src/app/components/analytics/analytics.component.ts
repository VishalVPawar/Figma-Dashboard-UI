import { Component } from '@angular/core';
import { Analytics } from './analytics';
import {MessageService} from 'primeng/api';
import { SelectItem } from 'primeng/api';
import { AnalyticsService } from 'src/app/services/analytics.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css'],
  providers: [MessageService]
})
export class AnalyticsComponent {
  
  analytics1!: Analytics[];
  analytics2!: Analytics[];
  statuses!: SelectItem[];
  analyticsNames!: SelectItem[];
  clonedAnalytics: { [s: string]: Analytics; } = {};
  constructor(private analyticsService: AnalyticsService, private messageService: MessageService) { }

  ngOnInit() {
    
      this.analyticsService.getProductsSmall().then(data => this.analytics1 = data);
      this.analyticsService.getProductsSmall().then(data => this.analytics2 = data);
      this.statuses = [{label: 'India', value: 'India'},{label: 'Canada', value: 'Canada'},{label: 'Russia', value: 'Russia'},{label: 'America', value: 'America'}];
      this.analyticsNames=[{label: 'Netflix', value: 'Netflix'},{label: 'Spotify', value: 'Spotify'},{label: 'Figma', value: 'Figma'},{label: 'Shopify', value: 'Shopify'}]
  }

  onRowEditInit(analytics: Analytics) {
      this.clonedAnalytics[analytics.id!] = {...analytics};
  }

  onRowEditSave(analytics: Analytics) {
      if (analytics.price! > 0) {
          delete this.clonedAnalytics[analytics.id!];
          this.messageService.add({severity:'success', summary: 'Success', detail:'analytics is updated'});
      }  
      else {
          this.messageService.add({severity:'error', summary: 'Error', detail:'Invalid Price'});
      }
  }

  onRowEditCancel(analytics: Analytics, index: number) {
    const analyticsId = Number(analytics.id);
    
        this.analytics2[index] = this.clonedAnalytics[analyticsId];
        delete this.analytics2[analyticsId];
    
}


}
