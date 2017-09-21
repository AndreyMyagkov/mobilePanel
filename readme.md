# Библиотека для создания панели навигации в мобильной версии сайта

[**sortItems**](https://github.com/AndreyMyagkov/Aloha-html/tree/master/sort-bar)

![demo](https://github.com/AndreyMyagkov/mobilePanel/raw/master/demo.png "demo")




## Возможности

* Позволяет создавать панель с кнопками открытия меню сайта (гамбургер)
* Добавление своих собственных кнопок со своей логикой - открытие меню, ссылка и т.п.
* Уведомления на кнопках, например кол-во товаров в корзине

## Начало работы

# 1. Подключите скрипт и стили
```HTML
    <link href="mpanel/mpanel.css" rel="stylesheet" media="all">
    <script src="mpanel/mpanel.min.js"></script>
```
# 2. Активация панели с гамбургером:

```javascript
$.mobilePanel({'navbar':'.menu'});
```

По умолчанию создается панель с одной кнопкой-гамбургером, привязанной к основному меню. Кнопка располагается слева.

Параметры:

 ```navbar``` - класс или id основного меню на сайте

# 3. Добавляем кнопку открытия дополнительного меню

Все последующие кнопки располагаются справа.

```javascript
$.mobilePanel('button', {'text':'Каталог', 'navbar': '.aside-menu'});
```

Параметры:

 ```text``` - текст кнопки  (можно использовать HTML)
  ```navbar``` - класс или id дополнительного меню на сайте

# 4. Добавляем кастомную кнопку

```javascript
$.mobilePanel('button', {'text':'<a href=""><i class="fa fa-user-o" aria-hidden="true"></i> Войти</a>', 'center': true});
```
Параметры:

 ```text``` - текст кнопки (можно использовать HTML)
 ```center``` - разместить кнопку по центру


# 5. Вывести уведомление на кнопке

```javascript
basket=$.mobilePanel('button', {'text':'Корзина'});
$.mobilePanel('notification', {'button':basket, 'value': '5'});
```
Параметры:
 ```value``` - текст в уведомлении
