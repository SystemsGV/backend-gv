<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Price extends Model
{
    use HasFactory;

    protected $table = 'prices';
    protected $primaryKey = 'id_price';
    protected $fillable = ['product_id ', 'day_of_week', 'start_time', 'end_time', 'price', 'shift'];


    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }


    public static function getAllPrices()
    {
        $prices = self::all();

        $data = [];
        foreach ($prices as $price) {
            $data[] = [
                'id' => $price->id_price,
                'product' => optional($price->product)->name_product,
                'product_id' => optional($price->product)->id_product,
                'day_of_week' => $price->day_of_week,
                'start_time' => $price->start_time,
                'end_time' => $price->end_time,
                'price' => $price->price,
                'shift' => $price->shift,
            ];
        }
        
        return $data;
    }
}
