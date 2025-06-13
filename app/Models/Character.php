<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Character extends Model
{
    public function players() {
        return $this->hasMany(PlayerCharacter::class);
    }

    public function franchise() {
        return $this->belongsTo(Franchise::class);
    }
}
