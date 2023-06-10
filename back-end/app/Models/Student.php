<?php

namespace App\Models;

use App\Models\Major;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Student extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'major_id',
        'user_id'
    ];



    public function major()
    {
        return $this->belongsTo(Major::class);
    }
}
