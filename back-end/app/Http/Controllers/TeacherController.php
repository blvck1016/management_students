<?php

namespace App\Http\Controllers;

use App\Models\Teacher;
use Illuminate\Http\Request;

class TeacherController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        return  Teacher::with('department')->get();
    }


    public function store(Request $request)
    {


        $request->validate([
            'nom' => 'required',
            'prenom' => 'required',
            'date_de_naissance' => 'required',
            'adresse' => 'required',
            "telephone" => "required"
        ]);
        $e = new Teacher();
        $e->nom = $request->nom;
        $e->prenom = $request->prenom;
        $e->date_de_naissance = $request->date_de_naissance;
        $e->adresse = $request->adresse;
        $e->telephone = $request->telephone;
        $e->user_id = $e->id;
        $e->save();
        return ["message" => "Teacher has been created succfully"];
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
        $u = Teacher::find($id);
        $u->delete();
        return ["message" => "Teacher " . $id . " has been deleted successfully"];
    }


}
