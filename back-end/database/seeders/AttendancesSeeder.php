<?php

namespace Database\Seeders;

use App\Models\Attendance;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class AttendancesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Attendance::create([
            'date' => '2023-06-01',
            'student_id' => 1,
            'module_id' => 1,
            'presence' => true,
        ]);

        Attendance::create([
            'date' => '2023-06-02',
            'student_id' => 2,
            'module_id' => 1,
            'presence' => false,
        ]);
    }
}
