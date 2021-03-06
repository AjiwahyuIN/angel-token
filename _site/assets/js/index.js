$('#btnSwitch').on('click', function(){
    $('.container-swap').toggleClass('container-swap--switch')
})
$('.swap-wrapper__btn-swap').on('click', function(){
    $('.swap-wrapper').toggleClass('swap-wrapper--switch')
})

$('#boxRoadmap').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:"<button type='button' class='btn-arrow btn-prev'><span class='icon-arrow-left'></span></button>",
    nextArrow:"<button type='button' class='btn-arrow btn-next'><span class='icon-arrow-right'></span></button>",
    dots: true,
    infinite: false,
    dots: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                unslick: true
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                unslick: true
            }
        },
    ]
});

$('#boxTeam').slick({
    prevArrow:"<button type='button' class='btn-arrow btn-prev'><span class='icon-arrow-left'></span></button>",
    nextArrow:"<button type='button' class='btn-arrow btn-next'><span class='icon-arrow-right'></span></button>",
    dots: true,
    infinite: false,
    arrows: true,
    responsive: [
        {
            breakpoint: 9999,
            settings: "unslick"
        },
        {
            breakpoint: 480,
            settings: {
                unslick: false,
            }
        },
    ]
});

var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);


$('.slider-homepage').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  arrows:false,
  vertical: false
});


$('.btn-nav-m').click(function(){
  $('.sidenav').css({'display':'block','opacity':'1 !important', 'transition': 'opacity 1s ease-out'})
})

$('.btn-sidenav-m').click(function(){
  $('.sidenav').css({'display':'none'})
})

$('.btn-hamburger').click(function(){
  $('.sidenav-landing').css({'display':'block','opacity':'1 !important', 'transition': 'opacity 1s ease-out'})
})

$('.btn-hamburger-side').click(function(){
  $('.sidenav-landing').css({'display':'none'})
})


$('.member-m__wrapper-xl').slick({
  slidesToShow: 1,
  arrows:false,
  slidesToScroll: 1
});

new TradingView.widget(
  {
  "autosize": true,
  "symbol": "NASDAQ:AAPL",
  "interval": "D",
  "timezone": "Etc/UTC",
  "theme": "light",
  "style": "1",
  "locale": "en",
  "toolbar_bg": "#f1f3f6",
  "enable_publishing": false,
  "allow_symbol_change": true,
  "container_id": "tradingview_f8b38"
}
  );