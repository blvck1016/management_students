<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Teacher;
use Illuminate\Http\Request;

class TeacherController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        return  Teacher::with('department', 'module')->get();
    }


    public function store(Request $request)
    {
        // Validate the request data
        $validatedData = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'module_id' => 'required|exists:modules,id',
            'department_id' => 'required|exists:departments,id',
        ]);

        // Create a new User
        $user = User::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => bcrypt('password'), // Set a default password
            'role_id' => 2, // Assuming role_id 2 represents the teacher role
        ]);

        // Create a new Teacher
        $teacher = Teacher::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'module_id' => $validatedData['module_id'],
            'department_id' => $validatedData['department_id'],
            'user_id' => $user->id, // Assign the user_id to the created User's id
        ]);

        $teacher->load('department', 'module');
        return $teacher;
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return Teacher::find($id);
    }


    public function update(Request $request, $id)
    {
        $fields = $request->validate([
            'nom' => 'required',
            'prenom' => 'required',
            'date_de_naissance' => 'required',
            'adresse' => 'required',
            "telephone" => "required",
            'user_id' => 'required'

        ]);

        $Teacher =  Teacher::find($id);

        if (!$Teacher) {
            return response()->json(["message" => "this Teacher doesn't exist"]);
        } else {
            $Teacher->update($fields);
            return response()->json(["message" => "dtudent has been update succefully"]);
        }
    }



    public function destroy($id)
    {

        $teacher = Teacher::find($id);
        $user_id  = $teacher->user_id;
        $user = User::find($user_id);
        $teacher->delete();
        $user->delete();

        return ["message" => "Teacher has been deleted successfully"];
    }


}
