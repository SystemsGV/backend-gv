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
                    <!-- First column-->
                    <div class="col-12 col-lg-8">
                        <!-- Product Information -->
                        <div class="card mb-4">
                            <div class="card-header">
                                <h5 class="card-tile mb-0">Información del Producto</h5>
                            </div>
                            <div class="card-body">
                                <div class="form-floating form-floating-outline mb-4">
                                    <input type="text" class="form-control" id="ecommerce-product-name"
                                        placeholder="Titulo de Producto" name="productTitle" aria-label="Product title">
                                    <label for="ecommerce-product-name">Nombre</label>
                                </div>
                                <div>
                                    <label class="form-label">Descripcion lateral </label>
                                    <div class="form-control p-0 pt-1">
                                        <div class="comment-toolbar border-0 border-bottom">
                                            <div class="d-flex justify-content-start">
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
                                        <div class="short-editor border-0 pb-1" id="short-editor">
                                        </div>
                                    </div>
                                </div>
                                <br>
                                <!-- Comment -->
                                <div>
                                    <label class="form-label"> Descripción General</label>
                                    <div class="form-control p-0 pt-1">
                                        <div class="comment-toolbar2 border-0 border-bottom">
                                            <div class="d-flex justify-content-start">
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
                                        <div class="general-editor border-0 pb-1" id="general-editor">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /Product Information -->
                        <!-- Media -->
                        <div class="card mb-4">
                            <div class="card-header d-flex justify-content-between align-items-center">
                                <h5 class="mb-0 card-title">Imagenes</h5>
                            </div>
                            <div class="card-body">
                                <div class="d-flex align-items-start align-items-sm-center gap-4">
                                    <div class="button-wrapper">
                                        <label for="upload" class="btn btn-primary me-2 mb-3" tabindex="0">
                                            <span class="d-none d-sm-block">Imagen Destacada 1</span>
                                            <i class="mdi mdi-tray-arrow-up d-block d-sm-none"></i>
                                            <input type="file" id="upload" name="featured_image"
                                                class="account-file-input" hidden=""
                                                accept="image/png, image/jpeg, image/jpg">
                                        </label>
                                        <button type="button" class="btn btn-outline-danger account-image-reset mb-3">
                                            <i class="mdi mdi-reload d-block d-sm-none"></i>
                                            <span class="d-none d-sm-block">BORRAR</span>
                                        </button>
                                        <div class="small">JPG, JPEG o PNG permitidos. Tamaño máximo de 800K</div>
                                    </div>
                                    <img src="{{ asset('img/backgrounds/img_demo.png') }}" alt="user-avatar"
                                        class="d-block h-px-120 rounded" id="uploadedAvatar">
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="d-flex align-items-start align-items-sm-center gap-4">
                                    <div class="button-wrapper">
                                        <label for="upload2" class="btn btn-primary me-2 mb-3" tabindex="0">
                                            <span class="d-none d-sm-block">Imagen Destacada 2</span>
                                            <i class="mdi mdi-tray-arrow-up d-block d-sm-none"></i>
                                            <input type="file" id="upload2" name="featured_image2"
                                                class="account-file-input2" hidden=""
                                                accept="image/png, image/jpeg, image/jpg">
                                        </label>
                                        <button type="button" class="btn btn-outline-danger account-image-reset2 mb-3">
                                            <i class="mdi mdi-reload d-block d-sm-none"></i>
                                            <span class="d-none d-sm-block">BORRAR</span>
                                        </button>
                                        <div class="small">JPG, JPEG o PNG permitidos. Tamaño máximo de 800K</div>
                                    </div>
                                    <img src="{{ asset('img/backgrounds/img_demo.png') }}" alt="user-avatar"
                                        class="d-block h-px-120 rounded" id="uploadedAvatar2">
                                </div>
                            </div>
                        </div>
                        <!-- /Media -->
                    </div>
                    <!-- /Second column -->

                    <!-- Second column -->
                    <div class="col-12 col-lg-4">
                        <!-- Organize Card -->
                        <div class="card mb-4">
                            <div class="card-header">
                                <h5 class="card-title mb-0">Organizar</h5>
                            </div>
                            <div class="card-body">
                                <!-- Category -->
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
                                <!-- Subcategory -->
                                <div class="form-floating form-floating-outline mb-4">
                                    <select id="subcategory-org" name="subcategoryOrg" class="select2 form-select"
                                        data-placeholder="Seleccionar Subcategoria">
                                        <option value="0" disabled>Selecionar SubCategoria</option>
                                    </select>
                                    <label for="vendor">Subcategoria</label>
                                </div>
                            </div>
                        </div>
                        <!-- /Organize Card -->
                        <!-- Pricing Card -->
                        <div class="card mb-4">
                            <div class="card-header">
                                <h5 class="card-title mb-0">Precio</h5>
                            </div>
                            <div class="card-body">
                                <!-- Base Price -->
                                <div class="form-floating form-floating-outline mb-4">
                                    <input type="number" class="form-control" id="ecommerce-product-price"
                                        placeholder="Precio" name="productPrice" aria-label="Product price">
                                    <label for="ecommerce-product-price">Precio Inicial</label>
                                </div>
                                <!-- Offer -->
                                <div class="mb-4 col ecommerce-select2-dropdown">
                                    <div class="form-floating form-floating-outline">
                                        <select id="offer" name="offer" class="select2 form-select" disabled
                                            data-placeholder="Seleccionar Oferta">
                                            <option value="">Seleccionar Oferta</option>
                                            @foreach ($offers as $offer)
                                                <option value="{{ $offer->id_offer }}"
                                                    data-percentage="{{ $offer->offer_percentage }}">
                                                    {{ $offer->offer_title }}
                                                </option>
                                            @endforeach
                                        </select>
                                        <label for="offer">Oferta</label>
                                    </div>
                                </div>
                                <div class="mb-4 col ecommerce-select2-dropdown">
                                    <div class="form-floating form-floating-outline" id="percentage">

                                    </div>
                                </div>
                                <!-- Discounted Price -->
                                <div class="form-floating form-floating-outline mb-4" id="amount_residual">

                                </div>
                                <div class="form-floating form-floating-outline" id="amount_dsc">

                                </div>
                                <!-- Instock switch -->
                                <div class="d-flex justify-content-between align-items-center border-top pt-3">
                                    <p class="card-title mb-0">Multi Precios</p>
                                    <div class="w-25 d-flex justify-content-end">
                                        <label class="switch switch-primary  me-4 pe-2">
                                            <input type="checkbox" class="switch-input" checked="">
                                            <span class="switch-toggle-slider">
                                                <span class="switch-on">
                                                    <span class="switch-off"></span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /Pricing Card -->
                        <!--- IGV ------>
                        <div class="card mb-4">
                            <div class="card-header">
                                <h5 class="card-title mb-0">IGV</h5>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md mb-md-0 mb-2">
                                        <div class="form-check custom-option custom-option-label custom-option-basic">
                                            <label class="form-check-label custom-option-content" for="customRadioTemp5">
                                                <input name="customRadioTemp" class="form-check-input" type="radio"
                                                    value="18" id="customRadioTemp5" checked="">
                                                <span class="custom-option-header">
                                                    <span class="h6 mb-0">IGV</span>
                                                    <span>% 18</span>
                                                </span>
                                                <span class="custom-option-body">
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-md">
                                        <div class="form-check custom-option custom-option-label custom-option-basic">
                                            <label class="form-check-label custom-option-content" for="customRadioTemp6">
                                                <input name="customRadioTemp" class="form-check-input" type="radio"
                                                    value="10" id="customRadioTemp6">
                                                <span class="custom-option-header">
                                                    <span class="h6 mb-0">IGV 2</span>
                                                    <span>% 10</span>
                                                </span>
                                                <span class="custom-option-body">
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!----- /IGV  ------>
                        <!--- SEO ------>
                        <div class="card mb-4">
                            <div class="card-header">
                                <h5 class="card-title mb-0">SEO</h5>
                            </div>
                            <div class="card-body">
                                <div class="form-floating form-floating-outline mb-4">
                                    <input type="text" class="form-control" id="ecommerce-product-seo-title"
                                        placeholder="SEO Titulo" name="seoTitle" aria-label="SEO Titulo">
                                    <label for="ecommerce-product-price">SEO Titulo</label>
                                </div>
                                <div class="form-floating form-floating-outline mb-4">
                                    <textarea id="autosize-demo" rows="3" class="form-control" name="seoDescription"></textarea>
                                    <label for="ecommerce-product-price">SEO Descripción</label>
                                </div>
                                <!-- Tags -->
                                <div class="mb-3">
                                    <div class="form-floating form-floating-outline">
                                        <input id="ecommerce-product-tags" class="form-control h-auto" name="seoTags"
                                            value="" aria-label="Product Tags">
                                        <label for="ecommerce-product-tags">SEO Keywords</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!----- /IGV  ------>

                    </div>
                    <!-- /Second column -->
                </div>
        </div>
        </form>
    </div>
    <!-- / Content -->
@endsection()

@section('styles')
    <link rel="stylesheet" href="{{ asset('vendor/libs/quill/editor.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor/libs/flatpickr/flatpickr.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor/libs/tagify/tagify.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor/libs/spinkit/spinkit.css') }}">
@endsection()

@section('scripts')
    <!-- Page JS -->
    <script src="{{ asset('vendor/libs/block-ui/block-ui.js') }}"></script>
    <script src="{{ asset('vendor/libs/jquery-repeater/jquery-repeater.js') }}"></script>
    <script src="{{ asset('vendor/libs/flatpickr/flatpickr.js') }}"></script>
    <script src="{{ asset('vendor/libs/autosize/autosize.js') }}"></script>
    <script src="{{ asset('vendor/libs/tagify/tagify.js') }}"></script>
    <script src="{{ asset('js/app-ecommerce-product-add.js') }}"></script>
@endsection
