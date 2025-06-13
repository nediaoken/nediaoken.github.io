<?php

    namespace App\Http\Controllers;

    use Illuminate\Http\Request;

    use App\Models\Player;
    use Inertia\Inertia;

    class PlayerController extends Controller
    {
        public function index() {
            $players = Player::with('characters.character')->get();

            return Inertia::render('players/index', compact('players'));
        }
}
