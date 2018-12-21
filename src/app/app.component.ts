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

  public bar = {
    one: "2px",
    two: "4px",
    three: "6px",
    four: "10px",
  }

  onSelect(e) {
    this.bar[e.target.name] = e.target.value + "px";
  }
}
