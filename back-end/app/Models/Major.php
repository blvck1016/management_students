<?php

namespace App\Models;

use App\Models\Student;
use App\Models\Department;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Major extends Model
{
    use HasFactory;

    protected $with = ['department'];

    protected $fillable = ['name', 'department_id'];

    public function department(){
        return $this->belongsTo(Department::class);
    }

    public function major()
    {
        return $this->hasMany(Student::class);
    }

    public function semesters()
    {
        return $this->hasMany(Semester::class);
    }
}
