tinymce.init({
    min_height: 400,
  //   images_upload_url: 'https://tinymce-playground.firebaseapp.com/upload.js',
  // images_upload_base_path: 'https://tinymce-playground.firebaseapp.com/uploads',
  // images_upload_credentials: true,
    selector: '.mytextarea',
    removed_menuitems: 'newdocument',
    browser_spellcheck: true,
    branding: false,
    plugins: [
    'advlist emoticons textcolor autolink lists link image charmap print preview anchor',
    'searchreplace visualblocks code fullscreen',
    'insertdatetime media table contextmenu paste'
  ],
  toolbar: 'fontselect fontsizeselect emoticons forecolor backcolor insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
    textcolor_cols: "9"
  });



const load = localStorage.getItem('save')

if (load) {
let stateCheck = setInterval(() => {
  if (document.readyState === 'complete') {
    clearInterval(stateCheck);
tinyMCE.activeEditor.setContent(JSON.parse(load))  }
}, 50)
}

const save = () => {
  localStorage.setItem("save" , JSON.stringify(tinyMCE.activeEditor.getContent()))
  messagetooltip("Saved Successfully")
}


document.querySelector('#save').addEventListener('click', save)

const messagetooltip = (message) => {
  var tooltip = document.createElement("div")
  tooltip.setAttribute("id", "tooltip")
  var content = document.createTextNode(message)
  tooltip.appendChild(content)
  document.body.append(tooltip)
  setTimeout(()=> {
    var element = document.getElementById("tooltip");
    element.parentNode.removeChild(element);
  }, 3000)
}
