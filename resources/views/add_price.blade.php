@extends('layouts/layout')

@section('content')
    <!-- Content -->

    <div class="container-xxl flex-grow-1 container-p-y">



        <h4 class="py-3 mb-4">
            <span class="text-muted fw-light">eCommerce /</span><span> Agregar Producto</span>
        </h4>

        <div class="app-ecommerce">
            <form id="ecommercePriceAdd" enctype="multipart/form-data">

                <!-- Add Product -->
                <div
                    class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3">

                    <div class="d-flex flex-column justify-content-center">
                        <h4 class="mb-1 mt-3">Añadir un nuevo producto</h4>
                    </div>
                    <div class="d-flex align-content-center flex-wrap gap-3">
                        <a href="{{ route('Productos') }}" class="btn btn-outline-secondary">Descartar</a>
                        <button type="submit" class="btn btn-primary" name="accion" value="publicar">Agregar
                            Precio</button>
                    </div>
                </div>
                <div class="row">
                    <!-- Product Information -->
                    <div class="card mb-4">
                        <div class="card-header">
                            <h5 class="card-tile mb-0">Precio</h5>
                        </div>
                        <div class="card-body">
                            <h6>1. Titulo Precio</h6>
                            <div class="row">
                                <div class="col-12 col-lg-12">
                                    <div class="form-floating form-floating-outline  mb-4">
                                        <textarea id="autosize-demo" rows="3" class="form-control" name="title_price"></textarea>
                                    </div>
                                </div>
                            </div>
                            <!-- Category -->
                            <h6>2. Producto y Precio</h6>
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
                                    <div class="form-floating form-floating-outline mb-4">
                                        <select id="product-org" name="productPrice" class="select2 form-select"
                                            data-placeholder="Seleccionar Producto">
                                            <option value="0" disabled>Selecionar Producto</option>
                                        </select>
                                        <label for="vendor">Producto</label>
                                    </div>
                                </div>
                                <div class="col-12 col-lg-4">
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
                                </div>
                            </div>
                            <h6>3. Elegir Fechas </h6>

                            <div class="row">
                                <div class="input-group input-daterange" id="bs-datepicker-daterange">
                                    <input type="text" id="dateRangePicker" placeholder="MM-DD-YYYY"
                                        class="form-control" name="dateInit">
                                    <span class="input-group-text">Hasta</span>
                                    <input type="text" placeholder="MM-DD-YYYY" class="form-control"
                                        id="dateRangePickerEnd" name="dateFinish">
                                </div>
                            </div>
                            <br>
                            <h6>4. Dias y Horario</h6>
                            <div class="row justify-content-center text-center mb-4">
                                <div class="col-md-3 mb-md-0 mb-10">
                                    <div class="form-check custom-option custom-option-icon">
                                        <label class="form-check-label custom-option-content" for="choice_dates">
                                            <span class="custom-option-body">
                                                <i class="mdi mdi-calendar-month-outline"></i>
                                                <span class="custom-option-title"> Fechas </span>
                                                <small> Aqui puedes seleccionar por fechas del año <code>
                                                        (02/06/2024)</code>. </small>
                                            </span>
                                            <input  class="form-check-input" type="radio"
                                                value="1" id="choice_dates" name="choice_dates">
                                        </label>
                                    </div>
                                </div>
                                <div class="col-md-3 mb-md-0 mb-10">
                                    <div class="form-check custom-option custom-option-icon">
                                        <label class="form-check-label custom-option-content" for="choice_days">
                                            <span class="custom-option-body">
                                                <i class="mdi mdi-calendar-week-outline"></i>
                                                <span class="custom-option-title">Dias de la Semana</span>
                                                <small> Aqui puedes seleccionar por dias de la semana <code>
                                                        (Lun,Mar,Sab)</code>.</small>
                                            </span>
                                            <input  class="form-check-input" type="radio"
                                                value="2" id="choice_days" name="choice_dates">
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="collapse" id="collapse_dates">
                                <div class="row">
                                    <div class="col-12 col-lg-6">
                                        <div class="form-floating form-floating-outline">
                                            <input type="text" class="form-control" placeholder="YYYY/MM/DD"
                                                id="flatpickr-multi" name="select_dates">
                                            <label for="flatpickr-multi">Seleccionar Fechas</label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <div class="form-floating form-floating-outline mb-4">
                                            <select id="shift-org-dates" name="shift-org-dates" class="select2 form-select"
                                                data-placeholder="Seleccionar Producto">
                                                <option value="0" disabled>Selecionar Turno</option>
                                                <option value="1">Turno Completo </option>
                                                <option value="2">Turno 2:00 pm a 6:00 pm</option>
                                            </select>
                                            <label for="shift-org-dates">Turno</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="collapse" id="collapse_days">
                                <div class="row">
                                    <div class="col-12 col-lg-6">
                                        <div class="form-floating form-floating-outline">
                                            <select id="selectpickerSelectDeselect" class="selectpicker w-100"
                                                data-style="btn-default" multiple="" data-actions-box="true" name="select_days">
                                                <option value="Lun">Lunes</option>
                                                <option value="Mar">Martes</option>
                                                <option value="Mie">Miercoles</option>
                                                <option value="Jue">Jueves</option>
                                                <option value="Vie">Viernes</option>
                                                <option value="Sab">Sabado</option>
                                                <option value="Dom">Domingo</option>
                                            </select>
                                            <label for="selectpickerSelectDeselect">Dias de la Semana</label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <!-- Subcategory -->
                                        <div class="form-floating form-floating-outline mb-4">
                                            <select id="shift-org-days" name="shift-org-days"
                                                class="select2 form-select" data-placeholder="Seleccionar Turno">
                                                <option value="0" disabled>Selecionar Turno</option>
                                                <option value="1">Turno Completo </option>
                                                <option value="2">Turno 2:00 pm a 6:00 pm</option>
                                            </select>
                                            <label for="shift-org-days">Turno</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
        </div>
        </form>
    </div>
    <!-- / Content -->
@endsection()

@section('styles')
    <link rel="stylesheet" href="{{ asset('vendor/libs/flatpickr/flatpickr.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor/libs/spinkit/spinkit.css') }}">
@endsection()

@section('scripts')
    <!-- Page JS -->
    <script src="{{ asset('vendor/libs/autosize/autosize.js') }}"></script>
    <script src="{{ asset('vendor/libs/cleavejs/cleave.js') }}"></script>
    <script src="{{ asset('vendor/libs/cleavejs/cleave-phone.js') }}"></script>
    <script src="{{ asset('vendor/libs/block-ui/block-ui.js') }}"></script>
    <script src="{{ asset('vendor/libs/flatpickr/flatpickr.js') }}"></script>
    <script src="{{ asset('vendor/libs/bootstrap-datepicker/bootstrap-datepicker.js') }}"></script>
    <script src="{{ asset('vendor/libs/bootstrap-daterangepicker/bootstrap-daterangepicker.js') }}"></script>

    <script src="{{ asset('js/forms-selects.js') }}"></script>
    <script src="{{ asset('js/app-ecommerce-price-add.js') }}"></script>
@endsection
