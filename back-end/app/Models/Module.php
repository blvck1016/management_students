<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Module extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'semester_id'
    ];


    public function semester()
    {
        return $this->belongsTo(Semester::class);
    }

    public function teachers()
    {
        return $this->hasMany(Teacher::class);
    }
}
