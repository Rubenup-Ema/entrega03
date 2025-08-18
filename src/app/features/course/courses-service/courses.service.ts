import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Course } from '../../../shared/entities/entity';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  
  // private url = "https://curso.sunsetmanager.com/api"
  private url = "https://68a25a8ec5a31eb7bb1cc6a1.mockapi.io";

    constructor(private http:HttpClient) {


    }

    loadCourses(): Observable<Course[]> {

      return this.http.get<Course[]>(`${this.url}/course`)

    }

    addCourse(course:Course) {

       return this.http.post(`${this.url}/course`,course).pipe (

        map( data=>{

          return data;

        }

        )
      )

    }

     editCourse(course:Course) {

       return this.http.put(`${this.url}/course`,course).pipe (

        map( data=>{

          return data;

        }

        )
      )

    }

      deleteCourse(id:number) {

      return this.http.delete(`${this.url}/course?id=${id}`).pipe (

        map( data=>{

          return data;

        }

        )
      )

    }

}
