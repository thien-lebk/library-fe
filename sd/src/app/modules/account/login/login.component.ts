import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AccountService} from '../../../services/account.service';
import {AlertService} from '../../../services/alert/alertService';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: any;
  loading = false;
  submitted = false;
  returnUrl: any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService,
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  // convenience getter for easy access to form fields
  // tslint:disable-next-line:typedef
  get f() { // @ts-ignore
    return this.form.controls;
  }

  onSubmit(): any {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    // @ts-ignore
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    this.accountService.login(this.f.username.value, this.f.password.value).subscribe(ele => {
      localStorage.setItem('user', JSON.stringify(ele.data.user));
      localStorage.setItem('token', JSON.stringify(ele.data.token));
      // this.user = ele.data.user;
      // this.userSubject.next(this.user);
      // return this.user;
      this.loading = false;
      // @ts-ignore
      document.getElementById('test').click();
      // window.location.reload();      // this.router.navigate([this.returnUrl], {relativeTo: this.route});
    }, error => {
      console.log(error);
    });

    // .pipe(first())
    // .subscribe(
    //   // @ts-ignore
    //   data => {
    //     console.log(2);
    //     console.log(data);
    //     this.router.navigate([this.returnUrl]);
    //   },
    //     (error: string) => {
    //     this.alertService.error(error);
    //     this.loading = false;
    //   });
  }

}
