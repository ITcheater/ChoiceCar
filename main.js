
const idSelectCar = document.getElementById('select-car');
const idMainImage = document.getElementById('main-image');
const idSelectionMenu = document.getElementById('selection-menu');
const idHideElements = document.getElementById('hide-el');

const arrCitroen = [
    'cars-module/citroen/minimum.jpg',
    'cars-module/citroen/standard.jpg',
    'cars-module/citroen/standard+.jpg',
    'cars-module/citroen/standard++.jpg',
    'cars-module/citroen/standard+++.jpg',
    'cars-module/citroen/all.jpg',
    'cars-module/citroen/optics.jpg',
    'cars-module/citroen/internal-rapids.jpg',
    'cars-module/citroen/outdoor-rapids.jpg',
    'cars-module/citroen/doors.jpg',
    'cars-module/citroen/back-wings.jpg',
    'cars-module/citroen/hood.jpg',
    'cars-module/citroen/front-bamper.jpg',
    'cars-module/citroen/back-bamper.jpg'
];
const arrMazda = [
    'cars-module/mazda/minimum.jpg',
    'cars-module/mazda/standard.jpg',
    'cars-module/mazda/standard+.jpg',
    'cars-module/mazda/standard++.jpg',
    'cars-module/mazda/standard+++.jpg',
    'cars-module/mazda/all.jpg',
    'cars-module/mazda/optics.jpg',
    'cars-module/mazda/internal-rapids.jpg',
    'cars-module/mazda/outdoor-rapids.jpg',
    'cars-module/mazda/doors.jpg',
    'cars-module/mazda/back-wings.jpg',
    'cars-module/mazda/hood.jpg',
    'cars-module/mazda/front-bamper.jpg',
    'cars-module/mazda/back-bamper.jpg'
];
const arrMercedes = [
    'cars-module/mercedes/minimum.jpg',
    'cars-module/mercedes/standard.jpg',
    'cars-module/mercedes/standard+.jpg',
    'cars-module/mercedes/standard++.jpg',
    'cars-module/mercedes/standard+++.jpg',
    'cars-module/mercedes/all.jpg',
    'cars-module/mercedes/optics.jpg',
    'cars-module/mercedes/internal-rapids.jpg',
    'cars-module/mercedes/outdoor-rapids.jpg',
    'cars-module/mercedes/doors.jpg',
    'cars-module/mercedes/back-wings.jpg',
    'cars-module/mercedes/hood.jpg',
    'cars-module/mercedes/front-bamper.jpg',
    'cars-module/mercedes/back-bamper.jpg'
];

const arrChoiceClass = [
    'cars-module/citroen/standard++.jpg',
    'cars-module/mazda/standard++.jpg',
    'cars-module/mercedes/standard++.jpg'
];

let index = 0;

idSelectCar.addEventListener('click',function (e) {

    const target = e.target;
    const carClass = document.getElementsByClassName('car-cl');

    for(let i = 0; i < carClass.length; i++){
        if(target === carClass[i]){
            idMainImage.setAttribute('src',arrChoiceClass[i]);
            index = i;
            break;
        }
    }
});

idSelectionMenu.addEventListener('click',function (e) {

    const target = e.target;
    const elements = document.getElementsByTagName('li');
    const addElements = document.getElementById('add-el');

    const arrays = [arrCitroen, arrMazda, arrMercedes];
    const indexArr = arrays[index];

    const a = getIndex(target, elements);

     if(a < elements.length){
         idMainImage.setAttribute('src',indexArr[a]);
     }else if(target === addElements){
         idHideElements.style.display =
             idHideElements.style.display === 'block' ? 'none' : 'block';
     }

});

function getIndex(node, elements) {
    let i;
    for (i = 0; i < elements.length; i++) {
        if (node === elements[i]) break;
    }
    return i;
}


