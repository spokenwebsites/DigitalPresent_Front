import { Component, OnInit } from '@angular/core';
import edge_bundlingJson from '../../assets/js/Topten.json';
import { HttpClient } from "@angular/common/http";
// import { stat } from 'fs';
declare function get_edge_bund_json(json): any;

 interface RootObject {
  name: string;
  type: string;
  imports: string[];
}

@Component({
  selector: 'app-viz2',
  templateUrl: './viz2.component.html',
  styleUrls: ['./viz2.component.css']
})



export class Viz2Component implements OnInit {

  ngOnInit(): void {
    this.loadJsFile("assets/js/d3.min.js");
    this.loadJsFile("assets/js/d3.v4.js")
    
     //this.loadJsFile("assets/js/Topten.json")
   //  console.log(this.Events)
  }
  public events: Array<object> = [];
  constructor(private http: HttpClient){
    this.http.get<any>('assets/js/Topten.json')
    .subscribe(
        data => {      
            get_edge_bund_json(data);
        },
        error => {
            console.log(error);
        }
    );
  }
  public loadJsFile(url) {
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

}
