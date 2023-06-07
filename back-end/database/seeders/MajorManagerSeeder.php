<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class MajorManagerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $majorManagers = [
            [
                'name' => 'Major Manager 1',
                'major_id' => 1,
                'user_id' => 7,
            ],
            [
                'name' => 'Major Manager 2',
                'major_id' => 2,
                'user_id' => 8,
            ],
            // Add more major managers as needed
        ];

        foreach ($majorManagers as $manager) {
            DB::table('major_managers')->insert($manager);
        }
    }
}
