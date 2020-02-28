import { Component, OnInit, Injectable } from '@angular/core';
import { BrowserStorage } from '../../browser-storage';

@Component({
  selector: 'app-local-storage-complete',
  templateUrl: './local-storage-complete.component.html'
})
export class LocalStorageCompleteComponent implements OnInit {

  userName: string = "John";
  localStorageData: any;

  constructor(private browserStorage: BrowserStorage) {}
  
  ngOnInit() {
    this.browserStorage.local.save('userName', "John", false);
    this.browserStorage.local.get('userName')
  }

  get() {
    this.localStorageData = this.browserStorage.local.get('userName');
  }

  save() {
    this.browserStorage.local.save('userName', "Robert", false);
    this.browserStorage.local.get('userName');
  }

  clearAll() {
    this.browserStorage.local.clearAll();
    this.browserStorage.local.get('userName');
  }

  remove() {
    this.browserStorage.local.remove('userName');
    this.browserStorage.local.get('userName');
  }

}
