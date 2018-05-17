tinymce.init({
    min_height: 400,
    images_upload_url: 'https://tinymce-playground.firebaseapp.com/upload.js',
  images_upload_base_path: 'https://tinymce-playground.firebaseapp.com/uploads',
  images_upload_credentials: true,
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
}, 50);
}

document.querySelector('#save').addEventListener('click', () => {
  const getHtml = () => tinyMCE.activeEditor.getContent()
  localStorage.setItem("save" , JSON.stringify(getHtml()));
})