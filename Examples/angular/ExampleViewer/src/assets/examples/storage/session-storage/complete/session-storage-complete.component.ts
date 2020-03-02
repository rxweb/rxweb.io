import { Component, OnInit, Injectable } from '@angular/core';
import { BrowserStorage } from '../../browser-storage';


@Component({
  selector: 'app-localstorage-complete',
  templateUrl: './session-storage-complete.component.html'
})
export class SessionStorageCompleteComponent implements OnInit {

  userName: string = "John";
  sessionStorageData: any;

  constructor(private browserStorage: BrowserStorage) {

  }
  
  ngOnInit() {
    this.browserStorage.session.save('userName', this.userName);
    this.browserStorage.session.get('userName')
  }

  get() {
    this.sessionStorageData = this.browserStorage.session.get('userName');
  }

  save() {
    this.browserStorage.session.save('userName', "Robert");
    this.sessionStorageData = this.browserStorage.session.get('userName');
  }

  clearAll() {
    this.browserStorage.session.clearAll();
    this.browserStorage.session.get('userName');
  }

  remove() {
    this.browserStorage.session.remove('userName');
  }

}
