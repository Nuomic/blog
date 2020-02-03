"use strict";

var _this = void 0;

handleUpload = function handleUpload(info) {
  var fileByte;
  return regeneratorRuntime.async(function handleUpload$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _this.handleStateChange({
            isLoading: true
          });

          _context.next = 3;
          return regeneratorRuntime.awrap(_this.convertFile(info.file));

        case 3:
          fileByte = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(_this.handleUploadAttachment(fileByte, info.file.name, info.onSuccess, info.onError, info.onUploadProgress));

        case 6:
          _this.handleStateChange({
            isLoading: false
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}; //上传按钮


handleUploadAttachment = function handleUploadAttachment(fileBytes, fileName, success, error) {
  return regeneratorRuntime.async(function handleUploadAttachment$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_this.resHandler(function () {
            return _this.handlePostApi(api.uploadAttachmentL, {
              fileBytes: fileBytes,
              fileName: fileName
            });
          }, function (res) {
            var attachmentInfo = res.attachmentInfo;
            console.log('res', res);
            success(attachmentInfo);

            _this.handleStateChange({
              attachmentInfo: attachmentInfo,
              Timestamp: res.reqTime
            });
          }, function (err) {
            console.log('err', err);
            error();
          }));

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
};

convertFile = function convertFile(file) {
  //reader onload封装为promis对象
  console.log('file', file);
  return new Promise(function (resolve, reject) {
    var reader = new FileReader(); // 参考 https://www.jianshu.com/p/5b44c41adfe2
    //FileReader可转类型：BinaryString、Text、DataURL、ArrayBuffer

    reader.readAsDataURL(file
    /* .originFileObj */
    ); //根据实际业务接口，使用filereader将文件转为base64 data-url对象

    reader.onload = function () {
      var dataUrl = this.result; // console.log('dataUrl', dataUrl);

      resolve(dataUrl.split(',')[1]);
    };

    reader.onerror = function (e) {
      reject(e);
    };
  });
};