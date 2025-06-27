function dowloadPDF() {
   const element = document.querySelector(".container-lg");
   const opt = {
    marginn: [0.1,0.1],
    filename: 'hoja_de_vida.pdf_Antonio_cardona',
    image:{type:'jpg', quality: 0.98},
    html2canvas: { scale: 2 , useCors:true},
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
   };

   html2pdf().set(opt)
}