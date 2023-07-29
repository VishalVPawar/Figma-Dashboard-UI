import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Chart, LinearScale, registerables } from 'chart.js';
import { TransactionService } from 'src/app/services/transaction.service';
import 'chart.js/auto';
import { Subscription } from 'rxjs';

interface Option {
  selected: boolean;
}

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss'],
})
export class PiechartComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef;

  private subscription: Subscription = new Subscription();
  chart: any;
  activeDuration: string = '';

  constructor(private dataService: TransactionService) {}

  ngOnInit(): void {
    this.activeDuration = '1M';
  }

  ngAfterViewInit(): void {
    this.loadChart(this.activeDuration);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  loadChart(activeDuration: string): void {
    this.subscription.unsubscribe(); // Unsubscribe from previous subscription

    this.subscription = this.dataService.getTransactions().subscribe((data: any) => {
      let datasets: any[] = [];
      let labels: any[] = [];

      switch (activeDuration) {
        case '1D':
          datasets = [
            {
              data: data.datasets[0].oneday.data,
              label: data.datasets[0].oneday.label,
              backgroundColor: data.datasets[0].oneday.backgroundColor,
              tension: data.datasets[0].oneday.tension,
              borderColor: data.datasets[0].oneday.borderColor,
              pointRadius: data.datasets[0].oneday.pointRadius,
            },
          ];
          labels = data.datasets[0].oneday.labels;
          break;

        case '1W':
          datasets = [
            {
              data: data.datasets[1].oneweek.data,
              label: data.datasets[1].oneweek.label,
              backgroundColor: data.datasets[1].oneweek.backgroundColor,
              tension: data.datasets[1].oneweek.tension,
              borderColor: data.datasets[1].oneweek.borderColor,
              pointRadius: data.datasets[1].oneweek.pointRadius,
            },
          ];
          labels = data.datasets[1].oneweek.labels;
          break;

        case '1M':
          datasets = [
            {
              data: data.datasets[2].onemonth.data,
              label: data.datasets[2].onemonth.label,
              backgroundColor: data.datasets[2].onemonth.backgroundColor,
              tension: data.datasets[2].onemonth.tension,
              borderColor: data.datasets[2].onemonth.borderColor,
              pointRadius: data.datasets[2].onemonth.pointRadius,
            },
          ];
          labels = data.datasets[2].onemonth.labels;
          break;

        case '6M':
          datasets = [
            {
              data: data.datasets[3].sixmonths.data,
              label: data.datasets[3].sixmonths.label,
              backgroundColor: data.datasets[3].sixmonths.backgroundColor,
              tension: data.datasets[3].sixmonths.tension,
              borderColor: data.datasets[3].sixmonths.borderColor,
              pointRadius: data.datasets[3].sixmonths.pointRadius,
            },
          ];
          labels = data.datasets[3].sixmonths.labels;
          break;

        case '1Y':
          datasets = [
            {
              data: data.datasets[4].oneyear.data,
              label: data.datasets[4].oneyear.label,
              backgroundColor: data.datasets[4].oneyear.backgroundColor,
              tension: data.datasets[4].oneyear.tension,
              borderColor: data.datasets[4].oneyear.borderColor,
              pointRadius: data.datasets[4].oneyear.pointRadius,
            },
          ];
          labels = data.datasets[4].oneyear.labels;
          break;
      }

      Chart.register(...registerables); // Register required plugins

      if (this.chart) {
        this.chart.destroy(); // Destroy the previous chart instance
      }

      this.chart = new Chart(this.chartCanvas.nativeElement, {
        type: 'line',
        data: {
          datasets: datasets,
          labels: labels,
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              type: 'linear',
              min: 0,
              max: 40000,
              ticks: {
                stepSize: 10000,
                callback: function (value: string | number) {
                  if (typeof value === 'number') {
                    return value / 1000 + 'k';
                  }
                  return value;
                },
              },
            },
            x: {
              grid: {
                drawTicks: false,
              },
            },
          },
        },
      });
    });
  }

  setActiveDuration(duration: string) {
    this.activeDuration = duration;
    this.loadChart(this.activeDuration);
  }
}
