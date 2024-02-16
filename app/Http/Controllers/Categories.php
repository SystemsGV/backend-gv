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
        $categoriesData = Category::getAllCategories();
        return response()->json(['data' => $categoriesData]);
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
    public function update(Request $request)
    {
        try {
            $categoryId = $request->input('categoryId');

            // Buscar la categoría existente en la base de datos
            $category = Category::findOrFail($categoryId);

            // Obtener otros datos del formulario
            $nameCategory = $request->input('categoryTitle');
            $descriptionCategory = $request->input('description');

            // Verificar si se ha cargado una nueva imagen
            if ($request->hasFile('categoryImage')) {
                // Obtener el nombre del archivo de imagen
                $file = $request->file('categoryImage');
                $uniqueFileName = uniqid() . '.' . $file->getClientOriginalExtension();

                // Guardar el archivo de imagen en el sistema de archivos
                $file->storeAs('public/category', $uniqueFileName);

                // Actualizar la imagen de la categoría
                $category->img_category = $uniqueFileName;
            }

            // Actualizar otros datos de la categoría
            $category->name_category = $nameCategory;
            $category->descr_category = $descriptionCategory;

            // Guardar los cambios en la base de datos
            $category->save();

            // Retornar una respuesta JSON con los datos actualizados
            return response()->json([
                'message' => 'Category updated successfully',
                'data' => [
                    'name_category' => $nameCategory,
                    'descr_category' => $descriptionCategory,
                    'status_category' => $category->status_category
                ]
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

            $category = Category::findOrFail($id);
            $category->status_category = $status;
            $category->save();

            return response()->json(['success' => true]);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'error' => 'No se pudo encontrar la categoría.'], 404);
        }
    }

    public function selectCategory()
    {
        return Category::getSelectCategories(); // Obtener todas las categorías

    }
}
