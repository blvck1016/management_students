<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Semester extends Model
{
    use HasFactory;

    protected $with = ['major'];

    public function modules()
    {
        return $this->hasMany(Module::class);
    }

    public function major()
    {
        return $this->belongsTo(Major::class);
    }

}
