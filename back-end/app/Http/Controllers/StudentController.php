<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function index()
    {
        $Students = Student::with('major')->get();
        // $role = $request->user()->role;
        return $Students;
        // return Classe::select('id','nom','niveau')->get();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {


        $request->validate([
            'nom' => 'required',
            'prenom' => 'required',
            'date_de_naissance' => 'required',
            'adresse' => 'required',
            "telephone" => "required",
            'classe_id' => 'required',
            'user_id' => 'required',
        ]);
        $e = new Student();
        $e->nom = $request->nom;
        $e->prenom = $request->prenom;
        $e->date_de_naissance = $request->date_de_naissance;
        $e->adresse = $request->adresse;
        $e->telephone = $request->telephone;
        $e->classe_id = $request->classe_id;
        $e->user_id = $request->user_id;
        $e->save();
        return ["message" => "Student has been created succfully"];
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return Student::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    // public function edit(Student $Student)
    // {
    //     //
    // }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $fields = $request->validate([
            'nom' => 'required',
            'prenom' => 'required',
            'date_de_naissance' => 'required',
            'adresse' => 'required',
            "telephone" => "required",
            'classe_id' => 'required',
            'user_id' => 'required'

        ]);

        $Student =  Student::find($id);

        if (!$Student) {
            return response()->json(["message" => "this Student doesn't exist"]);
        } else {
            $Student->update($fields);
            return response()->json(["message" => "dtudent has been update succefully"]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $user = Student::find($id);
        $user->delete();
        return ["message" => "Student " . $id . " has been deleted successfully"];
    }
}
