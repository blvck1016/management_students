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

    public function store(Request $request)
        {
            $validatedData = $request->validate([
                'name' => 'required',
                'department_id' => 'required|exists:departments,id',
            ]);

            $major = Major::create($validatedData);

            $major->load('department');

            return $major;
        }



    public function studentsOfMajor($id)
    {
        $students =  Student::where('major_id', $id)->get();
        return $students;
    }


    public function destroy($id){
        $major = Major::find($id);
        $major->delete();
        return 'deleted successfully';
    }
}
