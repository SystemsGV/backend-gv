"use strict";
!(function () {
    var endDatePicker,
        a = $("#product-org");

    a.on("change", function () {
        var selectedOption = $(this).find("option:selected");
        var startDatePicker = new Date(selectedOption.data("mindate"));
        var endDatePicker = new Date(selectedOption.data("maxdate"));

        console.log(endDatePicker);

        if (
            startDatePicker &&
            endDatePicker &&
            !isNaN(startDatePicker.getTime()) &&
            !isNaN(endDatePicker.getTime())
        ) {
            let differenceInMs = endDatePicker - startDatePicker;

            let differenceInDays = differenceInMs / (1000 * 60 * 60 * 24);
            let choiceDaysInput = document.getElementById("choice_days");

            if (differenceInDays < 16) {
                document
                    .getElementById("collapse_days")
                    .classList.remove("show");

                choiceDaysInput.disabled = true;
                choiceDaysInput.checked = false; // Desmarcar el input
            } else {
                choiceDaysInput.disabled = false;
            }

            let flatpickrInstance =
            document.querySelector("#flatpickr-multi")._flatpickr;
            flatpickrInstance.set("minDate", startDatePicker);
            flatpickrInstance.set("maxDate", endDatePicker);
        }
    });

    var i = document.querySelector("#flatpickr-multi"),
        o = document.querySelector(".numeral-mask"),
        e = document.querySelector("#autosize-demo");
    i &&
        i.flatpickr({
            mode: "multiple",
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
                price: {
                    validators: {
                        notEmpty: {
                            message: "Por favor ingresar precio",
                        },
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

            formData.append("_token", csrfToken);
            formData.append("selected_days", selected_days_string);


            fetch("savePriceCombo", {
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
                        window.location.href = "Precios_Combos";
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
