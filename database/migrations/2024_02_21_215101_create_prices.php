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
        Schema::create('prices', function (Blueprint $table) {
            $table->id('id_price');
            $table->unsignedBigInteger('product_id');
            $table->text('title_price');
            $table->integer('type_price');
            $table->text('day_of_week')->nullable();
            $table->text('price_by_dates')->nullable();
            $table->date('start_time');
            $table->date('end_time');
            $table->decimal('price', 10, 2);
            $table->enum('shift', ['1', '2'])->nullable();
            $table->timestamps();
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
        Schema::dropIfExists('prices');
    }
};
