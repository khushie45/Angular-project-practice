import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent {
  user: any;

  private activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      this.user = data['user']; //data['user] here user is coming from routes {user: UserResolver}
      console.log(this.user);
    });
  }
}
