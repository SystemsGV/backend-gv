<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Price;

class Prices extends Controller
{
    public function index()
    {
        $data['title'] = "Precios";
        return view('prices', $data);
    }

    public function show()
    {
        $pricesData = Price::getAllPrices();
        return response()->json(['data' => $pricesData]);
    }

    public function add_price()
    {
        $data['title'] = "Agregar Precio";
        $data['categories'] = Category::where('status_category', 1)->select('id_category', 'name_category')->get();
        return view('add_price', $data);
    }
}
