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
            'name' => 'CLE',
            'department_id' => 1,
        ]);

        Major::create([
            'name' => 'TMW',
            'department_id' => 1,
        ]);
    }
}
