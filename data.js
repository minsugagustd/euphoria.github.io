//2015年的按钮响应
$("#Button2015").on("click", function () {
  var tb_value2015 = $("#TextBox2015").val();
  var flag = 1;
  $.getJSON('data2015.json', function (data) {
    if (tb_value2015 == '') {
      document.getElementById("Label2015").innerHTML = '';
      flag = 0;
    }
    $.each(data, function (idx, obj) {
      if (obj.name == tb_value2015) {
        document.getElementById("Label2015").innerHTML = "事件数为：" + obj.value;
        flag = 0;
      }
    })
    if (flag) {
      document.getElementById("Label2015").innerHTML = "找不到该国家";
    }
  });
})

//2016年的按钮响应
$("#Button2016").on("click", function () {
  var tb_value2016 = $("#TextBox2016").val();
  var flag = 1;
  $.getJSON('data2016.json', function (data) {
    if (tb_value2016 == '') {
      document.getElementById("Label2016").innerHTML = '';
      flag = 0;
    }
    $.each(data, function (idx, obj) {
      if (obj.name == tb_value2016) {
        document.getElementById("Label2016").innerHTML = "事件数为：" + obj.value;
        flag = 0;
      }
    })
    if (flag) {
      document.getElementById("Label2016").innerHTML = "找不到该国家";
    }
  });
})

//2017年的按钮响应
$("#Button2017").on("click", function () {
  var tb_value2017 = $("#TextBox2017").val();
  var flag = 1;
  $.getJSON('data2017.json', function (data) {
    if (tb_value2017 == '') {
      document.getElementById("Label2017").innerHTML = '';
      flag = 0;
    }
    $.each(data, function (idx, obj) {
      if (obj.name == tb_value2017) {
        document.getElementById("Label2017").innerHTML = "事件数为：" + obj.value;
        flag = 0;
      }
    })
    if (flag) {
      document.getElementById("Label2017").innerHTML = "找不到该国家";
    }
  });
})

//2018年的按钮响应
$("#Button2018").on("click", function () {
  var tb_value2018 = $("#TextBox2018").val();
  var flag = 1;
  $.getJSON('data2018.json', function (data) {
    if (tb_value2018 == '') {
      document.getElementById("Label2018").innerHTML = '';
      flag = 0;
    }
    $.each(data, function (idx, obj) {
      if (obj.name == tb_value2018) {
        document.getElementById("Label2018").innerHTML = "事件数为：" + obj.value;
        flag = 0;
      }
    })
    if (flag) {
      document.getElementById("Label2018").innerHTML = "找不到该国家";
    }
  });
})

//2019年的按钮响应
$("#Button2019").on("click", function () {
  var tb_value2019 = $("#TextBox2019").val();
  var flag = 1;
  $.getJSON('data2019.json', function (data) {
    if (tb_value2019 == '') {
      document.getElementById("Label2019").innerHTML = '';
      flag = 0;
    }
    $.each(data, function (idx, obj) {
      if (obj.name == tb_value2019) {
        document.getElementById("Label2019").innerHTML = "事件数为：" + obj.value;
        flag = 0;
      }
    })
    if (flag) {
      document.getElementById("Label2019").innerHTML = "找不到该国家";
    }
  });
})