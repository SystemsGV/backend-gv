@extends('layouts/layout')

@section('content')
    <!-- Content -->

    <div class="container-xxl flex-grow-1 container-p-y">



        <h4 class="py-3 mb-4">
            <span class="text-muted fw-light">eCommerce /</span><span> Agregar Producto</span>
        </h4>

        <div class="app-ecommerce">
            <form id="ecommerceProductAdd" enctype="multipart/form-data">

                <!-- Add Product -->
                <div
                    class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3">

                    <div class="d-flex flex-column justify-content-center">
                        <h4 class="mb-1 mt-3">Añadir un nuevo producto</h4>
                    </div>
                    <div class="d-flex align-content-center flex-wrap gap-3">
                        <a href="{{ route('Productos') }}" class="btn btn-outline-secondary">Descartar</a>
                        <button type="submit" class="btn btn-outline-primary" name="accion" value="borrador">Guardar
                            Borrado</button>
                        <button type="submit" class="btn btn-primary" name="accion" value="publicar">Publicar
                            Producto</button>
                    </div>
                </div>
                <div class="row">
                    <!-- Product Information -->
                    <div class="card mb-4">
                        <div class="card-header">
                            <h5 class="card-tile mb-0">Precio</h5>
                        </div>
                        <div class="card-body">
                            <!-- Category -->
                            <div class="row">

                                <div class="col-12 col-lg-4">

                                    <div class="form-floating form-floating-outline  mb-4">
                                        <select id="category-org" name="categoryOrg" class="select2 form-select"
                                            data-placeholder="Seleccionar Categoria">
                                            <option value="0">Seleccionar Categoria</option>
                                            @foreach ($categories as $category)
                                                <option value="{{ $category->id_category }}">{{ $category->name_category }}
                                                </option>
                                            @endforeach
                                        </select>
                                        <label for="category-org">Categoria</label>
                                    </div>
                                </div>
                                <div class="col-12 col-lg-4">
                                    <!-- Subcategory -->
                                    <div class="form-floating form-floating-outline mb-4">
                                        <select id="product-org" name="productOrg" class="select2 form-select"
                                            data-placeholder="Seleccionar Producto">
                                            <option value="0" disabled>Selecionar Producto</option>
                                        </select>
                                        <label for="vendor">Producto</label>
                                    </div>
                                </div>

                                <div class="col-12 col-lg-4">
                                    <div class="form-floating form-floating-outline">
                                        <input type="text" id="bs-rangepicker-basic" class="form-control">
                                        <label for="bs-rangepicker-basic">Fecha</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Product Information -->
                    <!-- Media -->
                </div>
                <!-- /Second column -->
        </div>
        </form>
    </div>
    <!-- / Content -->
@endsection()

@section('styles')
    <link rel="stylesheet" href="{{ asset('vendor/libs/quill/editor.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor/libs/dropzone/dropzone.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor/libs/flatpickr/flatpickr.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor/libs/tagify/tagify.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor/libs/spinkit/spinkit.css') }}">
@endsection()

@section('scripts')
    <!-- Page JS -->
    <script src="{{ asset('vendor/libs/block-ui/block-ui.js') }}"></script>
    <script src="{{ asset('vendor/libs/dropzone/dropzone.js') }}"></script>
    <script src="{{ asset('vendor/libs/jquery-repeater/jquery-repeater.js') }}"></script>
    <script src="{{ asset('vendor/libs/flatpickr/flatpickr.js') }}"></script>
    <script src="{{ asset('vendor/libs/autosize/autosize.js') }}"></script>
    <script src="{{ asset('vendor/libs/tagify/tagify.js') }}"></script>
    <script src="{{ asset('vendor/libs/bootstrap-datepicker/bootstrap-datepicker.js') }}"></script>
    <script src="{{ asset('vendor/libs/bootstrap-daterangepicker/bootstrap-daterangepicker.js') }}"></script>
    <script src="{{ asset('vendor/libs/jquery-timepicker/jquery-timepicker.js') }}"></script>
    <script src="{{ asset('vendor/libs/pickr/pickr.js') }}"></script>

    <script src="{{ asset('js/forms-pickers.js') }}"></script>
    <script src="{{ asset('js/app-ecommerce-product-add.js') }}"></script>
@endsection
