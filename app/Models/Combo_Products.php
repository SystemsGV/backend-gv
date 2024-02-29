<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Combo_Products extends Model
{
    use HasFactory;

    protected $table = 'combo_products';
    protected $primaryKey = 'id_cp';
    protected $fillable = ['combo_id', 'product_id', 'quantity', 'price_cp'];
}
