<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Categories;
use App\Http\Controllers\SubCategories;

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
    Route::get('/getAllCategories', 'selectCategory')->name('Categorias');
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
