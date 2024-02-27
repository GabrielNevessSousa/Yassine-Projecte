<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthenticationController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => ['cors']], function () {

});

Route::post('registre', [AuthenticationController::class, 'store'])->name('registre.store');
Route::get('registre/{id}', [AuthenticationController::class, 'show'])->name('registre.show');
Route::delete('registre/{id}', [AuthenticationController::class, 'destroy'])->name('registre.destroy');
Route::post('login', [AuthenticationController::class, 'login']);