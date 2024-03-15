<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Combo extends Model
{
    use HasFactory;

    protected $table = 'combos';
    protected $primaryKey = 'id_combo';
    protected $fillable = ['code_combo', 'name_combo','description_combo', 'short_combo','image_combo', 'price_combo','combo_init_date','combo_finish_date','isMultiPrice_combo','status_combo','seo_titleC','seo_meta_descriptionC','seo_keywordsC'];
}
