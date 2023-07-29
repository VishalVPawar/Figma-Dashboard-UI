import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Analytics } from '../components/analytics/analytics';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  status: string[] = ['India', 'Canada', 'Russia','America'];
  analyticsNames: string[] = ["Netflix","Spotify","Figma","Shopify"];

  private readonly dbUrl = 'assets/db.json';
  constructor(private http: HttpClient) {}

  getProductsSmall() {
    return this.http.get<any>(this.dbUrl)
    .toPromise()
    .then(res => <Analytics[]>res.data)
    .then(data => { return data; });
}
generateAnalytics(): Analytics {
  const analytics: Analytics =  {
      id: this.generateId(),
      name: "Analytics name",
      price: this.generatePrice(),
      country: "Analytics country",
      inventoryStatus: this.generateStatus()
     
  };

  if (analytics.name) {
    analytics.image = analytics.name.toLowerCase().split(/[ ,]+/).join('-') + ".jpg";
  } else {
    // Provide a default image name if 'name' is not available
    analytics.image = "default-image.jpg";
  }

  return analytics;
}
generateId() {
  let text = "";
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
  for (var i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  
  return text;
}
generatePrice() {
  return Math.floor(Math.random() * Math.floor(299)+1);
}
generateStatus() {
  return this.status[Math.floor(Math.random() * Math.floor(3))];
}

}
