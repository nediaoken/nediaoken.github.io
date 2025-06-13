<?php

use App\Http\Controllers\CharacterController;
use App\Http\Controllers\PlayerController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::controller(PlayerController::class)->prefix("spelers")->name('players')->group(function() {
        Route::get(null, 'index');
    });

    Route::controller(CharacterController::class)->prefix("characters")->name('characters')->group(function() {
        Route::get(null, 'index');
    });
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
