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
        Schema::create('products', function (Blueprint $table) {
            $table->id('id_product');
            $table->string('product_title');
            $table->text('product_slug')->nullable();
            $table->text('product_desc')->nullable();
            $table->text('product_features')->nullable();
            $table->decimal('price', 10, 2);
            $table->decimal('total_rate');
            $table->string('featured_image', 120)->nullable();
            $table->string('featured_image2', 120)->nullable();
            $table->unsignedBigInteger('category_id');
            $table->foreign('category_id')->references('id_category')->on('categories')->onDelete('cascade');
            $table->unsignedBigInteger('subcategory_id');
            $table->foreign('subcategory_id')->references('id_subcategory')->on('subcategories')->onDelete('cascade');
            $table->unsignedBigInteger('offer_id');
            $table->foreign('offer_id')->references('id_offer')->on('offers')->onDelete('cascade');
            $table->timestamps();
            $table->integer('status');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};
