import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data/data.service';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  people: Array<any> = [];
  constructor(private dataService: DataService, private navCtrl: NavController, private authService: AuthService) {
  }

  ngOnInit() {
    this.dataService.getPeopleList()
      .subscribe((people: any) => {
        this.people = people;
      });
  }

  openPerson(index) {
    this.navCtrl.navigateForward(`/person/${index}`);
  }
}
