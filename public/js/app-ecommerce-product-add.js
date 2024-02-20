"use strict";
!(function () {
    var e = document.querySelector(".short-editor"),
        t = document.querySelector("#autosize-demo"),
        e =
            (e &&
                new Quill(e, {
                    modules: { toolbar: ".comment-toolbar" },
                    placeholder: "Descrpción Lateral",
                    table: true,
                    theme: "snow",
                }),
            document.querySelector("#ecommerce-product-tags")),
        e = (new Tagify(e), new Date()),
        r = document.querySelector(".product-date");
    r && r.flatpickr({ monthSelectorType: "static", defaultDate: e });
    var n = document.querySelector(".general-editor"),
        n =
            n &&
            new Quill(n, {
                modules: { toolbar: ".comment-toolbar2" },
                placeholder: "Descripción General",
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

    autosize(t);
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
                        '<option value="0" disabled>Seleccionar Subcategoria</option>'
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
                });
            } else {
                $("#subcategory-org").empty();
                $("#subcategory-org").append(
                    '<option value="">Seleccionar Subcategoria</option>'
                );
            }
        });
        $("#ecommerce-product-price").on("input", function () {
            var price = $(this).val();
            if (price.trim() !== "") {
                $("#offer").removeAttr("disabled");
            } else {
                $("#offer").attr("disabled", "disabled");
            }
        });

        $("#offer").change(function () {
            let selectedPercentage = $(this)
                .find("option:selected")
                .data("percentage");
            if (selectedPercentage !== undefined) {
                let amount = parseFloat($("#ecommerce-product-price").val()); // Obtener el monto y convertirlo a número
                let percentage = parseFloat(selectedPercentage); // Usar selectedPercentage obtenido del atributo data-percentage
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
                if (!isNaN(amount)) {
                    var percentageAmount = (amount * percentage) / 100;
                    var discountAmount = amount - percentageAmount;
                    $("#amount_dsc").html(
                        '<div class="input-group input-group-merge">' +
                            '<div class="form-floating form-floating-outline">' +
                            '<input type="text" value="' +
                            discountAmount +
                            '" class="form-control" disabled placeholder="' +
                            discountAmount +
                            '"' +
                            'aria-label="Amount (to the nearest dollar)">' +
                            "<label>Descuento</label>" +
                            "</div>" +
                            '<span class="input-group-text">S/.</span>' +
                            "</div>"
                    );
                    $("#amount_residual").html(
                        '<div class="input-group input-group-merge">' +
                            '<div class="form-floating form-floating-outline">' +
                            '<input type="text" value="' +
                            percentageAmount +
                            '" class="form-control" disabled placeholder="' +
                            percentageAmount +
                            '"' +
                            'aria-label="Amount (to the nearest dollar)">' +
                            "<label>Residual</label>" +
                            "</div>" +
                            '<span class="input-group-text">S/.</span>' +
                            "</div>"
                    );
                }
            }
        });

        const f = document.getElementById("ecommerceProductAdd");
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
                categoryOrg: {
                    validators: {
                        notEmpty: {
                            message: "Por favor seleccione la categoria",
                        },
                    },
                },
                subcategoryOrg: {
                    validators: {
                        notEmpty: {
                            message: "Por favor seleccione la subcategoria",
                        },
                    },
                },
                productPrice: {
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
                generalDescription = $("#general-editor .ql-editor").html();

            const tags = document.getElementById(
                "ecommerce-product-tags"
            ).value;

            if (tags != "") {
                const dataTags = JSON.parse(tags);
                const seoTags = dataTags.map((obj) => obj.value).join(",");
                formData.append("seoTags", seoTags);
            }

            formData.append("short", shortDescription);
            formData.append("general", generalDescription);
            formData.append("accion", accion);
            formData.append(
                "_token",
                $('meta[name="csrf-token"]').attr("content")
            );
            fetch("saveProduct", {
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
                    f.reset();
                    $.unblockUI();
                    Toast.fire({
                        icon: "success",
                        title: data.message,
                    });
                    setTimeout(function () {
                        window.location.href = "Productos";
                    }, 3000);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        });

        function clearForm() {
            $(".select2").val(0).trigger("change");
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
