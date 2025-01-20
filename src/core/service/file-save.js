//===============oxiriga yetkazish kerak=================\\
export default function (obj, fileName,type) {
   
  if (/*window.showSaveFilePicker*/false) {
    let filetypes={
      xlsx:{ "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
      [".xlsx"]},
      pdf:{ "application/pdf": [".pdf"]}
    };
    const options = {
      suggestedName: fileName,
      startIn: "documents",
      types: [
        {
          description: "Сохранить...",
          accept: filetypes[type],
        },
      ],
    };
    window.showSaveFilePicker(options).then((fileHandle) => {
      fileHandle.createWritable().then(async (writable) => {
        await writable.write(obj);
        await writable.close();
      });
    });
  } else {
    var link = document.createElement('a');
    link.setAttribute('download', fileName+'.'+type);
    //let base64='data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,' + btoa(String.fromCharCode(...new Uint8Array(obj)));
    link.href =obj//base64;///window.URL.createObjectURL(base64);
    document.body.appendChild(link);

    // wait for the link to be added to the document
    window.requestAnimationFrame(function () {
      var event = new MouseEvent('click');
      link.dispatchEvent(event);
      document.body.removeChild(link);
    });



  }
}
