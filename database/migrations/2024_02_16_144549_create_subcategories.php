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
        Schema::create('subcategories', function (Blueprint $table) {
            $table->id('id_subcategory');
            $table->string('name_subcategory', 120);
            $table->string('descr_subcategory', 150);
            $table->string('img_subcategory', 120);
            $table->integer('status_subcategory');
            $table->unsignedBigInteger('category_id'); // Columna de clave externa
            $table->foreign('category_id')->references('id_category')->on('categories')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('subcategories');
    }
};
