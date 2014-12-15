$(document).ready(function () {

    $('.form22').validate({
        rules: {
            TenDN: {
                required: true, minlength: 4
            },
            ChuDN: {
                required: true, minlength: 4
            },
            DiaChiDN: {
                required: true, minlength: 4
            },
            SDTDN: {
                required: true, minlength: 7
            },
            Fax: {
                required: true, minlength: 4
            },
            SelectTT: {
                required: true
            },
            SelectQH: {
                required: true
            },
            SelectPX: {
                required: true
            }
        },
        messages: {
            TenDN:{
                required:"Tên DN không được để trống",
                minlength:"Tên DN không được ít hơn 4 ký tự"
            },
            ChuDN:{
                required:"Tên không được để trống",
                minlength:"Tên không được ít hơn 4 ký tự"
            },
            DiaChiDN:{
                required:"Địa chỉ không được để trống",
                minlength:"Địa chỉ không được ít hơn 4 ký tự"
            },
            Fax:{
                required:"Fax không được để trống",
                minlength:"Fax không được ít hơn 4 ký tự"
            },
            SDTDN:{
                required:"Số điện thoại không được để trống",
                minlength:"Số điện thoại không được ít hơn 7 ký tự"
            },
            SelectTT:{
                required:"Chưa chọn tỉnh thành"
            },
            SelectQH:{
                required:"Chưa chọn quận huyện"
            },
            SelectPX:{
                required:"Chưa chọn phường xã"
            },
        },
        errorClass: "error",
        highlight: function (label) {
            $(label).removeClass('error');
        },
        submitHandler: function(form) {
        form.submit();
    }
    });
	
	$('.form25').validate({
        rules: {
            Select1: {
                required: true
            },
            Select2: {
                required: true
            },

        },
        messages: {
            Select1:{
                required:"Chưa chọn chức vụ"
            },
            Select2:{
                required:"Chưa chọn chức vụ"
            },
        },
        errorClass: "error",
        highlight: function (label) {
            $(label).removeClass('error');
        },
        submitHandler: function(form) {
        form.submit();
    }
    });
	
	
    $('.form31').validate({
        rules: {
            TenDN: {
                required: true, minlength: 4
            },

            DiaChiDN: {
                required: true, minlength: 4
            },
            SDTDN: {
                required: true, minlength: 7
            },
            SelectTT: {
                required: true
            },
            SelectQH: {
                required: true
            },
            SelectPX: {
                required: true
            },
            SelectCC: {
                required: true
            },
            NoiDung: {
                required: true
            },	
            checkbox1: {
                required: true
            },				
        },
        messages: {
            TenDN:{
                required:"Tên DN không được để trống",
                minlength:"Tên DN không được ít hơn 4 ký tự"
            },

            DiaChiDN:{
                required:"Địa chỉ không được để trống",
                minlength:"Địa chỉ không được ít hơn 4 ký tự"
            },

            SDTDN:{
                required:"Số điện thoại không được để trống",
                minlength:"Số điện thoại không được ít hơn 7 ký tự"
            },
            SelectTT:{
                required:"Chưa chọn tỉnh thành"
            },
            SelectQH:{
                required:"Chưa chọn quận huyện"
            },
            SelectPX:{
                required:"Chưa chọn phường xã"
            },
            SelectCC:{
                required:" Chưa chọn chi cục"
            },
            NoiDung:{
                required:"Chưa điền nội dung"
            },
            checkbox1:{
                required:" Chưa chọn loại hình sản xuất "
            },			
			
        },
        errorClass: "error",
        highlight: function (label) {
            $(label).removeClass('error');
        },
        submitHandler: function(form) {
        form.submit();
    }
    });	
	

	$('.form49').validate({
        rules: {
            SelectCC: {
                required: true
            },
            NoiDung: {
                required: true
            },
            DateTime: {
                required: true
            },			

        },
        messages: {
            SelectCC:{
                required:"Chưa chọn chi cục"
            },
            NoiDung:{
                required:"Chưa ghi nội dung"
            },
            DateTime: {
                required:"Chưa nhập ngày tháng"
            },			
        },
        errorClass: "error",
        highlight: function (label) {
            $(label).removeClass('error');
        },
        submitHandler: function(form) {
        form.submit();
    }
    });	
	
	$('.form70').validate({
        rules: {
            SelectCB: {
                required: true
            },
            DateTime1: {
                required: true
            },
            DateTime2: {
                required: true
            },			

        },
        messages: {
            SelectCB:{
                required:" Chưa chọn cán bộ"
            },
            DateTime1:{
                required:"Chưa nhập ngày tháng"
            },
            DateTime2: {
                required:"Chưa nhập ngày tháng"
            },			
        },
        errorClass: "error",
        highlight: function (label) {
            $(label).removeClass('error');
        },
        submitHandler: function(form) {
        form.submit();
    }
    });	
	
	$('.form54').validate({
        rules: {
            KinhGui: {
                required: true
            },
            DateTime: {
                required: true
            },
            TenDN: {
                required: true, minlength: 4
            },
            DiaChiDN: {
                required: true, minlength: 4
            },
            SDTDN: {
                required: true, minlength: 7
            },
            SelectTT: {
                required: true
            },
            SelectQH: {
                required: true
            },
            SelectPX: {
                required: true
            },
            GiayTo: {
                required: true
            }				

        },
        messages: {
            KinhGui:{
                required:"Chưa nhập phần kính gửi"
            },
            DateTime:{
                required:"Chưa nhập ngày tháng"
            },
            TenDN:{
                required:"Tên DN không được để trống",
                minlength:"Tên DN không được ít hơn 4 ký tự"
            },
            DiaChiDN:{
                required:"Địa chỉ không được để trống",
                minlength:"Địa chỉ không được ít hơn 4 ký tự"
            },
            SDTDN:{
                required:"Chưa nhập số điện thoại",
                minlength:"Số điện thoại không được ít hơn 7 ký tự"
            },
            SelectTT:{
                required:"Chưa chọn tỉnh thành"
            },
            SelectQH:{
                required:"Chưa chọn quận huyện"
            },
            SelectPX:{
                required:"Chưa chọn phường xã"
            },		
            GiayTo:{
                required:"Chưa điền nội dung giấy tờ"
            },				
        },
        errorClass: "error",
        highlight: function (label) {
            $(label).removeClass('error');
        },
        submitHandler: function(form) {
        form.submit();
    }
    });	
	
	$('.form75').validate({
        rules: {
            CanBo: {
                required: true
            },
            DateTime: {
                required: true
            },
            XacNhan: {
                required: true
            },

        },
        messages: {
            CanBo:{
                required:"Chưa nhập cán bộ"
            },
            DateTime:{
                required:"Chưa nhập ngày tháng"
            },
            XacNhan: {
                required: " Chưa đánh dấu xác nhận "
            },			
        },
        errorClass: "error",
        highlight: function (label) {
            $(label).removeClass('error');
        },
        submitHandler: function(form) {
        form.submit();
    }
    });		

	$('.form47').validate({
        rules: {
            TenDN: {
                required: true, minlength: 4
            },

            DiaChiDN: {
                required: true, minlength: 4
            },
            SDTDN: {
                required: true, minlength: 7
            },
            SelectTT: {
                required: true
            },
            SelectQH: {
                required: true
            },
            SelectPX: {
                required: true
            },
            SelectCC: {
                required: true
            },
            NoiDung: {
                required: true
            },	
            checkbox1: {
                required: true
            },				
        },
        messages: {
            TenDN:{
                required:"Tên DN không được để trống",
                minlength:"Tên DN không được ít hơn 4 ký tự"
            },

            DiaChiDN:{
                required:"Địa chỉ không được để trống",
                minlength:"Địa chỉ không được ít hơn 4 ký tự"
            },

            SDTDN:{
                required:"Số điện thoại không được để trống",
                minlength:"Số điện thoại không được ít hơn 7 ký tự"
            },
            SelectTT:{
                required:"Chưa chọn tỉnh thành"
            },
            SelectQH:{
                required:"Chưa chọn quận huyện"
            },
            SelectPX:{
                required:"Chưa chọn phường xã"
            },
            SelectCC:{
                required:" Chưa chọn chi cục"
            },
            NoiDung:{
                required:"Chưa điền nội dung"
            },
            checkbox1:{
                required:" Chưa chọn loại hình sản xuất "
            },			
			
        },
        errorClass: "error",
        highlight: function (label) {
            $(label).removeClass('error');
        },
        submitHandler: function(form) {
        form.submit();
    }
    });	
	
	$('.formDK').validate({
        rules: {
            SDK: {
                required: true
            },
            NgayCap: {
                required: true
            },
            NoiCap: {
                required: true
            },
            SelectLH: {
                required: true
            },
            TenDN: {
                required: true
            },
            SelectTT: {
                required: true
            },
            SelectQH: {
                required: true
            },
            SelectPX: {
                required: true
            },
            SDT: {
                required: true
            },
			Email: {
                required: true
            },
			NguoiDD: {
                required: true
            },
			SDT_DD: {
                required: true
            },
			ChucVu_DD: {
                required: true
            },
        },
        messages: {
            SDK: {
                required: "Chưa nhập số đăng ký"
            },
            NgayCap: {
                required: "Chưa nhập ngày cấp"
            },
            NoiCap: {
                required: "Chưa nhập cơ quan cấp"
            },
            SelectLH: {
                required: "Chưa chọn loại hình"
            },
            TenDN: {
                required: "Chưa nhập tên doanh nghiệp"
            },
            SelectTT: {
                required: "Chưa chọn tỉnh thành"
            },
            SelectQH: {
                required: "Chưa chọn quận huyện"
            },
            SelectPX: {
                required: "Chưa chọn phường xã"
            },
            SDT: {
                required: "Chưa nhập số điện thoại"
            },
			Email: {
                required: "Chưa nhập email"
            },
			NguoiDD: {
                required: "Chưa nhập người đại diện"
            },
			SDT_DD: {
                required: "Chưa nhập số điện thoại"
            },
			ChucVu_DD: {
                required: "Chưa nhập chức vụ"
            },
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

