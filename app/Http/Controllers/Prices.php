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

    public function new(Request $request)
    {

        $price = new Price();
        $price->product_id = $request->input('productPrice');
        $price->title_price = $request->input('title_price');
        $price->type_price = $request->input('choice_dates');
        $price->day_of_week = $request->input('selected_days');
        $price->price_by_dates = $request->input('select_dates');
        $price->start_time = $request->input('dateInit');
        $price->end_time = $request->input('dateFinish');
        $price->price = $request->input('price');
        if ($request->input('choice_dates') == '1') {
            $price->shift = $request->input('shift-org-dates');
        } else {
            $price->shift = $request->input('shift-org-days');
        }
        $price->save();

        $data['status'] = true;
        $data['message'] = 'Precio agregado exitosamente';

        return response()->json($data);
    }
}
