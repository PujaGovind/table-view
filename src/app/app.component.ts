import { AgGridAngular } from "ag-grid-angular";
import { ColDef, GridReadyEvent } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Service } from "../service";

// Row Data Interface
interface IRow {
  mission: string;
  company: string;
  location: string;
  date: string;
  time: string;
  rocket: string;
  price: number;
  successful: boolean;
}

@Component({
  standalone: true,
  imports: [AgGridAngular],
  selector: "app-root",
  templateUrl: './app.component.html',
})

export class AppComponent {
  themeClass =
    "ag-theme-quartz-dark";
  rowData: IRow[] = [];

  colDefs: ColDef[] = [
    { field: "mission" },
    { field: "company" },
    { field: "location" },
    { field: "date" },
    { field: "price" },
    { field: "successful" },
    { field: "rocket" },
  ]

  constructor(private http: HttpClient, private service: Service) { }

  onGridReady(params: GridReadyEvent) {
    this.service.fetchData().subscribe((res) => (this.rowData = res))
  }

}
