<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use App\Models\Admin;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $adminRole = Role::where('name', 'admin')->first();

        // Create an admin user
        $adminUser = User::create([
            'name' => 'Director',
            'email' => 'admin@edu.ma',
            'password' => bcrypt('password'),
            'role_id' => $adminRole->id,
        ]);
    }
}
