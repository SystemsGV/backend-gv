<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Offer;

class Offers extends Controller
{
    public function index()
    {
        $data['title'] = "Ofertas";
        return view('offers', $data);
    }
    public function show()
    {
        $offersData = Offer::getAllOffers();
        return response()->json(['data' => $offersData]);
    }
    public function new(Request $request)
    {
        try {
            // Obtener el nombre del archivo de imagen
            $file = $request->file('categoryImage');
            $uniqueFileName = uniqid() . '.' . $file->getClientOriginalExtension();

            // Guardar el archivo de imagen en el sistema de archivos (por ejemplo, en la carpeta "public/img")
            $file->storeAs('public/offer', $uniqueFileName);

            // Obtener otros datos del formulario
            $nameOffer = $request->input('categoryTitle');
            $descriptionOffer = $request->input('description');
            $percentageOffer = $request->input('categoryPercentage');
            $statusOffer = 1; // Asignar un estado predeterminado, en este caso 'active'

            // Realizar el insert en la base de datos utilizando Eloquent (suponiendo que tengas un modelo Category)
            $offer = new Offer();
            $offer->offer_title = "$nameOffer";
            $offer->offer_desc = $descriptionOffer;
            $offer->offer_image = $uniqueFileName;
            $offer->offer_percentage = $percentageOffer;
            $offer->status = $statusOffer;
            $offer->offer_slug = "-------";
            $offer->save();

            // Retornar una respuesta JSON con los datos insertados
            return response()->json([
                'message' => 'Oferta agregado exitosamente',
                'data' => [
                    'name_offer' => $nameOffer,
                    'descr_offer' => $descriptionOffer,
                    'img_offer' => $uniqueFileName,
                    'status_offer' => $percentageOffer
                ]
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Error en el servidor: ' . $e->getMessage()
            ], 500);
        }
    }
    public function update(Request $request)
    {
        try {
            $offerId = $request->input('categoryId');

            // Buscar la categoría existente en la base de datos
            $offer = Offer::findOrFail($offerId);

            // Obtener otros datos del formulario
            $nameOffer = $request->input('categoryTitle');
            $descriptionOffer = $request->input('description');
            $percentageOffer = $request->input('categoryPercentage');

            // Verificar si se ha cargado una nueva imagen
            if ($request->hasFile('categoryImage')) {
                // Obtener el nombre del archivo de imagen
                $file = $request->file('categoryImage');
                $uniqueFileName = uniqid() . '.' . $file->getClientOriginalExtension();

                // Guardar el archivo de imagen en el sistema de archivos
                $file->storeAs('public/offer', $uniqueFileName);

                // Actualizar la imagen de la categoría
                $offer->offer_image = $uniqueFileName;
            }

            // Actualizar otros datos de la categoría
            $offer->offer_title = $nameOffer;
            $offer->offer_desc = $descriptionOffer;
            $offer->offer_percentage = $percentageOffer;

            // Guardar los cambios en la base de datos
            $offer->save();

            // Retornar una respuesta JSON con los datos actualizados
            return response()->json([
                'message' => 'Oferta actualizada exitosamente',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Error en el servidor: ' . $e->getMessage()
            ], 500);
        }
    }
    public function updateStatus(Request $request)
    {
        try {
            $id = $request->input('id');
            $status = $request->input('status');

            $offer = Offer::findOrFail($id);
            $offer->status = $status;
            $offer->save();

            return response()->json(['success' => true]);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'error' => 'No se pudo encontrar la categoría.'], 404);
        }
    }
}
