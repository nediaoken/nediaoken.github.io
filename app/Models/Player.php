<?php

    namespace App\Models;

    use Illuminate\Database\Eloquent\Model;
    use Illuminate\Database\Eloquent\Casts\Attribute;

    class Player extends Model
    {
        public function characters() {
            return $this->hasMany(PlayerCharacter::class);
        }

        public function matches() {
            return $this->hasMany(TournamentMatch::class, 'player1_id');
        }

        public function matchesWon() {
            return $this->hasMany(TournamentMatch::class, 'winner_id');
        }

        protected function main(): Attribute
        {
            return Attribute::make(
                get: fn () => $this->characters->where('is_main', 1)[0]->character
            );
        }

        protected function worstMatchup(): Attribute
        {
            dd($this->name, $this->matchesWon->groupBy('loser_id'));

            return Attribute::make(
                get: fn () => $this->characters->where('is_main', 1)[0]->character
            );
        }
    }
