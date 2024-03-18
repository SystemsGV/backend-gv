@extends('layouts/layout')

@section('content')
    <!-- Content -->
    <div class="container-xxl flex-grow-1 container-p-y">


        <h4 class="py-3 mb-4">
            <span class="text-muted fw-light">eCommerce /</span> Lista de Combos
        </h4>
        <!-- Product List Table -->
        <div class="card">
            <div class="card-header">
                <h5 class="card-title">Filter</h5>
            </div>
            <div class="card-datatable table-responsive">
                <table class="datatables-products table">
                    <thead class="table-light">
                        <tr>
                            <th></th>
                            <th>Combo</th>
                            <th>Precio</th>
                            <th>Fecha de Inicio</th>
                            <th>Fecha Fin</th>
                            <th>Estado</th>
                            <th>Productos</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>

    </div>
    <!-- / Content -->

    <!-- Share Project Modal -->
    <div class="modal fade" id="shareProject" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-simple modal-enable-otp modal-dialog-centered">
            <div class="modal-content p-3 p-md-5">
                <div class="modal-body pt-3 pt-md-0">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    <div class="text-center">
                        <h3 class="mb-2" id="combo"></h3>
                        <p>Lista de Items</p>

                    </div>
                </div>
                <h5 class="mb-3" id="amount"></h5>
                <div class="table-responsive">
                    <table class="table table_products table-borderless m-0" id="table_products">
                        <thead class="border-top">
                            <tr>
                                <th>Imagen</th>
                                <th>Item</th>
                                <th>Cantidad</th>
                                <th>Costo U.
                            </tr>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <!--/ Share Project Modal -->
@endsection()

@section('styles')
@endsection()

@section('scripts')
    <!-- Page JS -->
    <script src="{{ asset('js/app-ecommerce-combo-list.js') }}"></script>
@endsection
