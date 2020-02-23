import { Component, OnInit } from "@angular/core";
import { GlobalService } from "src/app/services/global/global.service";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent implements OnInit {
  opened: boolean;

  get load() {
    return this.globalSevice.load;
  }

  constructor(private globalSevice: GlobalService) {}

  ngOnInit(): void {}
}
