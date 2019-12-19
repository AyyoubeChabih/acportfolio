var current = 'home';

function show(id) {
    document.getElementById(current).classList.add('hidden');
    document.getElementById(current + '-img').src =
        'img/' + current + '-inactive.png';
    document.getElementById(id + '-img').src = 'img/' + id + '.png';
    current = id;
    document.getElementById(current).classList.remove('hidden');
}

function animation() {
    document.getElementById('slide1').classList.add('slide-anim1');
    document.getElementById('slide2').classList.add('slide-anim2');
    setTimeout(function() {
        deleteClass();
    }, 2000);
}

function deleteClass() {
    document.getElementById('slide1').classList.remove('slide-anim1');
    document.getElementById('slide2').classList.remove('slide-anim2');
}
