import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Router, NavigationStart} from '@angular/router';
import {AlertService} from '../../services/alert/alertService';
import {Alert, AlertType} from '../../modal/Alert/Alert';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-alert-basic',
  templateUrl: './alert-basic.component.html',
  styleUrls: ['./alert-basic.component.scss']
})
export class AlertBasicComponent implements OnInit, OnDestroy {
  @Input() id = 'default-alert';
  @Input() fade = true;

  alerts: Alert[] = [];
  alertSubscription: Subscription | undefined;
  routeSubscription: Subscription | undefined;

  constructor(private router: Router, private alertService: AlertService,
  ) {
  }

  ngOnInit(): void {

    // subscribe to new alert notifications
    this.alertSubscription = this.alertService.onAlert(this.id)
      .subscribe(alert => {
        // clear alerts when an empty alert is received
        if (!alert.message) {
          // filter out alerts without 'keepAfterRouteChange' flag
          this.alerts = this.alerts.filter(x => x.keepAfterRouteChange);
          // remove 'keepAfterRouteChange' flag on the rest
          this.alerts.forEach(x => delete x.keepAfterRouteChange);
          return;
        }

        // add alert to array
        this.alerts.push(alert);

        // auto close alert if required
        setTimeout(() => this.removeAlert(alert), 5000);
      });

    // clear alerts on location change
    this.routeSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.alertService.clear(this.id);
      }
    });
  }

  ngOnDestroy(): void {
    // unsubscribe to avoid memory leaks
    // @ts-ignore
    this.alertSubscription.unsubscribe();
    // @ts-ignore
    this.routeSubscription.unsubscribe();
  }

  removeAlert(alert: Alert): void {
    // check if already removed to prevent error on auto close
    if (!this.alerts.includes(alert)) {
      return;
    }

    if (this.fade) {
      // fade out alert
      // @ts-ignore
      this.alerts.find(x => x === alert).fade = true;

      // remove alert after faded out
      setTimeout(() => {
        this.alerts = this.alerts.filter(x => x !== alert);
      }, 250);
    } else {
      // remove alert
      this.alerts = this.alerts.filter(x => x !== alert);
    }
  }

  cssClass(alert: Alert): string {

    // if (!alert) {
    //   return;
    // }

    const classes = ['alert', 'alert-dismissable', 'mt-4', 'container'];

    const alertTypeClass = {
      [AlertType.Success]: 'alert alert-success',
      [AlertType.Error]: 'alert alert-danger',
      [AlertType.Info]: 'alert alert-info',
      [AlertType.Warning]: 'alert alert-warning'
    };

    // @ts-ignore
    classes.push(alertTypeClass[alert.type]);

    if (alert.fade) {
      classes.push('fade');
    }

    return classes.join(' ');
  }

}
