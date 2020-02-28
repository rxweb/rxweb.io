import { Component, OnInit, Injectable } from '@angular/core';
import { BrowserStorage } from '../../browser-storage';


@Component({
  selector: 'app-session-storage-complete',
  templateUrl: './session-storage-complete.component.html'
})
export class SessionStorageCompleteComponent implements OnInit {

  userName: string = "John";
  sessionStorageData: any;

  constructor(private browserStorage: BrowserStorage) {
    this.browserStorage.session.save('user', this.userName);
    this.browserStorage.session.get('userName')
  }
  
  ngOnInit() {
    this.sessionStorageData = this.browserStorage.session.get('userName');
  }

  get() {
    this.sessionStorageData = this.browserStorage.session.get('userName');
  }

  save() {
    this.browserStorage.session.save('userName', "Robert", false);
    this.browserStorage.session.get('userName');
  }

  clearAll() {
    this.browserStorage.session.clearAll();
    this.browserStorage.session.get('userName');
  }

  remove() {
    this.browserStorage.session.remove('userName');
  }

}
