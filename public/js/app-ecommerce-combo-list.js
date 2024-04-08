"use strict";
$(function () {
    let token = $('meta[name="csrf-token"]').attr("content");

    let e, s, n;
    n = (
        isDarkStyle
            ? ((e = config.colors_dark.borderColor),
              (s = config.colors_dark.bodyBg),
              config.colors_dark)
            : ((e = config.colors.borderColor),
              (s = config.colors.bodyBg),
              config.colors)
    ).headingColor;
    var t = $(".datatables-products"),
        a = {
            1: { title: "Scheduled", class: "bg-label-warning" },
            2: { title: "Publish", class: "bg-label-success" },
            3: { title: "Inactive", class: "bg-label-danger" },
        },
        o = { 0: { title: "Out_of_Stock" }, 1: { title: "In_Stock" } },
        c = { 0: { title: "Out of Stock" }, 1: { title: "In Stock" } };
    t.length &&
        (t.DataTable({
            ajax: "tableCombos",
            columns: [
                { data: "id" },
                { data: "name" },
                { data: "price" },
                { data: "init" },
                { data: "finish" },
                { data: "status" },
                { data: "products" },
                { data: "" },
            ],
            columnDefs: [
                {
                    className: "control",
                    searchable: !1,
                    orderable: !1,
                    responsivePriority: 2,
                    targets: 0,
                    render: function (t, e, s, n) {
                        return "";
                    },
                },
                {
                    targets: 1,
                    responsivePriority: 1,
                    render: function (t, e, s, n) {
                        var a = s.name.substring(0, 30); // Limita a 30 caracteres
                        var restOfName = s.name.length > 30 ? "..." : ""; // Añade puntos suspensivos si el nombre es más largo
                        
                        var i = s.id,
                            c = s.image;
                        return (
                            '<div class="d-flex justify-content-start align-items-center product-name"><div class="avatar-wrapper me-3"><div class="avatar rounded-2 bg-label-secondary">' +
                            ('<img src="/storage/combos/' +
                                c +
                                '" alt="Product-' +
                                i +
                                '" class="rounded-2">') +
                            '</div></div><div class="d-flex flex-column"><span class="text-nowrap text-heading fw-medium">' +
                            a + restOfName + // Mostrar el nombre recortado y los puntos suspensivos si el nombre es más largo
                            "</span></div></div>"
                        );
                    },
                },
                {
                    targets: 2,
                    render: function (t, e, s, n) {
                        return "<span>S/. " + s.price + "</span>";
                    },
                },
                {
                    targets: 3,
                    render: function (t, e, s, n) {
                        return "<span>" + s.init + "</span>";
                    },
                },
                {
                    targets: 4,
                    responsivePriority: 4,
                    render: function (t, e, s, n) {
                        return "<span> " + s.finish + "</span>";
                    },
                },
                {
                    targets: 5,
                    orderable: !1,
                    responsivePriority: 3,
                    render: function (t, e, s, n) {
                        const checkedAttribute = t === 1 ? "checked" : "";
                        return (
                            '<label class="switch switch-lg"><input type="checkbox" class="switch-input btn-status" ' +
                            checkedAttribute +
                            '><span class="switch-toggle-slider"><span class="switch-on"></span><span class="switch-off"></span></span></label>'
                        );
                    },
                },
                {
                    targets: -2,
                    className: "text-center",
                    render: function (t, e, s, n) {
                        return '<button type="button" class="btn btn-icon btn-primary btn-fab demo waves-effect waves-light view_products"><span class="tf-icons mdi mdi-eye-outline mdi-24px"></span></button>';
                    },
                },
                {
                    targets: -1,
                    title: "Actions",
                    searchable: !1,
                    orderable: !1,
                    render: function (t, e, s, n) {
                        return '<div class="d-inline-block text-nowrap"><button class="btn btn-sm btn-icon"><i class="mdi mdi-pencil-outline"></i></button><button class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="mdi mdi-dots-vertical me-2"></i></button><div class="dropdown-menu dropdown-menu-end m-0"><a href="javascript:0;" class="dropdown-item">View</a><a href="javascript:0;" class="dropdown-item">Suspend</a></div></div>';
                    },
                },
            ],
            order: [2, "asc"],
            dom: '<"card-header d-flex border-top rounded-0 flex-wrap py-md-0"<"me-5 ms-n2"f><"d-flex justify-content-start justify-content-md-end align-items-baseline"<"dt-action-buttons d-flex align-items-start align-items-md-center justify-content-sm-center mb-3 mb-sm-0 gap-3"lB>>>t<"row mx-1"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
            lengthMenu: [7, 10, 20, 50, 70, 100],
            language: {
                sLengthMenu: "_MENU_",
                search: "",
                searchPlaceholder: "Buscar Producto",
                info: "Mostrando de _START_ al _END_ de  _TOTAL_ registros",
                oPaginate: {
                    sFirst: "Primero",
                    sLast: "Último",
                    sNext: "Siguiente",
                    sPrevious: "Anterior",
                },
            },
            buttons: [
                {
                    extend: "collection",
                    className:
                        "btn btn-label-secondary dropdown-toggle me-3 waves-effect waves-light",
                    text: '<i class="mdi mdi-export-variant me-1"></i><span class="d-none d-sm-inline-block">Export </span>',
                    buttons: [
                        {
                            extend: "print",
                            text: '<i class="mdi mdi-printer-outline me-1" ></i>Print',
                            className: "dropdown-item",
                            exportOptions: {
                                columns: [1, 2, 3, 4, 5],
                                format: {
                                    body: function (t, e, s) {
                                        var n;
                                        return t.length <= 0
                                            ? t
                                            : ((t = $.parseHTML(t)),
                                              (n = ""),
                                              $.each(t, function (t, e) {
                                                  void 0 !== e.classList &&
                                                  e.classList.contains(
                                                      "product-name"
                                                  )
                                                      ? (n +=
                                                            e.lastChild
                                                                .firstChild
                                                                .textContent)
                                                      : void 0 === e.innerText
                                                      ? (n += e.textContent)
                                                      : (n += e.innerText);
                                              }),
                                              n);
                                    },
                                },
                            },
                            customize: function (t) {
                                $(t.document.body)
                                    .css("color", n)
                                    .css("border-color", e)
                                    .css("background-color", s),
                                    $(t.document.body)
                                        .find("table")
                                        .addClass("compact")
                                        .css("color", "inherit")
                                        .css("border-color", "inherit")
                                        .css("background-color", "inherit");
                            },
                        },
                        {
                            extend: "csv",
                            text: '<i class="mdi mdi-file-document-outline me-1" ></i>Csv',
                            className: "dropdown-item",
                            exportOptions: {
                                columns: [1, 2, 3, 4, 5],
                                format: {
                                    body: function (t, e, s) {
                                        var n;
                                        return t.length <= 0
                                            ? t
                                            : ((t = $.parseHTML(t)),
                                              (n = ""),
                                              $.each(t, function (t, e) {
                                                  void 0 !== e.classList &&
                                                  e.classList.contains(
                                                      "product-name"
                                                  )
                                                      ? (n +=
                                                            e.lastChild
                                                                .firstChild
                                                                .textContent)
                                                      : void 0 === e.innerText
                                                      ? (n += e.textContent)
                                                      : (n += e.innerText);
                                              }),
                                              n);
                                    },
                                },
                            },
                        },
                        {
                            extend: "excel",
                            text: '<i class="mdi mdi-file-excel-outline me-1"></i>Excel',
                            className: "dropdown-item",
                            exportOptions: {
                                columns: [1, 2, 3, 4, 5],
                                format: {
                                    body: function (t, e, s) {
                                        var n;
                                        return t.length <= 0
                                            ? t
                                            : ((t = $.parseHTML(t)),
                                              (n = ""),
                                              $.each(t, function (t, e) {
                                                  void 0 !== e.classList &&
                                                  e.classList.contains(
                                                      "product-name"
                                                  )
                                                      ? (n +=
                                                            e.lastChild
                                                                .firstChild
                                                                .textContent)
                                                      : void 0 === e.innerText
                                                      ? (n += e.textContent)
                                                      : (n += e.innerText);
                                              }),
                                              n);
                                    },
                                },
                            },
                        },
                        {
                            extend: "pdf",
                            text: '<i class="mdi mdi-file-pdf-box me-1"></i>Pdf',
                            className: "dropdown-item",
                            exportOptions: {
                                columns: [1, 2, 3, 4, 5],
                                format: {
                                    body: function (t, e, s) {
                                        var n;
                                        return t.length <= 0
                                            ? t
                                            : ((t = $.parseHTML(t)),
                                              (n = ""),
                                              $.each(t, function (t, e) {
                                                  void 0 !== e.classList &&
                                                  e.classList.contains(
                                                      "product-name"
                                                  )
                                                      ? (n +=
                                                            e.lastChild
                                                                .firstChild
                                                                .textContent)
                                                      : void 0 === e.innerText
                                                      ? (n += e.textContent)
                                                      : (n += e.innerText);
                                              }),
                                              n);
                                    },
                                },
                            },
                        },
                        {
                            extend: "copy",
                            text: '<i class="mdi mdi-content-copy me-1"></i>Copy',
                            className: "dropdown-item",
                            exportOptions: {
                                columns: [1, 2, 3, 4, 5],
                                format: {
                                    body: function (t, e, s) {
                                        var n;
                                        return t.length <= 0
                                            ? t
                                            : ((t = $.parseHTML(t)),
                                              (n = ""),
                                              $.each(t, function (t, e) {
                                                  void 0 !== e.classList &&
                                                  e.classList.contains(
                                                      "product-name"
                                                  )
                                                      ? (n +=
                                                            e.lastChild
                                                                .firstChild
                                                                .textContent)
                                                      : void 0 === e.innerText
                                                      ? (n += e.textContent)
                                                      : (n += e.innerText);
                                              }),
                                              n);
                                    },
                                },
                            },
                        },
                    ],
                },
                {
                    text: '<i class="mdi mdi-plus me-0 me-sm-1"></i><span class="d-none d-sm-inline-block">Agregar</span>',
                    className:
                        "add-new btn btn-primary ms-n1 waves-effect waves-light",
                    action: function () {
                        window.location.href = "Agregar_Combo";
                    },
                },
            ],
            responsive: {
                details: {
                    display: $.fn.dataTable.Responsive.display.modal({
                        header: function (t) {
                            return "Details of " + t.data().product_name;
                        },
                    }),
                    type: "column",
                    renderer: function (t, e, s) {
                        s = $.map(s, function (t, e) {
                            return "" !== t.title
                                ? '<tr data-dt-row="' +
                                      t.rowIndex +
                                      '" data-dt-column="' +
                                      t.columnIndex +
                                      '"><td>' +
                                      t.title +
                                      ":</td> <td>" +
                                      t.data +
                                      "</td></tr>"
                                : "";
                        }).join("");
                        return (
                            !!s &&
                            $('<table class="table"/><tbody />').append(s)
                        );
                    },
                },
            },
        }),
        $(".dataTables_length").addClass("mt-0 mt-md-3"),
        $(".dt-action-buttons").addClass("pt-0"),
        $(".dt-buttons").addClass("d-flex flex-wrap")),
        setTimeout(() => {
            $(".dataTables_filter .form-control").removeClass(
                "form-control-sm"
            ),
                $(".dataTables_length .form-select").removeClass(
                    "form-select-sm"
                );
        }, 300);
    t.on("click", ".btn-status", function () {
        let row = $(this).closest("tr");
        let rowData = $(this).closest("table").DataTable().row(row).data(),
            isChecked = $(this).prop("checked");

        let id = rowData.id,
            status = isChecked ? "1" : "0",
            csrfToken = $('meta[name="csrf-token"]').attr("content");

        let formData = {
            id: id,
            status: status,
            _token: csrfToken, // Agregar el token CSRF aquí
        };

        $.ajax({
            url: "statusCombo",
            method: "POST",
            data: formData,
            dataType: "json",
        })
            .done(function (response) {
                if (response.success) {
                    Toast.fire({
                        icon: "success",
                        title: "Estado de combo actualizado",
                    });
                } else {
                    console.error(
                        "Hubo un error al actualizar el combo:",
                        response.error
                    );
                }
            })
            .fail(function (xhr, status, error) {
                console.error("Hubo un error en la solicitud AJAX:", error);
            });
    });

    t.on("click", ".view_products", function () {
        let row = $(this).closest("tr");
        let rowData = $(this).closest("table").DataTable().row(row).data();

        $("#combo").text(rowData.name);

        $.ajax({
            url: "comboItems",
            type: "POST",
            dataType: "json",
            data: { id: rowData.id, _token: token },
            beforeSend: () => {},
        })
            .done((response) => {

                $("#amount").text(response.length  + " Items")
                // Obtener el cuerpo de la tabla
                let tableBody = $(".table_products tbody");

                // Limpiar el cuerpo de la tabla antes de agregar nuevos elementos
                tableBody.empty();

                // Iterar sobre los productos recibidos
                response.forEach((item, index) => {
                    // Obtener los datos del producto
                    let productTitle = item.product.product_title;
                    let imageSrc = `/storage/products/${item.product.featured_image}`;
                    let quantity = item.quantity;
                    let cost = item.price_cp;

                    // Crear la estructura HTML para la fila
                    let htmlContent = `
                    <tr>
                        <td class="text-nowrap">
                        <div class="avatar me-3">
                            <img src="${imageSrc}" alt="${productTitle}" class="rounded-2">
                            </div>
                        </td>
                        <td class="text-nowrap">${productTitle}</td>
                        <td class="text-nowrap">${quantity}</td>
                        <td class="text-nowrap">${cost}</td>
                    </tr>
                `;

                    // Agregar el contenido HTML al cuerpo de la tabla
                    tableBody.append(htmlContent);
                });
            })
            .fail((error) => {
                console.log("error :" + error.responseText);
            })
            .always(() => {});

        $("#shareProject").modal("show");
    });
    const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        },
    });
});
