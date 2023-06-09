<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Teacher extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email'
    ];


    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function module()
    {
        return $this->belongsTo(Module::class);
    }
    
}
