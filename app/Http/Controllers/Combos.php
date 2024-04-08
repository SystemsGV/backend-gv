<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Carbon\Carbon;
use App\Models\Product;
use App\Models\Combo;
use App\Models\Combo_Products;
use App\Models\Combo_Prices;

class Combos extends Controller
{
    public function index()
    {
        $data['title'] = "Combos";
        return view('combo', $data);
    }

    public function add_combo()
    {
        $data['title'] = "Agregar Combo";
        $data['products'] = Product::where('status_product', 1)->get();
        return view('add_combo', $data);
    }

    public function show()
    {
        $offersData = Combo::getAllCombos();
        return response()->json(['data' => $offersData]);
    }
    public function new(Request $request)
    {
        $combo = new Combo();
        $combo->name_combo = $request->input('productTitle');
        $combo->short_combo = $request->input('short');
        $combo->description_combo = $request->input('general');
        $combo->price_combo = $request->input('price');
        $combo->isMultiPrice_combo = $request->input('isMultiPrice');
        $combo->combo_init_date = Carbon::createFromFormat('Y-m-d', $request->input('initDate'));
        $combo->combo_finish_date = Carbon::createFromFormat('Y-m-d', $request->input('finishDate'));

        if ($request->hasFile('featured_image')) {
            $file = $request->file('featured_image');
            $uniqueFileName = uniqid() . '.' . $file->getClientOriginalExtension();
            $file->storeAs('public/combos', $uniqueFileName);
            $combo->image_combo = $uniqueFileName;
        }

        $combo->seo_titleC = $request->input('seoTitle');
        $combo->seo_meta_descriptionC = $request->input('seoDescription');
        $combo->seo_keywordsC = $request->input('seoTags');

        do {
            $codeCombo = strtoupper(Str::random(8));
        } while (Combo::where('code_combo', $codeCombo)->exists());

        $combo->code_combo = $codeCombo;
        $combo->save();


        $comboId = $combo->id_combo;

        $tableData = json_decode($request->input('tableData'), true);

        foreach ($tableData as $rowData) {
            $comboProduct = new Combo_Products();
            $comboProduct->combo_id = $comboId;
            $comboProduct->product_id = $rowData['id_product'];
            $comboProduct->quantity = $rowData['quantity'];
            $comboProduct->price_cp = $rowData['price'];
            $comboProduct->save();
        }

        $data['status'] = true;
        $data['message'] = 'Producto agregado exitosamente';


        return response()->json($data);
    }

    public function updateCombo(Request $request)
    {
        try {
            $id = $request->input('id');
            $status = $request->input('status');

            $offer = Combo::findOrFail($id);
            $offer->status_combo = $status;
            $offer->save();

            return response()->json(['success' => true]);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'error' => 'No se pudo encontrar la categoría.'], 404);
        }
    }

    public function showItems(Request $request)
    {
        $combo = Combo::find($request->input('id'));
        return response()->json($combo->getComboItems());
    }
    public function showComboPrices()
    {
        $data['title'] = "Multi Precios Combos";
        return view('prices_combos', $data);
    }

    public function tablePrices(){
        $offersData = Combo_Prices::getAllPricesCombos();
        return response()->json(['data' => $offersData]);
    }


    public function addComboPrice()
    {
        $data['title'] = "Agregar Precios Para Combos";
        $data['combos'] = Combo::multiPriceAndActive()->get();
        return view('add_price_combo', $data);
    }

    public function newPrice(Request $request)
    {

        $price = new Combo_Prices();
        $price->combo_id = $request->input('combo');
        $price->title_price_cb = $request->input('productTitle');
        $price->type_price_cb = $request->input('choice_dates');
        $price->day_of_week_cb = $request->input('selected_days');
        $price->price_by_dates_cb = $request->input('select_dates');
        $price->price_cb = $request->input('price');
        if ($request->input('choice_dates') == '1') {
            $price->shift_cb = $request->input('shift-org-dates');
        } else {
            $price->shift_cb = $request->input('shift-org-days');
        }
        $price->save();

        $data['status'] = true;
        $data['message'] = 'Precio agregado exitosamente';

        return response()->json($data);
    }
}
