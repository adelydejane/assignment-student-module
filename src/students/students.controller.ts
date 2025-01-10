import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { StudentsService } from './students.service';
import { Student } from './students.entity';

@Controller('students')
export class StudentsController {
    constructor(private readonly studentService: StudentsService) {}

        // FUNCTION (CREATE STUDENTS)
        @Post()
        async createStudent(@Body() data: Partial<Student>): Promise<Student> {
            return this.studentService.createStudent(data);
        }

        // FUNCTION (READ STUDENTS)
        @Get()
        async getStudent(): Promise<Student []> {
            return this.studentService.getStudents();
        }
        @Get(':id')
        async getStudentById(@Param('id') id: number): Promise<Student> {
            return this.studentService.getStudentById(id);
        }
}
