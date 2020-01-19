handleUpload = async info => {
  this.handleStateChange({ isLoading: true });
  let fileByte = await this.convertFile(info.file);
  await this.handleUploadAttachment(
    fileByte,
    info.file.name,
    info.onSuccess,
    info.onError,
    info.onUploadProgress
  );
  this.handleStateChange({ isLoading: false });
};
//上传按钮
handleUploadAttachment = async (fileBytes, fileName, success, error) => {
  await this.resHandler(
    () => this.handlePostApi(api.uploadAttachmentL, { fileBytes, fileName }),
    res => {
      const { attachmentInfo } = res;
      console.log('res', res);
      success(attachmentInfo);
      this.handleStateChange({
        attachmentInfo,
        Timestamp: res.reqTime
      });
    },
    err => {
      console.log('err', err);
      error();
    }
  );
};
convertFile = file => {
  //reader onload封装为promis对象
  console.log('file', file);
  return new Promise(function(resolve, reject) {
    const reader = new FileReader();
    // 参考 https://www.jianshu.com/p/5b44c41adfe2
    //FileReader可转类型：BinaryString、Text、DataURL、ArrayBuffer
    reader.readAsDataURL(file /* .originFileObj */); //根据实际业务接口，使用filereader将文件转为base64 data-url对象
    reader.onload = function() {
      let dataUrl = this.result;
      // console.log('dataUrl', dataUrl);
      resolve(dataUrl.split(',')[1]);
    };
    reader.onerror = function(e) {
      reject(e);
    };
  });
};
