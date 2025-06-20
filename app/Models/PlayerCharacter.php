<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PlayerCharacter extends Model
{    
    public function player() {
        return $this->belongsTo(Player::class);
    }

    public function character() {
        return $this->belongsTo(Character::class);
    }
}
