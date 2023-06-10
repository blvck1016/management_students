<?php

namespace App\Http\Controllers;

use App\Models\Module;
use App\Models\Teacher;
use Illuminate\Http\Request;

class ModuleController extends Controller
{
    //
    public function index()
    {
        return Module::with('semester')->get();
    }


    public function store(Request $request)
    {
        $fields = $request->validate([
            'name' => 'required|string',
            'semester_id' => 'required|exists:semesters,id',
        ]);

        $module  = Module::create([
            'name' => $request->input('name'),
            'semester_id' => $request->input('semester_id'),
        ]);

        $module->load('semester');

        return $module;

        

    }

    /**
     * Update the specified module in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Module  $module
     * @return \Illuminate\Http\Response
    */
    public function update(Request $request, Module $module)
    {
        $fields = $request->validate([
            'name' => 'required|string',
            'semester_id' => 'required|exists:semesters,id',
        ]);

        $module->update($fields);


        $module->load('semester');

        return $module;
    }

    /**
     * Remove the specified module from storage.
     *
     * @param  \App\Models\Module  $module
     * @return \Illuminate\Http\Response
     */


    public function destroy(Module $module)
    {
        $module->delete();

        return response()->json(['message' => 'Module deleted successfully']);
    }


    public function modulesByTeacher($id){

        
        $teacher = Teacher::with('user')->where('user_id', $id)->first();


        if ($teacher) {
            $module = $teacher->module;
            $module->load('semester');
            return $module;
        } else {
            // Handle the case where the teacher is not found
            return response()->json(['message' => 'Teacher not found'], 404);
        }
    }


}
