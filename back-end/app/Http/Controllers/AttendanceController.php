<?php

namespace App\Http\Controllers;

use App\Models\Attendance;
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


}
