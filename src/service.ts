import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })

export class Service {

  constructor(private http: HttpClient) { }

  private url = 'https://www.ag-grid.com/example-assets/space-mission-data.json'

  fetchData(): Observable<any[]> {
    console.log("at service")
    return this.http.get<any[]>(this.url)
  }

}