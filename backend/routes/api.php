<?php
use App\Http\Controllers\PasswordResetController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\AuthController;

// Public Routes
Route::post('/register', [AuthController::class,'register']);
Route::post('/login', [AuthController::class, 'login'])->middleware('throttle:5,1');
Route::post('/forgot-password', [PasswordResetController::class, 'forgotPassword']);
Route::post('/reset-password', [PasswordResetController::class, 'resetPassword']);
// Protected Routes
Route::middleware('auth:sanctum')->group(function () {

    Route::post('/logout',[AuthController::class,'logout']);

    Route::apiResource('posts', PostController::class);

});
