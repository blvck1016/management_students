<?php

namespace App\Models;

use App\Models\Module;
use App\Models\Student;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Attendance extends Model
{
    protected $fillable = [
        'student_id',
        'module_id',
        'date',
        'presence'
    ];

    protected $with = ['student','module'];

    

    use HasFactory;

    public function student()
    {
        return $this->belongsTo(Student::class);
    }

    public function module()
    {
        return $this->belongsTo(Module::class);
    }
}
