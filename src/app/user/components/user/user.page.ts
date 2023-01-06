import { Component, OnInit } from '@angular/core';
import { combineLatest, map } from 'rxjs';
import { UserStore } from '../../user.store';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
  providers: [UserStore],
})
export class UserPage implements OnInit {
  vm$ = combineLatest([this.store.logoutModalIsOpen$]).pipe(
    map(([logoutModalIsOpen]) => ({ logoutModalIsOpen }))
  );
  constructor(protected store: UserStore) {}

  ngOnInit() {}

  logout(): void {
    this.closeModal();
    this.store.logout();
  }

  closeModal() {
    this.store.setLogOutModalOpen(false);
  }
}
