function checkValidation() {
    var i;
    var checkName = document.forms.myForm.name;
    if (checkName.value == "") {
        alert("Tên không được bỏ trống");
        checkName.select();
        return false;
    }
    
    var checkUserName = document.getElementById("validUserName");
    if (checkUserName.value == "") {
        alert("Tên tài khoản không được bỏ trống");
        checkUserName.select();
        return false;
    }else {
        var space = " ";
        for (i = 0; i < checkUserName.value.length; i++) {
            if (checkUserName.value[i] == space) {
                alert("Tên tài khoản không được để khoảng trắng");
                checkUserName.select();
                return false;
            }
        }
    }

    var checkPassWord = document.forms.myForm.password;
    if (checkPassWord.value == "") {
        alert("Mật khẩu không được để trống");
        checkPassWord.select();
        return false;
    }

    var checkRePassWord = document.forms.myForm.repassword;
    if (checkPassWord.value != checkRePassWord.value) {
        alert("Xác nhận mật khẩu sai");
        checkPassWord.value == "";
        checkRePassWord.value == "";
        checkPassWord.select();
        return false;
    }

    var checkEmail = document.getElementById("validEmail");
    if (checkEmail.value == "") {
        alert("Email không được để trống");
        checkEmail.select();
        return false;
    }else {
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!filter.test(checkEmail.value)) {
            alert("Email phải thỏa mãn định dạng abc@abc.com.vn");
            checkEmail.select();
            return false;
        }
    }

    var checkPhone = document.getElementById("validPhone");
    if (checkPhone.value == "") {
        alert("Số điện thoại không được để trống");
        checkPhone.select();
        return false;
    }else {
        var count = 0;
        for (i = 0; i < checkPhone.value.length; i++) {
            if (checkPhone.value[i].charCodeAt(0) < 48 || checkPhone.value[i].charCodeAt(0) > 57) {
                alert("Số điện thoại chỉ được gồm các ký tự số");
                checkPhone.select();
                return false;
            }
        }
        if (checkPhone.value.length < 11 || checkPhone.value.length > 12) {
            alert("Số điện thoại chỉ được gồm 11 hoặc 12 số");
            checkPhone.select();
            return false;
        }
    }
}

