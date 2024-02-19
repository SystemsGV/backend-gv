<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $table = 'products';
    protected $primaryKey = 'id_product';
    protected $fillable = ['product_title', 'product_slug', 'product_desc', 'product_features', 'price', 'total_rate','featured_image','featured_image2','category_id','subcategory_id','offer_id','status_product'];

    
}
