<?php

namespace App\Http\Controllers;

use App\Models\Attendance;
use App\Models\Student;
use Illuminate\Http\Request;

class AttendanceController extends Controller
{
    //
    public function index()
    {
        return Attendance::orderBy('date', 'desc')->get();
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'student_id' => 'required',
            'module_id' => 'required',
            'date' => 'required',
            'present' => 'required|boolean',
        ]);

        $attendance = Attendance::create([
            'student_id' => $validatedData['student_id'],
            'module_id' => $validatedData['module_id'],
            'date' => today(),
            'present' => $validatedData['present'],
        ]);

        $attendance->load('student','module');

        return $attendance;
    }


    public function absenceOfStudent($id) {
        $student = Student::where('user_id',$id)->first();
        if($student){
            $abs = Attendance::where('student_id',$student->id)->get();
            return $abs;
        }
    }


}
