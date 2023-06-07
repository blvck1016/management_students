<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class StudentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $students = [
            [
                'name' => 'Student 1',
                'major_id' => 1,
                'email' => 'student1@gmail.com',
                'user_id' => 3,
            ],
            [
                'name' => 'Student 2',
                'email' => 'student2@gmail.com',
                'major_id' => 2,
                'user_id' => 4,
            ],
            // Add more students as needed
        ];

        foreach ($students as $student) {
            DB::table('students')->insert($student);
        }
    }
}
