$(document).ready(function () {

    $('.form17').validate({ // initialize the plugin
        rules: {
            selectTXC: {
                required: true
            }
        },
        messages: {
            selectTXC: "Bạn chưa chọn người thẩm xét chính"
        },
        errorClass: "error",
        highlight: function (label) {
            $(label).removeClass('error');
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
    $('.form27').validate({
        rules: {
            DatePicker: {
                required: true
            },
            TenDoanhNghiep: {
                required: true, minlength: 4
            },
            DiaChiDN: {
                required: true, minlength: 4
            },
            SDTDN: {
                required: true, minlength: 7
            },
            NoiDungDN: {
                required: true, minlength: 7
            }
        },
        messages: {
            DatePicker: "Bạn chưa chọn ngày",
            TenDoanhNghiep:{
                required:"Tên không được để trống",
                minlength:"Tên không được ít hơn 4 ký tự"
            },
            DiaChiDN:{
                required:"Địa chỉ không được để trống",
                minlength:"Địa chỉ không được ít hơn 4 ký tự"
            },
            SDTDN:{
                required:"Số điện thoại không được để trống",
                minlength:"Số điện thoại không được ít hơn 7 ký tự"
            },
            NoiDungDN:{
                required:"Nội dung không được để trống",
                minlength:"Nội dung không được ít hơn 7 ký tự"
            }
        },
        errorClass: "error",
        highlight: function (label) {
            $(label).removeClass('error');
        },
        submitHandler: function(form) {
        form.submit();
    }
    });
    $('.form35').validate({
        rules: {
            CanBoUyQuyen: {
                required: true
            },
            TuNgay: {
                required: true
            },
            DenNgay: {
                required: true
            }

        },
        messages: {
            CanBoUyQuyen: "Bạn chưa chọn người ủy quyền",
            TuNgay: "Bạn chưa chọn ngày",
            DenNgay: "Bạn chưa chọn ngày"
        },
        errorClass: "error",
        highlight: function (label) {
            $(label).removeClass('error');
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
    $('.form42').validate({
        rules: {
            KQTXHS: {
                required: true
            }

        },
        messages: {
            KQTXHS: "Bạn chưa chọn người thẩm xét chính"
        },
        errorClass: "error",
        highlight: function (label) {
            $(label).removeClass('error');
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
})