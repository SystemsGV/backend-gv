<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Combo_Prices extends Model
{
    use HasFactory;
    protected $table = 'prices_combos';
    protected $primaryKey = 'id_price_cb';
    protected $fillable = ['combo_id ', 'title_price_cb', 'type_price_cb', 'day_of_week_cb', 'price_by_dates_cb', 'price_cb', 'shift_cb'];


    public function combo()
    {
        return $this->belongsTo(Combo::class, 'combo_id');
    }


    public static function getAllPricesCombos()
    {
        $prices = self::all();

        $data = [];
        foreach ($prices as $price) {
            $data[] = [
                'id' => $price->id_price_cb,
                'combo' => optional($price->combo)->name_combo,
                'combo_id' => optional($price->combo)->id_combo,
                'type_price' => $price->type_price_cb,
                'prices_days' => $price->day_of_week_cb,
                'prices_dates' => $price->price_by_dates_cb,
                'price' => $price->price_cb,
                'shift' => $price->shift_cb,
            ];
        }

        return $data;
    }
}
