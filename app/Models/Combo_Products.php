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

    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id', 'id_product');
    }

    public function combo()
    {
        return $this->belongsTo(Combo::class, 'combo_id', 'id_combo');
    }
}
