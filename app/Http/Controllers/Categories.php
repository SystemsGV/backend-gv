<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class Categories extends Controller
{
    public function index()
    {
        $data['title'] = "Contacto";
        return view('categories', $data);
    }

    public function show()
    {
        $categories = Category::all();

        $data = [];
        foreach ($categories as $category) {
            $data[] = [
                'id' => $category->id_category,
                'name' => $category->name_category,
                'description' => $category->descr_category,
                'image' => $category->img_category,
                'status' => $category->status_category,
                // Puedes añadir más atributos según tus necesidades
            ];
        }

        return response()->json(['data' => $data]);
    }

    public function new(Request $request)
    {
        try {
            // Obtener el nombre del archivo de imagen
            $file = $request->file('categoryImage');
            $uniqueFileName = uniqid() . '.' . $file->getClientOriginalExtension();

            // Guardar el archivo de imagen en el sistema de archivos (por ejemplo, en la carpeta "public/img")
            $file->storeAs('public/category', $uniqueFileName);

            // Obtener otros datos del formulario
            $nameCategory = $request->input('categoryTitle');
            $descriptionCategory = $request->input('description');
            $statusCategory = 1; // Asignar un estado predeterminado, en este caso 'active'

            // Realizar el insert en la base de datos utilizando Eloquent (suponiendo que tengas un modelo Category)
            $category = new Category();
            $category->name_category = "$nameCategory";
            $category->descr_category = $descriptionCategory;
            $category->img_category = $uniqueFileName;
            $category->status_category = $statusCategory;
            $category->save();

            // Retornar una respuesta JSON con los datos insertados
            return response()->json([
                'message' => 'Category inserted successfully',
                'data' => [
                    'name_category' => $nameCategory,
                    'descr_category' => $descriptionCategory,
                    'img_category' => $uniqueFileName,
                    'status_category' => $statusCategory
                ]
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Error en el servidor: ' . $e->getMessage()
            ], 500);
        }
    }
}
