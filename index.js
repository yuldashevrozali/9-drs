document.addEventListener('DOMContentLoaded', function() {
    const btn1 = document.getElementById('btn1');
    const btn = document.getElementById('btn');
    const snake = document.getElementById('snake');
    const head = document.getElementById('head');
    const head1 = document.getElementById('head1');

    btn1 && btn1.addEventListener('click', function () {
        let currentMarginLeft = parseFloat(getComputedStyle(snake).marginLeft) || 0;
        head.style.display = 'block';
        head1.style.display = 'none';
        
        currentMarginLeft += 10;
        
        snake.style.marginLeft = currentMarginLeft + 'px';
    });

    btn && btn.addEventListener('click', function () {
        let currentMarginLeft = parseFloat(getComputedStyle(snake).marginLeft) || 0;
        head1.style.display = 'block';
        head.style.display = 'none';
        
        currentMarginLeft -= 10;
        
        snake.style.marginLeft = currentMarginLeft + 'px';
    });

    if(snake.style.marginLeft == 310 + 'px') {
        alert('boq')
    }
});
