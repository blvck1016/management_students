<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DepartementManagerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $departmentManagers = [
            [
                'name' => 'Department Manager 1',
                'department_id' => 1,
                'user_id' => 5,
            ],
            [
                'name' => 'Department Manager 2',
                'department_id' => 2,
                'user_id' => 6,
            ],
            // Add more department managers as needed
        ];

        foreach ($departmentManagers as $manager) {
            DB::table('department_managers')->insert($manager);
        }
    }
}
