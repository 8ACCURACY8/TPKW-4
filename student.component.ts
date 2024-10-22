import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: Student[] = [];
  student: Student = { id: 0, name: '', dateOfBirth: '', email: '' };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.http.get<Student[]>('/api/students')
      .subscribe(students => this.students = students);
  }

  addStudent(): void {
    this.http.post<Student>('/api/students', this.student)
      .subscribe(createdStudent => {
        this.students.push(createdStudent);
        this.student = { id: 0, name: '', dateOfBirth: '', email: '' };
      });
  }

  editStudent(student: Student): void {
    this.student = student;
  }

  deleteStudent(id: number): void {
    this.http.delete(`/api/students/${id}`)
      .subscribe(() => this.students = this.students.filter(s => s.id !== id));
  }
}
