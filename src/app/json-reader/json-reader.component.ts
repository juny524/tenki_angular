import { Component, OnInit } from '@angular/core';
import * as data from '../../../data.json';

@Component({
  selector: 'app-json-reader',
  templateUrl: './json-reader.component.html',
  styleUrls: ['./json-reader.component.css']
})
export class JsonReaderComponent implements OnInit {
  jsonData: any;
  jsontitle: any;
  messagestring: string = "sss";
  title: string = ""; // 変数を定義
  office: string = "";
  bodyText: string = "";
  publicTimeFormatted: string = "";
  today: string = "";
  today_label: string = "";
  today_telop: string = "";
  tomorrow: string = "";
  tomorrow_label: string = "";
  tomorrow_telop: string = "";
  
  constructor() {
   }

  ngOnInit(): void {
    this.jsonData = data;
    // var jsonObject = JSON.parse(this.jsonData);
    // this.jsontitle = jsonObject["title"] ;
    // this.messagestring = "aafff";
    this.publicTimeFormatted = this.jsonData["publicTimeFormatted"];
    this.title = this.jsonData["title"];
    this.office = this.jsonData["publishingOffice"];
    this.bodyText = this.jsonData.description.bodyText;
    this.today = this.jsonData.forecasts[0].date;
    this.today_label = this.jsonData.forecasts[0].dateLabel;
    this.today_telop = this.jsonData.forecasts[0].telop;
    this.tomorrow = this.jsonData.forecasts[1].date;
    this.tomorrow_label = this.jsonData.forecasts[1].dateLabel;
    this.tomorrow_telop = this.jsonData.forecasts[1].telop;



  }

}
