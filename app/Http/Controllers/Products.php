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
        $data['offers'] = Offer::where('status', 1)->select('id_offer', 'offer_title', 'offer_percentage')->get();
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
    public function new(Request $request)
    {

        $product = new Product();
        $product->product_title = $request->input('productTitle');
        $product->product_desc = $request->input('short');
        $product->product_features = $request->input('general');
        $product->price_product = $request->input('productPrice');

        if ($request->hasFile('featured_image')) {
            $file = $request->file('featured_image');
            $uniqueFileName = uniqid() . '.' . $file->getClientOriginalExtension();
            $file->storeAs('public/products', $uniqueFileName);
            $product->featured_image = $uniqueFileName;
        }

        if ($request->hasFile('featured_image2')) {
            $file2 = $request->file('featured_image2');
            $uniqueFileName2 = uniqid() . '.' . $file2->getClientOriginalExtension();
            $file2->storeAs('public/products', $uniqueFileName2);
            $product->featured_image2 = $uniqueFileName2;
        }

        $product->category_id  = $request->input('categoryOrg');
        $product->subcategory_id   = $request->input('subcategoryOrg');
        $product->offer_id  = $request->input('offer');

        $product->igv  = $request->input('customRadioTemp');

        $product->seo_title  = $request->input('seoTitle');
        $product->seo_meta_description  = $request->input('seoDescription');
        $product->seo_keywords  = $request->input('seoTags');

        $product->status_product = $request->input('accion') === 'publicar' ? 1 : 0;

        $product->save();

        $productId = $product->id_product;

        $data['status'] = true;
        $data['message'] = 'Producto agregado exitosamente';


        return response()->json($data);
    }
}
