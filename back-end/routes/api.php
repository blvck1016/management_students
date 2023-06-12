<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\MajorController;
use App\Http\Controllers\ModuleController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TeacherController;
use App\Http\Controllers\SemesterController;
use App\Http\Controllers\AttendanceController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DepartementController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::resource('teachers', TeacherController::class);
Route::resource('departments', DepartementController::class);
Route::resource('majors', MajorController::class);
Route::resource('semesters', SemesterController::class);
Route::resource('modules', ModuleController::class);
Route::resource('students', StudentController::class);
Route::resource('admins', AdminController::class);
Route::resource('attendance', AttendanceController::class);
Route::post('/login', [AuthController::class,'login']);
// modules by teacher id
Route::get('/teacher/modules/{id}', [ModuleController::class,'modulesByTeacher']);
// students by a major id
Route::get('/major/{id}/students',[MajorController::class,'studentsOfMajor']);
// absences of a student
Route::get('/absences/student/{id}', [AttendanceController::class, 'absenceOfStudent']);
// update password
Route::post('/update-password/{id}',[AuthController::class, 'updatePassword']);



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
