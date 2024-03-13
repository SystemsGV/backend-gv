"use strict";
!(function () {
    var endDatePicker;
    var a = $("#bs-datepicker-daterange").datepicker({
        todayHighlight: !0,
        orientation: isRtl ? "auto right" : "auto left",
        format: "yyyy-mm-dd",
    });

    a.on("changeDate", function (e) {
        let selectedDate = e.date,
            startDatePicker = new Date(
                document.getElementById("dateRangePicker").value
            ),
            endDatePicker = new Date(
                document.getElementById("dateRangePickerEnd").value
            );

        if (startDatePicker && endDatePicker) {
            let differenceInMs = endDatePicker - startDatePicker;

            let differenceInDays = differenceInMs / (1000 * 60 * 60 * 24);
            let choiceDaysInput = document.getElementById("choice_days");

            if (differenceInDays < 15) {
                document
                    .getElementById("collapse_days")
                    .classList.remove("show");

                choiceDaysInput.disabled = true;
                choiceDaysInput.checked = false;
            } else {
                choiceDaysInput.disabled = false;
            }
            console.log("La diferencia en días es: " + differenceInDays);
        } else {
            console.log("Por favor selecciona ambas fechas.");
        }

        let limitDate = new Date(selectedDate);
        limitDate.setDate(selectedDate.getDate());

        let flatpickrInstance =
            document.querySelector("#flatpickr-multi")._flatpickr;
        flatpickrInstance.set("maxDate", limitDate);
    });

    var i = document.querySelector("#flatpickr-multi"),
        o = document.querySelector(".numeral-mask"),
        e = document.querySelector("#autosize-demo");
    i &&
        i.flatpickr({
            mode: "multiple",
            minDate: "today",
            dateFormat: "Y/m/d",
            locale: {
                firstDayOfWeek: 1,
                weekdays: {
                    shorthand: [
                        "Dom",
                        "Lun",
                        "Mar",
                        "Mie",
                        "Jue",
                        "Vie",
                        "Sab",
                    ],
                    longhand: [
                        "Domingo",
                        "Lunes",
                        "Martes",
                        "Miércoles",
                        "Jueves",
                        "Viernes",
                        "Sábado",
                    ],
                },
                months: {
                    shorthand: [
                        "Ene",
                        "Feb",
                        "Mar",
                        "Abr",
                        "May",
                        "Jun",
                        "Jul",
                        "Ago",
                        "Sep",
                        "Оct",
                        "Nov",
                        "Dic",
                    ],
                    longhand: [
                        "Enero",
                        "Febreo",
                        "Мarzo",
                        "Abril",
                        "Mayo",
                        "Junio",
                        "Julio",
                        "Agosto",
                        "Septiembre",
                        "Octubre",
                        "Noviembre",
                        "Diciembre",
                    ],
                },
            },
        }),
        o &&
            new Cleave(o, {
                numeral: !0,
                numeralThousandsGroupStyle: "thousand",
            }),
        e && autosize(e),
        document
            .getElementById("choice_dates")
            .addEventListener("change", function () {
                const dates_collapse =
                    document.getElementById("collapse_dates");
                document
                    .getElementById("collapse_days")
                    .classList.remove("show");

                if (this.checked) {
                    dates_collapse.classList.add("show");
                } else {
                    dates_collapse.classList.remove("show");
                }
            }),
        document
            .getElementById("choice_days")
            .addEventListener("change", function () {
                const days_collapse = document.getElementById("collapse_days");
                document
                    .getElementById("collapse_dates")
                    .classList.remove("show");

                if (this.checked) {
                    days_collapse.classList.add("show");
                } else {
                    days_collapse.classList.remove("show");
                }
            });
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
            const select = document.getElementById(
                "selectpickerSelectDeselect"
            );
            const formData = new FormData(f);
            var selected_days = [];
            for (var i = 0; i < select.options.length; i++) {
                if (select.options[i].selected) {
                    selected_days.push(select.options[i].value);
                }
            }
            var selected_days_string = selected_days.join(",");

            console.log(selected_days_string);

            formData.append("_token", csrfToken);
            formData.append("selected_days", selected_days_string);

            fetch("savePrice", {
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
                    $.unblockUI();
                    Toast.fire({
                        icon: "success",
                        title: data.message,
                    });
                    setTimeout(function () {
                        window.location.href = "Precios";
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
