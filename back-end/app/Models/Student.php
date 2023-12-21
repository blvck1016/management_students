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

    // hna student belongs to filiere ah filiere whda o semstre wahd hta houwa
    // fhad relationship kayn ghir filiere wahda makynch semestre
}
