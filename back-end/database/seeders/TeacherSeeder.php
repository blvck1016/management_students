<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class TeacherSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $teachers = [
            [
                'name' => 'Teacher 1',
                'email' => 'teacher1@gmail.com',
                'department_id' => 1,
                'user_id' => 1,
            ],
            [
                'name' => 'Teacher 2',
                'email' => 'teacher2@gmail.com',
                'department_id' => 2,
                'user_id' => 2,
            ],
            // Add more teachers as needed
        ];

        foreach ($teachers as $teacher) {
            DB::table('teachers')->insert($teacher);
        }
    }
}
