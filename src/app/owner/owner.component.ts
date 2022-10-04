import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Owner } from '../../types';
import { LoginService } from '../login.service';
import { OwnerService } from '../owner.service';

@Component({
  selector: 'app-home',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css'],
  providers: [OwnerService]
})
export class OwnerComponent implements OnInit {
  owners: Owner[] = [];

  constructor(
    private ownerService: OwnerService,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!this.loginService.isLoggedin()) {
      this.router.navigate(['login']);
    }
    this.ownerService.getOwners().subscribe((data: Owner[]) => {
      console.log(data)
      this.owners = data
    });
  }
}
