<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('combos', function (Blueprint $table) {
            $table->id('id_combo');
            $table->string('name_combo');
            $table->text('description_combo')->nullable();
            $table->string('image_combo')->nullable();
            $table->decimal('price_combo', 8, 2);
            $table->timestamps();
        });

        Schema::create('combo_products', function (Blueprint $table) {
            $table->id('id_cp');
            $table->unsignedBigInteger('combo_id');
            $table->unsignedBigInteger('product_id');
            $table->integer('quantity');
            $table->decimal('price_cp', 8, 2);
            $table->timestamps();
            $table->foreign('combo_id')->references('id_combo')->on('combos')->onDelete('cascade');
            $table->foreign('product_id')->references('id_product')->on('products')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('combos');
        Schema::dropIfExists('combo_products');
    }
};
