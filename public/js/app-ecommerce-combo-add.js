"use strict";
let fp, offCanvasEl;
document.addEventListener("DOMContentLoaded", function (e) {
    var t;
    (t = document.getElementById("form-add-new-record")),
        setTimeout(() => {
            const e = document.querySelector(".create-new"),
                t = document.querySelector("#add-new-record");
            e &&
                e.addEventListener("click", function () {
                    (offCanvasEl = new bootstrap.Offcanvas(t)),
                        (t.querySelector(".dt-full-name").value = ""),
                        (t.querySelector(".dt-post").value = ""),
                        (t.querySelector(".dt-salary").value = ""),
                        offCanvasEl.show();
                });
        }, 200),
        (fp = FormValidation.formValidation(t, {
            fields: {
                quantity: {
                    validators: {
                        notEmpty: {
                            message: "Por favor ingresa la cantidad",
                        },
                    },
                },
                priceProduct: {
                    validators: {
                        notEmpty: {
                            message: "Por favor precio del producto",
                        },
                    },
                },
                product_c: {
                    validators: {
                        callback: {
                            message: "Por favor selecciona un Producto",
                            callback: function (input) {
                                return input.value != 0;
                            },
                        },
                    },
                },
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                bootstrap5: new FormValidation.plugins.Bootstrap5({
                    eleValidClass: "",
                    rowSelector: ".col-sm-12",
                }),
                submitButton: new FormValidation.plugins.SubmitButton(),
                autoFocus: new FormValidation.plugins.AutoFocus(),
            },
            init: (e) => {
                e.on("plugins.message.placed", function (e) {
                    e.element.parentElement.classList.contains("input-group") &&
                        e.element.parentElement.insertAdjacentElement(
                            "afterend",
                            e.messageElement
                        );
                });
            },
        }));
    let h = document.getElementById("uploadedAvatar");
    const l = document.querySelector(".account-file-input"),
        c = document.querySelector(".account-image-reset");
    if (h) {
        const j = h.src;
        (l.onchange = () => {
            l.files[0] && (h.src = window.URL.createObjectURL(l.files[0]));
        }),
            (c.onclick = () => {
                (l.value = ""), (h.src = j);
            });
    }
}),
    !(function () {
        var i = document.querySelector(".short-editor"),
            n = document.querySelector(".general-editor"),
            o = document.querySelector(".numeral-mask"),
            e = document.querySelector("#autosize-demo"),
            t = document.querySelector("#ecommerce-product-tags"),
            p = $("#init-date, #finsh-date");

        o &&
            new Cleave(o, {
                numeral: !0,
                numeralThousandsGroupStyle: "thousand",
            }),
            e && autosize(e),
            (i =
                i &&
                new Quill(i, {
                    modules: { toolbar: ".comment-toolbar" },
                    placeholder: "Descrpción Lateral",
                    table: true,
                    theme: "snow",
                })),
            (n =
                n &&
                new Quill(n, {
                    modules: { toolbar: ".comment-toolbar2" },
                    placeholder: "Descripción General",
                    table: true,
                    theme: "snow",
                })),
            p.length &&
                p.datepicker({
                    format: "yyyy-dd-mm",
                    todayHighlight: !0,
                    autoclose: !0,
                    orientation: isRtl ? "auto right" : "auto left",
                }),
            (t = (new Tagify(t), new Date()));
    })(),
    $(function () {
        var l,
            t,
            e = $(".datatables-basic"),
            a = $(".dt-complex-header"),
            s = $(".dt-row-grouping"),
            n = $(".dt-multilingual"),
            d =
                (e.length &&
                    ((l = e.DataTable({
                        columns: [
                            { data: "" },
                            { data: "id" },
                            { data: "full_name" },
                            { data: "quantity" },
                            { data: "price" },
                            { data: "" },
                        ],
                        columnDefs: [
                            {
                                className: "control",
                                orderable: !1,
                                searchable: !1,
                                responsivePriority: 2,
                                targets: 0,
                                render: function (e, t, a, s) {
                                    return "";
                                },
                            },

                            { targets: 1, searchable: !1, visible: !1 },
                            {
                                targets: 2,
                                responsivePriority: 4,
                                render: function (e, t, a, s) {
                                    return e;
                                },
                            },
                            {
                                targets: -1,
                                title: "Acciones",
                                orderable: !1,
                                searchable: !1,
                                render: function (e, t, a, s) {
                                    return '<a href="javascript:;" class="btn btn-sm btn-text-secondary rounded-pill btn-icon item-edit &nbsp; "><i class="mdi mdi-pencil-outline"></i></a> &nbsp;  <a href="javascript:;" class="btn btn-sm btn-text-danger rounded-pill btn-icon delete-record"><i class="mdi mdi-trash-can-outline"></i></a> ';
                                },
                            },
                        ],
                        order: [[2, "desc"]],
                        dom: '<"card-header flex-column flex-md-row"<"head-label text-center"><"dt-action-buttons text-end pt-3 pt-md-0"B>><"row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end"f>>t<"row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
                        displayLength: 7,
                        lengthMenu: [7, 10, 25, 50, 75, 100],
                        buttons: [
                            {
                                text: '<i class="mdi mdi-plus me-sm-1"></i> <span class="d-none d-sm-inline-block">Agregar Producto</span>',
                                className:
                                    "create-new btn btn-primary waves-effect waves-light",
                            },
                        ],
                        responsive: {
                            details: {
                                display:
                                    $.fn.dataTable.Responsive.display.modal({
                                        header: function (e) {
                                            return (
                                                "Details of " +
                                                e.data().full_name
                                            );
                                        },
                                    }),
                                type: "column",
                                renderer: function (e, t, a) {
                                    a = $.map(a, function (e, t) {
                                        return "" !== e.title
                                            ? '<tr data-dt-row="' +
                                                  e.rowIndex +
                                                  '" data-dt-column="' +
                                                  e.columnIndex +
                                                  '"><td>' +
                                                  e.title +
                                                  ":</td> <td>" +
                                                  e.data +
                                                  "</td></tr>"
                                            : "";
                                    }).join("");
                                    return (
                                        !!a &&
                                        $(
                                            '<table class="table"/><tbody />'
                                        ).append(a)
                                    );
                                },
                            },
                        },
                    })),
                    $("div.head-label").html(
                        '<h5 class="card-title mb-0">Productos en el Combo</h5>'
                    )),
                101);
        fp.on("core.form.valid", function () {
            var e = $(".add-new-record .dt-full-name").val(),
                s = $(".add-new-record .dt-full-name option:selected").text(),
                t = $(".add-new-record .dt-post").val(),
                n = $(".add-new-record .dt-salary").val();
            "" != e &&
                (l.row
                    .add({
                        id: e,
                        full_name: s,
                        quantity: t,
                        price: "S/. " + n,
                    })
                    .draw(),
                d++,
                offCanvasEl.hide());
        }),
            $(".datatables-basic tbody").on(
                "click",
                ".delete-record",
                function () {
                    l.row($(this).parents("tr")).remove().draw();
                }
            );

        const csrfToken = $('meta[name="csrf-token"]').attr("content");
        var s,
            o,
            e = $(".select2"),
            e =
                (e.length &&
                    e.each(function () {
                        var e = $(this);
                        select2Focus(e),
                            e
                                .wrap('<div class="position-relative"></div>')
                                .select2({
                                    dropdownParent: e.parent(),
                                    placeholder: e.data("placeholder"),
                                });
                    }),
                $(".form-repeater"));

        $("#category-org").change(function () {
            $.blockUI({
                message:
                    '<div class="sk-wave mx-auto"><div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div></div>',
                css: { backgroundColor: "transparent", border: "0" },
                overlayCSS: { opacity: 0.5 },
            });
            var categoryId = $(this).val();
            if (categoryId) {
                $.ajax({
                    url: "getProducts",
                    data: { categoryId: categoryId, _token: csrfToken },
                    type: "POST",
                    dataType: "json",
                }).done((data) => {
                    console.log(data);
                    $("#product-org").empty();
                    $("#product-org").append(
                        '<option value="0" disabled>Seleccionar Producto</option>'
                    );
                    $.each(data, function (key, value) {
                        $("#product-org").append(
                            '<option value="' +
                                value.id_product +
                                '">' +
                                value.product_title +
                                "</option>"
                        );
                    });
                });
                $.unblockUI();
            } else {
                $("#product-org").empty();
                $("#product-org").append(
                    '<option value="">Seleccionar Producto</option>'
                );
            }
        });

        const f = document.getElementById("ecommercePriceAdd");
        // Obtener los botones
        let botones = document.querySelectorAll('button[name="accion"]'),
            accion;
        botones.forEach(function (boton) {
            boton.addEventListener("click", function (event) {
                event.preventDefault();
                accion = event.target.value;
            });
        });
        const fv = FormValidation.formValidation(f, {
            fields: {
                productTitle: {
                    validators: {
                        notEmpty: {
                            message: "Por favor ingrese el título del producto",
                        },
                    },
                },
                price: {
                    validators: {
                        notEmpty: { message: "Por favor ingrese precio" },
                    },
                },
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                bootstrap5: new FormValidation.plugins.Bootstrap5({
                    eleValidClass: "is-valid",
                    rowSelector: function (t, e) {
                        return ".mb-4";
                    },
                }),
                submitButton: new FormValidation.plugins.SubmitButton(),
                autoFocus: new FormValidation.plugins.AutoFocus(),
            },
        });

        fv.on("core.form.valid", function () {
            $.blockUI({
                message:
                    '<div class="sk-wave mx-auto"><div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div></div>',
                css: { backgroundColor: "transparent", border: "0" },
                overlayCSS: { opacity: 0.5 },
            });

            const formData = new FormData(f),
                shortDescription = $("#short-editor .ql-editor").html(),
                generalDescription = $("#general-editor .ql-editor").html(),
                switchInput = document.querySelector(".switch-input");

                var tableData = l.rows().data().toArray();

                var mappedData = tableData.map(function(row) {
                    return {
                        'id_product': row.id,
                        'quantity': row.quantity,
                        'price': parseFloat(row.price.replace('S/. ', ''))
                    };
                });

            const tags = document.getElementById(
                "ecommerce-product-tags"
            ).value;

            if (tags != "") {
                const dataTags = JSON.parse(tags);
                const seoTags = dataTags.map((obj) => obj.value).join(",");
                formData.append("seoTags", seoTags);
            }
            formData.append("isMultiPrice", switchInput.checked ? 1 : 0);

            formData.append("short", shortDescription);
            formData.append("general", generalDescription);
            formData.append("accion", accion);
            formData.append("tableData", JSON.stringify(mappedData));
            formData.append(
                "_token",
                $('meta[name="csrf-token"]').attr("content")
            );
            console.log(JSON.stringify(mappedData));
            fetch("saveCombo", {
                method: "POST",
                body: formData,
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Error en la solicitud");
                    }
                    return response.json();
                })
                .then((data) => {
                    clearForm();
                    Toast.fire({
                        icon: "success",
                        title: data.message,
                    });
                    setTimeout(function () {
                        window.location.href = "Combos";
                    }, 3000);
                    $.unblockUI();
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        });

        function clearForm() {
            f.reset();
            fv.resetForm();
        }
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            },
        });
    });
