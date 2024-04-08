"use strict";
$(function () {
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
        i = {
            0: { title: "Household" },
            1: { title: "Office" },
            2: { title: "Electronics" },
            3: { title: "Shoes" },
            4: { title: "Accessories" },
            5: { title: "Game" },
        },
        o = { 0: { title: "Out_of_Stock" }, 1: { title: "In_Stock" } },
        c = { 0: { title: "Out of Stock" }, 1: { title: "In Stock" } };
    t.length &&
        (t.DataTable({
            ajax: assetsPath + "json/ecommerce-product-list.json",
            columns: [
                { data: "id" },
                { data: "id" },
                { data: "product_name" },
                { data: "category" },
                { data: "stock" },
                { data: "sku" },
                { data: "price" },
                { data: "quantity" },
                { data: "status" },
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
                    orderable: !1,
                    checkboxes: {
                        selectAllRender:
                            '<input type="checkbox" class="form-check-input">',
                    },
                    render: function () {
                        return '<input type="checkbox" class="dt-checkboxes form-check-input" >';
                    },
                    searchable: !1,
                },
                {
                    targets: 2,
                    responsivePriority: 1,
                    render: function (t, e, s, n) {
                        var a = s.product_name,
                            i = s.id,
                            o = s.product_brand,
                            c = s.image;
                        return (
                            '<div class="d-flex justify-content-start align-items-center product-name"><div class="avatar-wrapper me-3"><div class="avatar rounded-2 bg-label-secondary">' +
                            (c
                                ? '<img src="' +
                                  assetsPath +
                                  "img/ecommerce-images/" +
                                  c +
                                  '" alt="Product-' +
                                  i +
                                  '" class="rounded-2">'
                                : '<span class="avatar-initial rounded-2 bg-label-' +
                                  [
                                      "success",
                                      "danger",
                                      "warning",
                                      "info",
                                      "dark",
                                      "primary",
                                      "secondary",
                                  ][Math.floor(6 * Math.random())] +
                                  '">' +
                                  (c = (
                                      ((c =
                                          (a = s.product_brand).match(
                                              /\b\w/g
                                          ) || []).shift() || "") +
                                      (c.pop() || "")
                                  ).toUpperCase()) +
                                  "</span>") +
                            '</div></div><div class="d-flex flex-column"><span class="text-nowrap text-heading fw-medium">' +
                            a +
                            '</span><small class="text-truncate d-none d-sm-block">' +
                            o +
                            "</small></div></div>"
                        );
                    },
                },
                {
                    targets: 3,
                    responsivePriority: 5,
                    render: function (t, e, s, n) {
                        s = i[s.category].title;
                        return (
                            "<h6 class='text-truncate d-flex align-items-center mb-0'>" +
                            {
                                 :
                                    '<span class="avatar-sm rounded-circle d-flex justify-content-center align-items-center bg-label-warning me-2"><i class="mdi mdi-home-outline"></i></span>',
                                Office: '<span class="avatar-sm rounded-circle d-flex justify-content-center align-items-center bg-label-success me-2"><i class="mdi mdi-briefcase-variant-outline"></i></span>',
                                Electronics:
                                    '<span class="avatar-sm rounded-circle d-flex justify-content-center align-items-center bg-label-primary me-2"><i class="mdi mdi-cellphone"></i></span>',
                                Shoes: '<span class="avatar-sm rounded-circle d-flex justify-content-center align-items-center bg-label-info me-2"><i class="mdi mdi-shoe-sneaker"></i></span>',
                                Accessories:
                                    '<span class="avatar-sm rounded-circle d-flex justify-content-center align-items-center bg-label-secondary me-2"><i class="mdi mdi-watch"></i></span>',
                                Game: '<span class="avatar-sm rounded-circle d-flex justify-content-center align-items-center bg-label-dark me-2"><i class="mdi mdi-controller"></i></span>',
                            }[s] +
                            s +
                            "</h6>"
                        );
                    },
                },
                {
                    targets: 4,
                    orderable: !1,
                    responsivePriority: 3,
                    render: function (t, e, s, n) {
                        s = s.stock;
                        return (
                            "<span class='text-truncate'>" +
                            {
                                Out_of_Stock:
                                    '<label class="switch switch-primary switch-sm"><input type="checkbox" class="switch-input" id="switch"><span class="switch-toggle-slider"><span class="switch-off"></span></span></label>',
                                In_Stock:
                                    '<label class="switch switch-primary switch-sm"><input type="checkbox" class="switch-input" checked=""><span class="switch-toggle-slider"><span class="switch-on"></span></span></label>',
                            }[o[s].title] +
                            '<span class="d-none">' +
                            o[s].title +
                            "</span></span>"
                        );
                    },
                },
                {
                    targets: 5,
                    render: function (t, e, s, n) {
                        return "<span>" + s.sku + "</span>";
                    },
                },
                {
                    targets: 6,
                    render: function (t, e, s, n) {
                        return "<span>" + s.price + "</span>";
                    },
                },
                {
                    targets: 7,
                    responsivePriority: 4,
                    render: function (t, e, s, n) {
                        return "<span>" + s.qty + "</span>";
                    },
                },
                {
                    targets: -2,
                    render: function (t, e, s, n) {
                        s = s.status;
                        return (
                            '<span class="badge rounded-pill ' +
                            a[s].class +
                            '" text-capitalized>' +
                            a[s].title +
                            "</span>"
                        );
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
                        window.location.href = "Agregar_Producto";
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
            initComplete: function () {
                this.api()
                    .columns(-2)
                    .every(function () {
                        var e = this,
                            s = $(
                                '<select id="ProductStatus" class="form-select text-capitalize"><option value="">Status</option></select>'
                            )
                                .appendTo(".product_status")
                                .on("change", function () {
                                    var t = $.fn.dataTable.util.escapeRegex(
                                        $(this).val()
                                    );
                                    e.search(
                                        t ? "^" + t + "$" : "",
                                        !0,
                                        !1
                                    ).draw();
                                });
                        e.data()
                            .unique()
                            .sort()
                            .each(function (t, e) {
                                s.append(
                                    '<option value="' +
                                        a[t].title +
                                        '">' +
                                        a[t].title +
                                        "</option>"
                                );
                            });
                    }),
                    this.api()
                        .columns(3)
                        .every(function () {
                            var e = this,
                                s = $(
                                    '<select id="ProductCategory" class="form-select text-capitalize"><option value="">Category</option></select>'
                                )
                                    .appendTo(".product_category")
                                    .on("change", function () {
                                        var t = $.fn.dataTable.util.escapeRegex(
                                            $(this).val()
                                        );
                                        e.search(
                                            t ? "^" + t + "$" : "",
                                            !0,
                                            !1
                                        ).draw();
                                    });
                            e.data()
                                .unique()
                                .sort()
                                .each(function (t, e) {
                                    s.append(
                                        '<option value="' +
                                            i[t].title +
                                            '">' +
                                            i[t].title +
                                            "</option>"
                                    );
                                });
                        }),
                    this.api()
                        .columns(4)
                        .every(function () {
                            var e = this,
                                s = $(
                                    '<select id="ProductStock" class="form-select text-capitalize"><option value=""> Stock </option></select>'
                                )
                                    .appendTo(".product_stock")
                                    .on("change", function () {
                                        var t = $.fn.dataTable.util.escapeRegex(
                                            $(this).val()
                                        );
                                        e.search(
                                            t ? "^" + t + "$" : "",
                                            !0,
                                            !1
                                        ).draw();
                                    });
                            e.data()
                                .unique()
                                .sort()
                                .each(function (t, e) {
                                    s.append(
                                        '<option value="' +
                                            o[t].title +
                                            '">' +
                                            c[t].title +
                                            "</option>"
                                    );
                                });
                        });
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
});
