<?php

namespace App\Http\Controllers;

use App\Models\Major;
use App\Models\Student;
use Illuminate\Http\Request;

class MajorController extends Controller
{
    //
    public function index()
    {
        return Major::all();
    }

    public function studentsOfMajor($id)
    {
        $students =  Student::where('major_id', $id)->get();
        return $students;
    }
}
