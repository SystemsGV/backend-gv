<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Offer extends Model
{
    use HasFactory;

    protected $table = 'offers';
    protected $primaryKey = 'id_offer';
    protected $fillable = ['offer_title', 'offer_slug', 'offer_desc', 'offer_percentage', 'offer_image', 'status'];

    public static function getAllOffers()
    {
        $offers = self::all();

        $data = [];
        foreach ($offers as $offer) {
            $data[] = [
                'id' => $offer->id_offer,
                'name' => $offer->offer_title,
                'slug' => $offer->offer_slug,
                'description' => $offer->offer_desc,
                'image' => $offer->offer_image,
                'percentage' => $offer->offer_percentage,
                'status' => $offer->status,
            ];
        }

        return $data;
    }

    public static function getSelectOffers()
    {
        return Offer::all();
    }
}
