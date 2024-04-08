<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Combo extends Model
{
    use HasFactory;

    protected $table = 'combos';
    protected $primaryKey = 'id_combo';
    protected $fillable = ['code_combo', 'name_combo', 'description_combo', 'short_combo', 'image_combo', 'price_combo', 'combo_init_date', 'combo_finish_date', 'isMultiPrice_combo', 'status_combo', 'seo_titleC', 'seo_meta_descriptionC', 'seo_keywordsC'];


    public static function getAllCombos()
    {
        $combos = self::all();

        $data = [];
        foreach ($combos as $combo) {
            $data[] = [
                'id' => $combo->id_combo,
                'name' => $combo->name_combo,
                'price' => $combo->price_combo,
                'init' => $combo->combo_init_date,
                'finish' => $combo->combo_finish_date,
                'status' => $combo->status_combo,
                'image' => $combo->image_combo,
                'products' => 1
            ];
        }

        return $data;
    }
    public function comboItems()
    {
        return $this->hasMany(Combo_Products::class, 'combo_id', 'id_combo');
    }

    public function getComboItems()
    {
        return $this->comboItems()->with('product')->get();
    }

    public function scopeMultiPriceAndActive($query)
    {
        return $query->where('isMultiPrice_combo', 1)->where('status_combo', 1);
    }

    
}
