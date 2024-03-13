"use strict";
!(function () {
    var e = document.querySelector(".short-editor"),
        e =
            (e &&
                new Quill(e, {
                    modules: { toolbar: ".comment-toolbar" },
                    placeholder: "Product Description",
                    table: true,
                    theme: "snow",
                }),
            document.querySelector("#dropzone-basic")),
        r = document.querySelector(".product-date");
    r && r.flatpickr({ monthSelectorType: "static", defaultDate: e });
    var n = document.querySelector(".general-editor"),
        n =
            n &&
            new Quill(n, {
                modules: { toolbar: ".comment-toolbar2" },
                placeholder: "Product Description",
                table: true,
                theme: "snow",
            });
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
    let f = document.getElementById("uploadedAvatar2");
    const s = document.querySelector(".account-file-input2"),
        d = document.querySelector(".account-image-reset2");
    if (f) {
        const r = f.src;
        (s.onchange = () => {
            s.files[0] && (f.src = window.URL.createObjectURL(s.files[0]));
        }),
            (d.onclick = () => {
                (s.value = ""), (f.src = r);
            });
    }
})(),
    $(function () {
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
        e.length &&
            ((s = 2),
            (o = 1),
            e.on("submit", function (e) {
                e.preventDefault();
            }),
            e.repeater({
                show: function () {
                    var t = $(this).find(".form-control, .form-select"),
                        a = $(this).find(".form-label"),
                        e =
                            (t.each(function (e) {
                                var r = "form-repeater-" + s + "-" + o;
                                $(t[e]).attr("id", r),
                                    $(a[e]).attr("for", r),
                                    o++;
                            }),
                            s++,
                            $(this).slideDown(),
                            $(".select2-container").remove(),
                            $(".select2.form-select").select2({
                                placeholder: "Placeholder text",
                            }),
                            $(".select2-container").css("width", "100%"),
                            $(this));
                    select2Focus(e),
                        $(".form-repeater:first .form-select").select2({
                            dropdownParent: $(this).parent(),
                            placeholder: "Placeholder text",
                        }),
                        $(".position-relative .select2").each(function () {
                            $(this).select2({
                                dropdownParent:
                                    $(this).closest(".position-relative"),
                            });
                        });
                },
            }));
        $("#category-org").change(function () {
            $.blockUI({
                message:
                    '<div class="d-flex justify-content-center"><p class="mb-0">Please wait...</p> <div class="sk-wave m-0"><div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div></div> </div>',
                css: {
                    backgroundColor: "transparent",
                    color: "#fff",
                    border: "0",
                },
                overlayCSS: { opacity: 0.5 },
            });
            var categoryId = $(this).val();
            if (categoryId) {
                $.ajax({
                    url: "post-subcategory",
                    data: { categoryId: categoryId, _token: csrfToken },
                    type: "POST",
                    dataType: "json",
                }).done((data) => {
                    $("#subcategory-org").empty();
                    $("#subcategory-org").append(
                        '<option value="">Seleccionar Subcategoria</option>'
                    );
                    $.each(data, function (key, value) {
                        $("#subcategory-org").append(
                            '<option value="' +
                                value.id_subcategory +
                                '">' +
                                value.name_subcategory +
                                "</option>"
                        );
                    });
                    $.blockUI();
                });
            } else {
                $("#subcategory-org").empty();
                $("#subcategory-org").append(
                    '<option value="">Seleccionar Subcategoria</option>'
                );
            }
        });
        $("#offer").change(function () {
            let selectedPercentage = $(this)
                .find("option:selected")
                .data("percentage");
            if (selectedPercentage !== undefined) {
                // Actualizar el contenido del elemento con ID "percentage" con el valor del porcentaje
                $("#percentage").html(
                    '<div class="input-group input-group-merge">' +
                        '<div class="form-floating form-floating-outline">' +
                        '<input type="text" value="' +
                        selectedPercentage +
                        '" class="form-control" disabled placeholder="' +
                        selectedPercentage +
                        '"' +
                        'aria-label="Amount (to the nearest dollar)">' +
                        "<label>Porcentaje</label>" +
                        "</div>" +
                        '<span class="input-group-text">%</span>' +
                        "</div>"
                );
            } else {
                // Manejar el caso donde no se encuentra ningún data-percentage
                console.log(
                    "No se encontró data-percentage para la opción seleccionada"
                );
            }
        });
    });
