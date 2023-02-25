<?php

use Illuminate\Http\Request;
use App\Http\Controllers\Api\ClientController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// List articles
Route::get('v1/clients', [ClientController::class, 'index']);

// List single article
Route::get('v1/client/{id}', [ClientController::class, 'show']);

// Create new article
Route::post('v1/client', [ClientController::class, 'store']);

// Update article
Route::put('v1/client', [ClientController::class, 'update']);

// Delete article
Route::delete('v1/client/{id}', [ClientController::class, 'destroy']);