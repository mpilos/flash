import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
isOn:boolean;
  constructor(public navCtrl: NavController,private Platform:Platform,private flash:Flashlight ) {
    this.Platform.ready().then(()=>{
    this.udateflashlight();
    })

  }
switchon():void{
this.flash.switchOn();
this.udateflashlight();
}
switchoff():void{
  this.flash.switchOff();
  this.udateflashlight();
  }
  toggle():void{
    this.flash.toggle();
    this.udateflashlight();
    } 
    udateflashlight():void{
    this.isOn=this.flash.isSwitchedOn();

    }
}
