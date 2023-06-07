<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $adminRole = Role::where('name', 'admin')->first();
        $teacherRole = Role::where('name', 'teacher')->first();
        $studentRole = Role::where('name', 'student')->first();
        $dmanager = Role::where('name', 'department_manager')->first();
        $mjmanager = Role::where('name', 'major_manager')->first();

        User::create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
            'password' => bcrypt('password'),
            'role_id' => $adminRole->id,
        ]);

        User::create([
            'name' => 'Teacher User',
            'email' => 'teacher@example.com',
            'password' => bcrypt('password'),
            'role_id' => $teacherRole->id,
        ]);

        User::create([
            'name' => 'Student User',
            'email' => 'student@example.com',
            'password' => bcrypt('password'),
            'role_id' => $studentRole->id,
        ]);
        User::create([
            'name' => 'Departement Manager',
            'email' => 'manager_departement@example.com',
            'password' => bcrypt('password'),
            'role_id' => $dmanager->id,
        ]);  
        User::create([
            'name' => 'Major Manager',
            'email' => 'manager_major@example.com',
            'password' => bcrypt('password'),
            'role_id' => $mjmanager->id,
        ]);
    }
}
