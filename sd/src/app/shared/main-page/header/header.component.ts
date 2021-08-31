import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../../services/account.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import {User} from '../../../modal/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public user: User | undefined;

  constructor(private  account$: AccountService,
              private router: Router,
              private route: ActivatedRoute,
              ) {
    this.user = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user') as string)).value;
  }

  showFiller = false;

  ngOnInit(): void {

  }

  logout(): void {
    this.account$.logout();
    window.location.reload();
    // this.router.navigate(['/'], {relativeTo: this.route});
  }
}
