<?php

use App\Http\Controllers\Api\Auth\LoginController;
use App\Http\Controllers\Api\ProfileController;
use Illuminate\Support\Facades\Route;

Route::get('/user', [ProfileController::class, 'index'])->middleware('auth:sanctum');

Route::post('/login', [LoginController::class, 'login']);
Route::post('/logout', [LoginController::class, 'logout'])->middleware('auth:sanctum');

