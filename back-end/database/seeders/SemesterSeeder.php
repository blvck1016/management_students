<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class SemesterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $semesters = [
            [
                'name' => 'S1',
                'major_id' => 1,
            ],
            [
                'name' => 'S2',
                'major_id' => 1,
            ],
            [
                'name' => 'S3',
                'major_id' => 2,
            ], 
            [
                'name' => 'S4',
                'major_id' => 2,
            ], 
            [
                'name' => 'S5',
                'major_id' => 2,
            ],
            [
                'name' => 'S6',
                'major_id' => 2,
            ],
            // Add more semesters as needed
        ];

        DB::table('semesters')->insert($semesters);
    }
}
