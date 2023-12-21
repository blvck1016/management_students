<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Seeders\RoleSeeder;
use Database\Seeders\UserSeeder;
use Database\Seeders\AdminSeeder;
use Database\Seeders\MajorSeeder;
use Database\Seeders\StudentSeeder;
use Database\Seeders\TeacherSeeder;
use Database\Seeders\AttendancesSeeder;
use Database\Seeders\DepartmentsSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run()
    {
        $this->call(RoleSeeder::class);
        $this->call(DepartmentsSeeder::class);
        $this->call(MajorSeeder::class);
      //  $this->call(UserSeeder::class);
        $this->call(AdminSeeder::class);
       // $this->call(TeacherSeeder::class);
       // $this->call(StudentSeeder::class);
        $this->call(SemesterSeeder::class);
       // $this->call(ModuleSeeder::class);
       // $this->call(AttendancesSeeder::class);
    }
}
