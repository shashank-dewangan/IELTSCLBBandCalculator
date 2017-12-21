import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {

  constructor() { }

  getCourses(){
    return ['course 1','course 2','course 3','course 4','course 5'];
  }
}
