import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bg-animated-clouds',
  templateUrl: './bg-animated-clouds.component.html',
  styleUrls: ['./bg-animated-clouds.component.css']
})
export class BgAnimatedCloudsComponent implements OnInit {

  positions: string[];
  durations: string[];
  delays: string[];
  svgs: string[] = [
    "../../assets/svgs/big_cloud_2.svg",
    "../../assets/svgs/big_cloud.svg",
    "../../assets/svgs/big_cloud.svg",
    "../../assets/svgs/big_cloud.svg",
    "../../assets/svgs/big_cloud_2.svg",
    "../../assets/svgs/big_cloud_2.svg",
    "../../assets/svgs/big_cloud_2.svg",
    "../../assets/svgs/small_cloud_2.svg",
    "../../assets/svgs/small_cloud_2.svg",
    "../../assets/svgs/small_cloud_2.svg"
  ];
  min_duration_ss: number;
  max_duration_ss: number;
  max_delay_ss: number;

  constructor() {
    this.positions = [];
    this.durations = [];
    this.delays = [];
    this.min_duration_ss = 10;
    this.max_duration_ss = 15;
    this.max_delay_ss = 3;
  }

  initVectors(n: number){
    for(let i=0; i<n; i++){
      let pos = Math.random()*100;
      let dur = (Math.random()*this.max_duration_ss)+this.min_duration_ss;
      let del = Math.random()*this.max_delay_ss;

      this.positions.push(pos.toString()+"%");
      this.durations.push(dur.toString()+"s");
      this.delays.push(del.toString()+"s");
    }
  }

  ngOnInit(): void {
    this.initVectors(this.svgs.length);

  }

}
