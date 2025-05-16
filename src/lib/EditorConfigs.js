export const emailBodyConfig = {
    content_css: [
        "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
    ],
    height: '60vh',
    plugins: 'code preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help',
    toolbar: 'formatselect | bold italic forecolor backcolor | code | link image media | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent',
    toolbar_drawer: 'floating',
    valid_elements: '*[*]',
    image_advtab: true,
    license_key: '74ca372jx03ojgry4czoi2g59d4pruuozmudnvfqwzs742yz'
};
export const shortDesConfi = {
    menubar: false,
    inline: true,
    plugins: [
        'link', 'lists', 'autolink'
    ],
    toolbar: [
        'undo redo | bold italic underline | fontfamily fontsize',
        'forecolor backcolor | alignleft aligncenter alignright alignfull | numlist bullist outdent indent'
    ],
    valid_elements: '*[*]',
    license_key: '74ca372jx03ojgry4czoi2g59d4pruuozmudnvfqwzs742yz'
};
export const shortEditor = {
  license_key: '74ca372jx03ojgry4czoi2g59d4pruuozmudnvfqwzs742yz',
    menubar: false,
    plugins: ["link", "lists", "autolink"],
    toolbar: [
      "undo redo | bold italic underline | fontfamily fontsize | forecolor backcolor | alignleft aligncenter alignright alignfull | numlist bullist outdent indent | link",
    ],
    height: "200",
    valid_elements: "*[*]",
    setup: function (ed) {
      ed.on("change", function (e) {
        emit("update:modelValue", ed.getContent());
      });
    },
  };

  export const component_types = [
    "div",
    "p",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "v-divider",
    "v-list-item",
    "v-list-item-group",
    "v-list",
    "v-card",
    "v-card-title",
    "v-card-subtitle",
    "v-card-text",
    "v-card-actions",
    "v-btn",
    "iframe",
    "v-img",
    "v-col",
    "v-row",
    "v-container",
  ]