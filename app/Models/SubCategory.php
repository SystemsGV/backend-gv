<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubCategory extends Model
{
    use HasFactory;

    protected $table = 'subcategories';
    protected $primaryKey = 'id_subcategory';
    protected $fillable = ['name_subcategory', 'descr_subcategory', 'img_subcategory', 'status_subcategory', 'category_id'];


    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

    public static function getAllSubcategories()
    {
        $subcategories = self::all();

        $data = [];
        foreach ($subcategories as $subcategory) {
            $data[] = [
                'id' => $subcategory->id_subcategory,
                'name' => $subcategory->name_subcategory,
                'description' => $subcategory->descr_subcategory,
                'image' => $subcategory->img_subcategory,
                'status' => $subcategory->status_subcategory,
                'category' => optional($subcategory->category)->name_category,
                'category_id' => optional($subcategory->category)->id_category,
            ];
        }

        return $data;
    }
}
