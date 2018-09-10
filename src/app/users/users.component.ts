import { Component, OnInit } from '@angular/core';
import {UserClass} from '../modules/userclass.module' ;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

 public users_data: UserClass[] = [
  {id: 1,
    firstname: 'nirmeen',
    lastname : 'alsabea',
    email: 'nana@gmail.com',
    sex: 'Female',
    path: '/own_style/images/female.png',
    experience: 10,
    degree: 'Agri',
    address: 'Syria - Homs',
    skil1: 'c',
    skil2: 'IOS',
    skil3: 'c++',
    skil4: 'photoshop'
  },
  {id: 2,
  firstname: 'hadi',
  lastname : 'nader',
  email: 'haya@gmail.com',
  sex: 'Male',
  path: '/own_style/images/male.png',
  experience: 8,
  degree: 'IT',
  address: 'Syria - Homs',
  skil1: 'netbeans',
  skil2: 'java',
  skil3: 'c++',
  skil4: 'python'
},
{id: 4,
  firstname: 'salem',
  lastname : 'madian',
  email: 'salem@gmail.com',
  sex: 'Male',
  path: '/own_style/images/male.png',
  experience: 5,
  degree: 'Economic',
  address: 'Syria - Homs',
  skil1: 'Spss',
  skil2: 'Python',
  skil3: 'albayan',
  skil4: 'accouting'
},
{id: 3,
  firstname: 'haytham',
  lastname : 'najat',
  email: 'chheithem@gmail.com',
  sex: 'Male',
  path: '/own_style/images/male.png',
  experience: 11,
  degree: 'It institute',
  address: 'Syria - Homs',
  skil1: 'office',
  skil2: 'os',
  skil3: 'illustrator',
  skil4: 'photoshop'
},
{id: 5,
  firstname: 'nadia',
  lastname : 'barakat',
  email: 'nadia@gmail.com',
  sex: 'Female',
  path: '/own_style/images/female.png',
  experience: 11,
  degree: 'arch',
  address: 'Syria - Homs',
  skil1: 'autocad',
  skil2: 'corel',
  skil3: 'icdl',
  skil4: 'photoshop'
},
{id: 6,
  firstname: 'sameer',
  lastname : 'tamer',
  email: 'samer@gmail.com',
  sex: 'Male',
  path: '/own_style/images/male.png',
  experience: 2,
  degree: 'Institute',
  address: 'Syria - Homs',
  skil1: 'office',
  skil2: 'word',
  skil3: 'excel',
  skil4: 'os'
},
 ];

  constructor() { }

  ngOnInit() {
  }

}
