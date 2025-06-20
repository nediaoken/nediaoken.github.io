<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Franchise extends Model
{
    public function characters() {
        return $this->hasMany(Character::class);
    }
}
