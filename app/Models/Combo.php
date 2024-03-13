<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Combo extends Model
{
    use HasFactory;

    protected $table = 'combo';
    protected $primaryKey = 'id_combo';
    protected $fillable = ['name_combo', 'description_combo', 'image_combo', 'price_combo'];
}
