$.mobilePanel({'navbar':'.menu'}); // init
$.mobilePanel('button', {'text':'Каталог', 'navbar': '.aside-menu'});
$.mobilePanel('button', {'text':'<i class="fa fa-user-o" aria-hidden="true"></i> Войти', 'navbar': '.b-login', 'center': true});

basket=$.mobilePanel('button', {'text':'Корзина'});
$.mobilePanel('notification', {'button':basket, 'value': '5'});
