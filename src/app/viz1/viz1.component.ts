import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

declare function get_condegram_json(json): any;

@Component({
  selector: 'app-viz1',
  templateUrl: './viz1.component.html',
  styleUrls: ['./viz1.component.css']
})
export class Viz1Component implements OnInit {

  constructor(private http: HttpClient){
    this.http.get<any>('assets/js/Spiralcondegram_final.json')
    .subscribe(
        data => {      
          get_condegram_json(data);
        },
        error => {
            console.log(error);
        }
    );
  }
  
  ngOnInit(): void {
    this.loadJsFile("assets/js/d3.min.js");
    this.loadJsFile("assets/js/d3.v4.js")
   
     this.loadJsFile("assets/js/Condegram_main.js");
  }
  public loadJsFile(url) {
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}
