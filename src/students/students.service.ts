import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './students.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentsService {
    constructor(
        @InjectRepository(Student)
        private readonly studentRepository: Repository<Student>,
    ) {} 
    
    // FUNCTION (CREATE STUDENT)
    async createStudent(data: Partial<Student>): Promise<Student> {
        const student = this.studentRepository.create(data);
        return this.studentRepository.save(student);
    }

    // FUNCTION (READ STUDENT)
    async getStudents (): Promise<Student[]> {
        return this.studentRepository.find();
    }

    async getStudentById(id: number): Promise<Student> {
        const student = await this.studentRepository.findOneBy({ id });
        if (!student) {
            throw new NotFoundException ('Sorry but Student not found!');
        }

        return student;
    }

    // FUNCTION (UPDATE STUDENT)
    async updateStudent(id: number, data: Partial<Student>): Promise<Student> {
        const student = await this.getStudentById(id);
        Object.assign(student, data);
        return this.studentRepository.save(student);
    }

}
