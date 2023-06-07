<?php

namespace App\Http\Controllers;

use App\Models\Department;
use Illuminate\Http\Request;

class DepartementController extends Controller
{
    //
    public function index()
    {
        return Department::all();
    }


    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|unique:Departments',
        ]);

        $Department = Department::create([
            'name' => $request->input('name'),
        ]);

        return $Department;
    }

    public function update(Request $request, Department $Department)
    {
        $request->validate([
            'name' => 'required|string|unique:Departments,name,' . $Department->id,
        ]);

        $Department->update([
            'name' => $request->input('name'),
        ]);

        return response()->json(['message' => 'Department updated successfully', 'data' => $Department]);
    }

    public function destroy(Department $Department)
    {
        $Department->delete();

        return response()->json(['message' => 'Department deleted successfully']);
    }


}
