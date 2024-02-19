<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Categories;
use App\Http\Controllers\SubCategories;
use App\Http\Controllers\Offers;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::controller(Categories::class)->group(function ($route) {

    Route::get('/Categorias', 'index')->name('Categorias');
    Route::get('/getAllCategories', 'selectCategory');
    Route::post('/insertCategory', 'new');
    Route::get('/getCategories', 'show');
    Route::post('/updateCategory', 'update');
    Route::post('/updateStatus', 'updateStatus');
});

Route::controller(SubCategories::class)->group(function ($route) {

    Route::get('/SubCategorias', 'index')->name('SubCategorias');
    Route::get('/getSubCategories', 'show');
    Route::post('/insertSubCategory', 'new');
    Route::post('/updateSubCategory', 'update');
    Route::post('/updateStatusSub', 'updateStatus');
});

Route::controller(Offers::class)->group(function ($route) {

    Route::get('/Ofertas', 'index')->name('ofertas');
    Route::get('/getOffers', 'show');
    Route::post('/insertOffer', 'new');
    Route::post('/statusOffer', 'updateStatus');
    Route::post('/updateOffer', 'update');
});
