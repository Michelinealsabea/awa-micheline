import { Component, OnInit } from '@angular/core';
import {bookclass} from '../modules/bookclass.module';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public book_data: bookclass[] = [
    {
      id: 1,
      cname: "c++",
      trainer : "adnan saad",
      cost: 2000,
      hours_num: 20,
      course_type: "programming",
      stu_nums: 12,
      start_date: "01/12/2017",
      end_date: "01/01/2018"
      },
    {
      id: 2,
      cname: "Http Protocol",
      trainer : "micheline saad",
      cost: 5000,
      hours_num: 10,
      course_type: "networking",
      stu_nums: 5,
      start_date: "01/12/2017",
      end_date: "01/01/2018"
    } ,
    {
      id: 3,
      cname: "AngularJS",
      trainer : "yara hamoud",
      cost: 15000,
      hours_num: 10,
      course_type: "programming",
      stu_nums:10,
      start_date: "01/12/2018",
      end_date: "01/09/2018"
    } ,
    {
      id: 4,
      cname: "ICDL",
      trainer : "nadia haddad",
      cost: 2000,
      hours_num: 10,
      course_type: "programming",
      stu_nums:10,
      start_date: "01/12/2018",
      end_date: "01/09/2018"
    },
    {
      id: 5,
      cname: "Aid",
      trainer : "samer tamer",
      cost: 50000,
      hours_num: 10,
      course_type: "medical",
      stu_nums:10,
      start_date: "01/12/2018",
      end_date: "01/09/2018"
    },
    {
      id: 4,
      cname: "medicines",
      trainer : "nadia haddad",
      cost: 2000,
      hours_num: 10,
      course_type: "medical",
      stu_nums:10,
      start_date: "01/12/2018",
      end_date: "01/09/2018"
    }
   ];
  constructor() { }

  ngOnInit() {
  }

}
