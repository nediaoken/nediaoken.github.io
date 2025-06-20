<?php

    namespace App\Http\Controllers;

    use Illuminate\Http\Request;
    
    use App\Models\Character;
use App\Models\Franchise;
use Inertia\Inertia;

    class CharacterController extends Controller
    {
        public function index() {
            $characters = Character::with('franchise')->get();
            $franchises = Franchise::get();

            return Inertia::render('characters/index', compact('characters', 'franchises'));
        }
}
