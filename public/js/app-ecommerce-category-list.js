"use strict";
const commentEditor = document.querySelector(".comment-editor");
commentEditor &&
    new Quill(commentEditor, {
        modules: { toolbar: ".comment-toolbar" },
        placeholder: "Ingrese la descripción de la categoría...",
        theme: "snow",
    }),
    $(function () {
        let e, n, s;
        s = (
            isDarkStyle
                ? ((e = config.colors_dark.borderColor),
                  (n = config.colors_dark.bodyBg),
                  config.colors_dark)
                : ((e = config.colors.borderColor),
                  (n = config.colors.bodyBg),
                  config.colors)
        ).headingColor;
        let t = $(".datatables-category-list"),
            o = $(".select2");
        o.length &&
            o.each(function () {
                var t = $(this);
                select2Focus(t),
                    t.wrap('<div class="position-relative"></div>').select2({
                        dropdownParent: t.parent(),
                        placeholder: t.data("placeholder"),
                    });
            }),
            t.length &&
                (t.DataTable({
                    ajax: "getCategories",
                    columns: [
                        { data: "" },
                        { data: "id" },
                        { data: "name" },
                        { data: "status" },
                        { data: "" },
                    ],
                    columnDefs: [
                        {
                            className: "control",
                            searchable: !1,
                            orderable: !1,
                            responsivePriority: 1,
                            targets: 0,
                            render: function (t, e, n, s) {
                                return "";
                            },
                        },
                        {
                            targets: 2,
                            responsivePriority: 2,
                            render: function (t, e, n, s) {
                                var o = n.name,
                                    a = n.description,
                                    r = n.image,
                                    i = n.id;
                                return (
                                    '<div class="d-flex align-items-center">' +
                                    '<div class="avatar-wrapper me-3 rounded-2 bg-label-secondary user-name">' +
                                    '<div class="avatar">' +
                                    (r
                                        ? '<img src="/storage/category/' +
                                          r +
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
                                          (o ? o.charAt(0).toUpperCase() : "") + // Obtén la primera letra de la descripción y conviértela en mayúscula si existe
                                          "</span>") +
                                    '</div></div><div class="d-flex flex-column justify-content-center">' +
                                    '<span class="text-heading fw-medium text-wrap">' +
                                    (o || "") +
                                    "</span>" +
                                    '<small class="text-truncate mb-0 d-none d-sm-block">' +
                                    (a || "") +
                                    "</small>" +
                                    "</div></div>"
                                );
                            },
                        },
                        {
                            targets: 3,
                            responsivePriority: 3,
                            render: function (t, e, n, s) {
                                return (
                                    '<div class="text-sm-end">' +
                                    n.status +
                                    "</div>"
                                );
                            },
                        },
                        {
                            targets: -1,
                            title: "Actions",
                            searchable: !1,
                            orderable: !1,
                            render: function (t, e, n, s) {
                                return '<div class="d-flex align-items-sm-center justify-content-sm-center"><button class="btn btn-sm btn-icon btn-edit"><i class="mdi mdi-pencil-outline"></i></button><button class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="mdi mdi-dots-vertical me-2"></i></button><div class="dropdown-menu dropdown-menu-end m-0"><a href="javascript:0;" class="dropdown-item">View</a><a href="javascript:0;" class="dropdown-item">Suspend</a></div></div>';
                            },
                        },
                    ],
                    order: [0, "desc"],
                    dom: '<"card-header d-flex rounded-0 flex-wrap py-md-0"<"me-5 ms-n2"f><"d-flex justify-content-start justify-content-md-end align-items-baseline"<"dt-action-buttons d-flex align-items-start align-items-md-center justify-content-sm-center mb-3 mb-sm-0 gap-3"lB>>>t<"row mx-1"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
                    lengthMenu: [7, 10, 20, 50, 70, 100],
                    language: {
                        sLengthMenu: "_MENU_",
                        search: "",
                        searchPlaceholder: "Buscar Categoria",
                    },
                    buttons: [
                        {
                            extend: "collection",
                            className:
                                "btn btn-label-secondary dropdown-toggle me-3 waves-effect waves-light",
                            text: '<i class="mdi mdi-export-variant me-1"></i> <span class="d-none d-sm-inline-block">Export</span>',
                            buttons: [
                                {
                                    extend: "print",
                                    text: '<i class="mdi mdi-printer-outline me-1" ></i>Print',
                                    className: "dropdown-item",
                                    exportOptions: {
                                        columns: [1, 2, 3, 4, 5],
                                        format: {
                                            body: function (t, e, n) {
                                                var s;
                                                return t.length <= 0
                                                    ? t
                                                    : ((t = $.parseHTML(t)),
                                                      (s = ""),
                                                      $.each(
                                                          t,
                                                          function (t, e) {
                                                              void 0 !==
                                                                  e.classList &&
                                                              e.classList.contains(
                                                                  "user-name"
                                                              )
                                                                  ? (s +=
                                                                        e
                                                                            .lastChild
                                                                            .firstChild
                                                                            .textContent)
                                                                  : void 0 ===
                                                                    e.innerText
                                                                  ? (s +=
                                                                        e.textContent)
                                                                  : (s +=
                                                                        e.innerText);
                                                          }
                                                      ),
                                                      s);
                                            },
                                        },
                                    },
                                    customize: function (t) {
                                        $(t.document.body)
                                            .css("color", s)
                                            .css("border-color", e)
                                            .css("background-color", n),
                                            $(t.document.body)
                                                .find("table")
                                                .addClass("compact")
                                                .css("color", "inherit")
                                                .css("border-color", "inherit")
                                                .css(
                                                    "background-color",
                                                    "inherit"
                                                );
                                    },
                                },
                                {
                                    extend: "csv",
                                    text: '<i class="mdi mdi-file-document-outline me-1" ></i>Csv',
                                    className: "dropdown-item",
                                    exportOptions: {
                                        columns: [1, 2, 3, 4, 5],
                                        format: {
                                            body: function (t, e, n) {
                                                var s;
                                                return t.length <= 0
                                                    ? t
                                                    : ((t = $.parseHTML(t)),
                                                      (s = ""),
                                                      $.each(
                                                          t,
                                                          function (t, e) {
                                                              void 0 !==
                                                                  e.classList &&
                                                              e.classList.contains(
                                                                  "user-name"
                                                              )
                                                                  ? (s +=
                                                                        e
                                                                            .lastChild
                                                                            .firstChild
                                                                            .textContent)
                                                                  : void 0 ===
                                                                    e.innerText
                                                                  ? (s +=
                                                                        e.textContent)
                                                                  : (s +=
                                                                        e.innerText);
                                                          }
                                                      ),
                                                      s);
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
                                            body: function (t, e, n) {
                                                var s;
                                                return t.length <= 0
                                                    ? t
                                                    : ((t = $.parseHTML(t)),
                                                      (s = ""),
                                                      $.each(
                                                          t,
                                                          function (t, e) {
                                                              void 0 !==
                                                                  e.classList &&
                                                              e.classList.contains(
                                                                  "user-name"
                                                              )
                                                                  ? (s +=
                                                                        e
                                                                            .lastChild
                                                                            .firstChild
                                                                            .textContent)
                                                                  : void 0 ===
                                                                    e.innerText
                                                                  ? (s +=
                                                                        e.textContent)
                                                                  : (s +=
                                                                        e.innerText);
                                                          }
                                                      ),
                                                      s);
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
                                            body: function (t, e, n) {
                                                var s;
                                                return t.length <= 0
                                                    ? t
                                                    : ((t = $.parseHTML(t)),
                                                      (s = ""),
                                                      $.each(
                                                          t,
                                                          function (t, e) {
                                                              void 0 !==
                                                                  e.classList &&
                                                              e.classList.contains(
                                                                  "user-name"
                                                              )
                                                                  ? (s +=
                                                                        e
                                                                            .lastChild
                                                                            .firstChild
                                                                            .textContent)
                                                                  : void 0 ===
                                                                    e.innerText
                                                                  ? (s +=
                                                                        e.textContent)
                                                                  : (s +=
                                                                        e.innerText);
                                                          }
                                                      ),
                                                      s);
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
                                            body: function (t, e, n) {
                                                var s;
                                                return t.length <= 0
                                                    ? t
                                                    : ((t = $.parseHTML(t)),
                                                      (s = ""),
                                                      $.each(
                                                          t,
                                                          function (t, e) {
                                                              void 0 !==
                                                                  e.classList &&
                                                              e.classList.contains(
                                                                  "user-name"
                                                              )
                                                                  ? (s +=
                                                                        e
                                                                            .lastChild
                                                                            .firstChild
                                                                            .textContent)
                                                                  : void 0 ===
                                                                    e.innerText
                                                                  ? (s +=
                                                                        e.textContent)
                                                                  : (s +=
                                                                        e.innerText);
                                                          }
                                                      ),
                                                      s);
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
                            attr: {
                                "data-bs-toggle": "offcanvas",
                                "data-bs-target":
                                    "#offcanvasEcommerceCategoryList",
                            },
                        },
                    ],
                    responsive: {
                        details: {
                            display: $.fn.dataTable.Responsive.display.modal({
                                header: function (t) {
                                    return "Details of " + t.data().categories;
                                },
                            }),
                            type: "column",
                            renderer: function (t, e, n) {
                                n = $.map(n, function (t, e) {
                                    return "" !== t.title
                                        ? '<tr data-dt-row="' +
                                              t.rowIndex +
                                              '" data-dt-column="' +
                                              t.columnIndex +
                                              '"><td> ' +
                                              t.title +
                                              ':</td> <td class="ps-0">' +
                                              t.data +
                                              "</td></tr>"
                                        : "";
                                }).join("");
                                return (
                                    !!n &&
                                    $('<table class="table"/><tbody />').append(
                                        n
                                    )
                                );
                            },
                        },
                    },
                }),
                $(".dataTables_length").addClass("mt-0 mt-md-3"),
                $(".dt-action-buttons").addClass("pt-0")),
            setTimeout(() => {
                $(".dataTables_filter .form-control").removeClass(
                    "form-control-sm"
                ),
                    $(".dataTables_length .form-select").removeClass(
                        "form-select-sm"
                    );
            }, 300);
       t.on("click", ".btn-edit", function () {
            // Obtén la fila que contiene el botón de edición
            var row = $(this).closest("tr");

            // Obtén los datos de la fila actual
            var rowData = $(this).closest("table").DataTable().row(row).data();
            console.log(rowData);
            $('#offcanvasEcommerceCategoryList').offcanvas('show');

        });
    }),
    (function () {
        const t = document.getElementById("eCommerceCategoryListForm");
        const fv = FormValidation.formValidation(t, {
            fields: {
                categoryTitle: {
                    validators: {
                        notEmpty: { message: "Please enter category title" },
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

        // Agrega un evento de escucha para cuando se complete con éxito la validación
        fv.on("core.form.valid", function () {
            console.log("La validación se ha completado con éxito.");
            // Puedes agregar aquí cualquier acción que desees realizar después de que la validación sea exitosa
            sendDataServe();
        });

        function sendDataServe() {
            const submitBtn = document.querySelector(".data-submit");

            // Cambiar el estilo del botón y obtener la función de restablecimiento
            const resetBtn = setLoadingState(submitBtn);

            const formData = new FormData(t);
            const descriptionContent = $(
                "#categoryDescription .ql-editor"
            ).html();
            formData.append("description", descriptionContent);
            formData.append(
                "_token",
                $('meta[name="csrf-token"]').attr("content")
            );

            fetch("insertCategory", {
                method: "POST",
                body: formData,
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(
                            "Hubo un problema al procesar el formulario."
                        );
                    }
                    return response.json();
                })
                .then((data) => {
                    console.log("Datos enviados correctamente:", data);
                    t.reset();
                    document
                        .getElementById("ecommerce-category-title")
                        .classList.remove("is-valid");

                    clearEditorContent();
                })
                .catch((error) => {
                    console.error("Error:", error.message);
                })
                .finally(() => {
                    // Restaurar el contenido original del botón después de completar la solicitud
                    resetBtn();
                });
        }

        // Función para cambiar el estilo del botón durante la carga y deshabilitarlo
        function setLoadingState(btnElement) {
            // Guardar el estado original del botón
            const originalContent = btnElement.innerHTML;
            const originalDisabled = btnElement.disabled;

            // Cambiar el contenido del botón a un spinner y "Loading..."
            btnElement.innerHTML =
                '<span class="spinner-border me-1" role="status" aria-hidden="true"></span>Loading...';
            btnElement.disabled = true;

            // Devolver la función para restaurar el contenido original del botón y habilitarlo nuevamente
            return function resetBtn() {
                btnElement.innerHTML = originalContent;
                btnElement.disabled = originalDisabled;
            };
        }

        function clearEditorContent() {
            const commentEditor = document.querySelector(".comment-editor");
            if (commentEditor) {
                const quill = new Quill(commentEditor, {
                    modules: { toolbar: ".comment-toolbar" },
                    placeholder: "Ingrese la descripción de la categoría...",
                    theme: "snow",
                });
                quill.setText("");
            }
        }
    })();
