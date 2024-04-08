@extends('layouts/layout')

@section('content')
    <!-- Content -->

    <div class="container-xxl flex-grow-1 container-p-y">

        <h4 class="py-3 mb-4">
            <span class="text-muted fw-light">eCommerce /</span><span> Agregar Combo</span>
        </h4>

        <div class="app-ecommerce">
            <form id="ecommercePriceAdd" enctype="multipart/form-data">

                <div
                    class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3">

                    <div class="d-flex flex-column justify-content-center">
                        <h4 class="mb-1 mt-3">Añadir un nuevo Combo</h4>
                    </div>
                    <div class="d-flex align-content-center flex-wrap gap-3">
                        <a href="{{ route('Productos') }}" class="btn btn-outline-secondary">Descartar</a>
                        <button type="submit" class="btn btn-primary" name="accion" value="publicar">Agregar
                            Combo</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-lg-8">
                        <!-- Product Information -->
                        <div class="card mb-4">
                            <div class="card-header">
                                <h5 class="card-tile mb-0">Información del Producto</h5>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12 col-lg-12">
                                        <div class="form-floating form-floating-outline mb-4">
                                            <input type="text" class="form-control" id="ecommerce-product-name"
                                                placeholder="Titulo de Producto" name="productTitle"
                                                aria-label="Product title">
                                            <label for="ecommerce-product-name">Nombre</label>
                                        </div>
                                    </div>
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
                        </div>
                        <!-- /Media -->
                    </div>
                    <!-- /Second column -->

                    <!-- Second column -->
                    <div class="col-12 col-lg-4">
                        <!-- Pricing Card -->
                        <div class="card mb-4">
                            <div class="card-header">
                                <h5 class="card-title mb-0">Precio</h5>
                            </div>
                            <div class="card-body">
                                <!-- Base Price -->
                                <div class="form-floating form-floating-outline mb-4">
                                    <div class="input-group input-group-merge">
                                        <span class="input-group-text">S/.</span>
                                        <div class="form-floating form-floating-outline">
                                            <input type="text" class="form-control numeral-mask" placeholder="499"
                                                aria-label="Amount (to the nearest dollar)" name="price">
                                            <label>Precio</label>
                                        </div>
                                        <span class="input-group-text">.00</span>
                                    </div>
                                </div>
                                <!-- Instock switch -->
                                <div class="d-flex justify-content-between align-items-center border-top pt-3">
                                    <p class="card-title mb-0">Multi Precios</p>
                                    <div class="w-25 d-flex justify-content-end">
                                        <label class="switch switch-primary  me-4 pe-2">
                                            <input type="checkbox" class="switch-input">
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

                        <div class="card mb-4">
                            <div class="card-header">
                                <h5 class="card-title mb-0">Periodo de Combo</h5>
                            </div>
                            <div class="card-body">
                                <div class="form-floating form-floating-outline mb-4">
                                    <input type="text" id="init-date" placeholder="YYYY-MM-DD" name="initDate" class="form-control">
                                    <label for="init-date">Inicio de periodo</label>
                                </div>
                                <div class="form-floating form-floating-outline mb-4">
                                    <input type="text" id="finsh-date" placeholder="YYYY-MM-DD" name="finishDate" class="form-control">
                                    <label for="finsh-date">Fin de periodo</label>
                                </div>
                            </div>
                        </div>
                        <!-- /Pricing Card -->
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
                </div>
                <div class="card">
                    <div class="card-datatable table-responsive pt-0">
                        <table class="datatables-basic table table-bordered">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>id</th>
                                    <th>Producto</th>
                                    <th>Cantidad</th>
                                    <th>Precio Uni.</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
        </div>

    </div>
    </form>
    </div>
    <!-- / Content -->
    <!-- Modal to add new record -->
    <div class="offcanvas offcanvas-end" id="add-new-record">
        <div class="offcanvas-header border-bottom">
            <h5 class="offcanvas-title" id="exampleModalLabel">Agregar Producto</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body flex-grow-1">
            <form class="add-new-record pt-0 row g-3" id="form-add-new-record" onsubmit="return false">
                <div class="col-sm-12">
                    <div class="input-group input-group-merge">
                        <div class="form-floating form-floating-outline">
                            <select id="product_c" name="product_c" class="select2 form-select dt-full-name"
                                data-placeholder="Seleccionar Producto">
                                <option value="0" selected disabled>Selecionar Producto</option>
                                @foreach ($products as $item)
                                    <option value="{{ $item->id_product }}">{{ $item->product_title }}
                                    </option>
                                @endforeach
                            </select>
                            <label for="vendor">Producto</label>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12">
                    <div class="input-group input-group-merge">
                        <span id="basicPost2" class="input-group-text"><i
                                class='mdi mdi-numeric-9-plus-box-multiple-outline'></i></span>
                        <div class="form-floating form-floating-outline">
                            <input type="text" id="basicEmail" name="quantity" class="form-control dt-post"
                                placeholder="Ingresar Cantidad" aria-describedby="basicPost2">
                            <label for="basicPost">Cantidad</label>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12">
                    <div class="input-group input-group-merge">
                        <span id="basicSalary2" class="input-group-text"><i class='mdi mdi-currency-usd'></i></span>
                        <div class="form-floating form-floating-outline">
                            <input type="number" id="basicSalary" name="priceProduct" class="form-control dt-salary"
                                placeholder="Ingresar Precio" aria-label="12000" value="00" aria-describedby="basicSalary2">
                            <label for="basicSalary">Precio</label>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12">
                    <button type="submit" class="btn btn-primary data-submit me-sm-3 me-1">Agregar</button>
                    <button type="reset" class="btn btn-outline-secondary"
                        data-bs-dismiss="offcanvas">Cancelar</button>
                </div>
            </form>

        </div>
    </div>
@endsection()

@section('styles')
    <link rel="stylesheet" href="{{ asset('vendor/libs/quill/editor.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor/libs/tagify/tagify.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor/libs/spinkit/spinkit.css') }}">
@endsection()

@section('scripts')
    <script src="{{ asset('vendor/libs/autosize/autosize.js') }}"></script>
    <script src="{{ asset('vendor/libs/cleavejs/cleave.js') }}"></script>
    <script src="{{ asset('vendor/libs/cleavejs/cleave-phone.js') }}"></script>
    <script src="{{ asset('vendor/libs/tagify/tagify.js') }}"></script>
    <script src="{{ asset('vendor/libs/block-ui/block-ui.js') }}"></script>
    <script src="{{ asset('vendor/libs/bootstrap-datepicker/bootstrap-datepicker.js') }}"></script>
    <script src="{{ asset('vendor/libs/bootstrap-daterangepicker/bootstrap-daterangepicker.js') }}"></script>

    <script src="{{ asset('js/forms-selects.js') }}"></script>
    <script src="{{ asset('js/app-ecommerce-combo-add.js') }}"></script>
@endsection
