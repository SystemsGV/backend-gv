@extends('layouts/layout')

@section('content')
    <!-- Content -->

    <div class="container-xxl flex-grow-1 container-p-y">
        <h4 class="py-3 mb-4">
            <span class="text-muted fw-light">eCommerce /</span> Lista Oferta
        </h4>

        <div class="app-ecommerce-category">
            <!-- Category List Table -->
            <div class="card">
                <div class="card-datatable table-responsive">
                    <table class="datatables-category-list table">
                        <thead class="table-light">
                            <tr>
                                <th></th>
                                <th></th>
                                <th>Ofertas</th>
                                <th class="text-nowrap">Porcentaje &nbsp;</th>
                                <th class="text-nowrap">Estado &nbsp;</th>
                                <th class="text-lg-center">Acciones</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
            <!-- Offcanvas to add new customer -->
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasEcommerceCategoryList"
                aria-labelledby="offcanvasEcommerceCategoryListLabel">
                <!-- Offcanvas Header -->
                <div class="offcanvas-header py-4">
                    <h5 id="offcanvasEcommerceCategoryListLabel" class="offcanvas-title" data-i18n=""></h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <!-- Offcanvas Body -->
                <div class="offcanvas-body border-top">
                    <form class="pt-0" id="eCommerceCategoryListForm" enctype="multipart/form-data"
                        onsubmit="return false">
                        <!-- Title -->
                        <input type="hidden" id="categoryId" name="categoryId">
                        <div class="form-floating form-floating-outline mb-4">
                            <input type="text" class="form-control" id="ecommerce-category-title"
                                placeholder="Ingresa titulo de oferta" name="categoryTitle" aria-label="category title">
                            <label for="ecommerce-category-title">Titulo</label>
                        </div>

                        <div class="mb-4">
                            <div class="input-group input-group-merge">
                                <div class="form-floating form-floating-outline">
                                    <input type="text" id="ecommerce-category-percentage" class="form-control"
                                        placeholder="jIngresa porcentaje de oferta" name="categoryPercentage" aria-label="percentage title"
                                        aria-describedby="ecommerce-category-percentage2">
                                    <label for="ecommerce-category-percentage">Porcentaje</label>
                                </div>
                                <span class="input-group-text" id="ecommerce-category-percentage2">%</span>
                            </div>
                        </div>
                        <!-- Image -->
                        <div class="form-floating form-floating-outline mb-4">
                            <input class="form-control" type="file" id="categoryImage" name="categoryImage">
                            <label for="ecommerce-category-image" data-i18n="Attachment"></label>
                        </div>

                        <!-- Description -->
                        <div class="mb-4">
                            <label class="form-label" data-i18n="Description">Descripcion</label>
                            <div class="form-control p-0 pt-1">
                                <div class="comment-editor border-0" id="categoryDescription">
                                </div>
                                <div class="comment-toolbar border-0 rounded">
                                    <div class="d-flex justify-content-end">
                                        <span class="ql-formats me-0">
                                            <button class="ql-bold"></button>
                                            <button class="ql-italic"></button>
                                            <button class="ql-underline"></button>
                                            <button class="ql-list" value="ordered"></button>
                                            <button class="ql-list" value="bullet"></button>
                                            <button class="ql-link"></button>
                                            <button class="ql-image"></button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Submit and reset -->
                        <div class="mb-3">
                            <button type="submit" class="btn btn-primary me-sm-3 me-1 data-submit">Agregar</button>
                            <button type="reset" class="btn btn-outline-danger"
                                data-bs-dismiss="offcanvas">Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
    <!-- / Content -->
@endsection()

@section('styles')
    <link rel="stylesheet" href="{{ asset('vendor/libs/quill/editor.css') }}">
@endsection()

@section('scripts')
    <!-- Page JS -->
    <script src="{{ asset('js/app-ecommerce-offer-list.js') }}"></script>
@endsection
