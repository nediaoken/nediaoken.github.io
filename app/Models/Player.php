<?php

    namespace App\Models;

    use Illuminate\Database\Eloquent\Model;
    use Illuminate\Database\Eloquent\Casts\Attribute;

    class Player extends Model
    {
        public function characters() {
            return $this->hasMany(PlayerCharacter::class);
        }

        protected function main(): Attribute
        {
            return Attribute::make(
                get: fn () => $this->characters->where('is_main', 1)[0]->character
            );
        }
    }
