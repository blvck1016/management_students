<?php

namespace Database\Seeders;

use App\Models\Major;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class MajorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Major::create([
            'name' => 'Major 1',
            'department_id' => 1,
        ]);

        Major::create([
            'name' => 'Major 2',
            'department_id' => 2,
        ]);
    }
}
