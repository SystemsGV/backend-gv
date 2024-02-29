<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Combos extends Controller
{
    public function index(){
        $data['title'] = "Combos";
        return view('combo', $data);
    }
    public function add_combo()
    {
        $data['title'] = "Agregar Combo";
        return view('add_combo', $data);
    }
}
