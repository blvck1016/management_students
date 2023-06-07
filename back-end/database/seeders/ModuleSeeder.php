<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ModuleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $modules = [
            [
                'name' => 'Module A',
                'semester_id' => 1,
            ],
            [
                'name' => 'Module B',
                'semester_id' => 1,
            ],
            [
                'name' => 'Module C',
                'semester_id' => 2,
            ],
            // Add more modules as needed
        ];

        DB::table('modules')->insert($modules);
    }
}
