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
            $table->text('code_combo');
            $table->string('name_combo');
            $table->text('description_combo')->nullable();
            $table->text('short_combo')->nullable();
            $table->string('image_combo')->nullable();
            $table->decimal('price_combo', 8, 2);
            $table->date('combo_init_date');
            $table->date('combo_finish_date');
            $table->integer('isMultiPrice_combo')->nullable();
            $table->boolean('status_combo')->default(1);
            $table->string('seo_titleC')->nullable();
            $table->string('seo_meta_descriptionC')->nullable();
            $table->string('seo_keywordsC')->nullable();
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
        Schema::dropIfExists('combo_products');
        Schema::dropIfExists('combos');
    }
};
