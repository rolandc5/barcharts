import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'barchart';
  public yellow = "yellow";
  public solid="solid";
  public height="5em";

  public endpoint="196, 33";

  radius = {
    y: 0,
    x: 115,
  }

  arcPoint = {
    y: 230,
    x: 115
  }

  
  // radius = {
  //   y: 0,
  //   x: 115,
  // }

  // public arcPoint = {
  //   y: 115,
  //   x: 230
  // }

  public bar = {
    one: "2px",
    two: "4px",
    three: "6px",
    four: "10px",
  }

  public slices = [
    { value: 80 },
    { value: 1000 },
    { value: 20 },
  ];

  cumulativePercent = 0;
  sum = 0;
  public pieData = [
  ];
  
  onSelect(e) {
    this.bar[e.target.name] = e.target.value + "px";
  }

  getCoordinates(percent) {
    const x = Math.cos(2 * Math.PI * percent);
    const y = Math.sin(2 * Math.PI * percent);
    return [x, y];
  }

  turnToPercent() {
    let sum = 0;
    for (let i = 0; i < this.slices.length; i++) {
      sum += this.slices[i].value;
    }
    return sum;
  }

  changePieValue(e) {
  }

  displayPie() {
    this.slices.forEach(slice => {
      const [startX, startY] = this.getCoordinates(this.cumulativePercent);
      this.cumulativePercent +=  slice.value / this.turnToPercent();
      const [endX, endY] = this.getCoordinates(this.cumulativePercent);
      const largeArcFlag =  slice.value / this.turnToPercent() > .5 ? 1 : 0;
      const pathData = [ 
        `M ${startX} ${startY}`, // Move
        `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc
        `L 0 0`, // Line
      ].join(' ');
      this.pieData.push(pathData);
    });
  }
  ngOnInit() {
    this.displayPie();
  }
 }
