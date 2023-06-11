<?php

namespace App\Http\Controllers;

use App\Models\Module;
use App\Models\User;
use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        return  Student::with('major')->get();
    }


    public function store(Request $request)
    {
        // Validate the request data
        $validatedData = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'major_id' => 'required|exists:majors,id',
        ]);

        // Create a new User
        $user = User::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => bcrypt('password'), // Set a default password
            'role_id' => 3, // Assuming role_id 2 represents the student role
        ]);

        // Create a new Teacher
        $student = Student::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'major_id' => $validatedData['major_id'],
            'user_id' => $user->id, // Assign the user_id to the created User's id
        ]);

        $student->load('major');
        return $student;
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return Student::find($id);
    }


    public function update(Request $request, $id)
    {
        // $fields = $request->validate([
        //     'nom' => 'required',
        //     'prenom' => 'required',
        //     'date_de_naissance' => 'required',
        //     'adresse' => 'required',
        //     "telephone" => "required",
        //     'user_id' => 'required'

        // ]);

        // $Teacher =  Teacher::find($id);

        // if (!$Teacher) {
        //     return response()->json(["message" => "this Teacher doesn't exist"]);
        // } else {
        //     $Teacher->update($fields);
        //     return response()->json(["message" => "dtudent has been update succefully"]);
        // }
    }



    public function destroy($id)
    {

        $student = Student::find($id);
        $user_id  = $student->user_id;
        $user = User::find($user_id);
        $student->delete();
        $user->delete();

        return ["message" => "Student has been deleted successfully"];
    }


    // public function studentsByMajor($id){

    //     $students  = Student::where('major_id',$id)->get();
    //     return $students;

    // }
   
}
