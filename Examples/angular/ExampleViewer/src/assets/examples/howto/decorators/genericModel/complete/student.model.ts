import {  prop, propArray} from "@rxweb/reactive-form-validators"


  export class Course{
    @prop()
    courseId : number;
  }
  export abstract class Student<T> extends Course {
      @propArray() SubjectDetails: T[];
  }

  export class Subjects {
      @prop()
      enrollmentNumber: number;
  }

  export class StudentCourse extends Student<Subjects> {

  }