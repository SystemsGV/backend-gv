<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Offer;
use App\Models\Category;
use App\Models\SubCategory;
use App\Models\Product;

class Products extends Controller
{
    public function index()
    {
        $data['title'] = "Productos";
        return view('products', $data);
    }

    public function add_Product()
    {
        $data['title'] = "Agregar Producto";
        $data['categories'] = Category::where('status_category', 1)->select('id_category', 'name_category')->get();
        $data['offers'] = Offer::where('status', 1)->select('id_offer', 'offer_title','offer_percentage')->get();
        return view('add_product', $data);
    }

    public function getOrganize(Request $request)
    {
        $categoryId = $request->categoryId;
        $subcategories = SubCategory::where('category_id', $categoryId)
            ->where('status_subcategory', 1)
            ->select('id_subcategory', 'name_subcategory', 'category_id')
            ->get();

        return response()->json($subcategories);
    }
}
