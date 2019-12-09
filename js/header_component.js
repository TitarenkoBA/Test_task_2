Vue.component('header_component', {
	props: [],
	template:`<div class="container-fluid header">
				<div class="header__top_left_rectangle"></div>
				<div class="container">
					<div class="header__top row text-center">
						<div class="header__top_logoblock col-sm-4 row align-self-center">
							<img class="header__top_logoblock_image" src="img/logo/logo.png" alt="logo" title="logo">
							<p class="header__top_logoblock_text col text-left text-uppercase font-weight-bold align-self-center">домашний переезд</p>
						</div>
						<div class="col-sm align-self-center">
							<img src="img/icons/header/phone.png" alt="icon phone" title="icon phone" class="header__top_icon_phone">
							<a href="tel:8(950)566-46-66" class="header__top_link text-decoration-none">8 (950) 566-46-66</a>
						</div>
						<div class="col-sm align-self-center">
							<img src="img/icons/header/mail.png" alt="icon mail" title="icon mail" class="header__top_icon_mail">
							<a href="email:gruz11reg@yandex.ru" class="header__top_link text-decoration-none">gruz11reg@yandex.ru</a>
						</div>
						<div class="col-sm align-self-center">
							<button class="header__top_button_feedback btn btn-primary text-decoration-none" @click="$emit('open_feed')">Обратная связь</button>
						</div>
					</div>
				</div>
				<nav class="container" @click.prevent="">
					<ul class="header__nav row justify-content-end text-center">
						<li><a href="" class="header__nav_link col-sm text-decoration-none" @click="$emit('change_active','company')">О компании</a></li>
						<li><a href="" class="header__nav_link col-sm text-decoration-none" @click="$emit('change_active','services')">Услуги</a></li>
						<li><a href="" class="header__nav_link col-sm text-decoration-none" @click="$emit('change_active','calc')">Калькулятор</a></li>
						<li><a href="" class="header__nav_link col-sm text-decoration-none" @click="$emit('change_active','prices')">Прайс</a></li>
						<li><a href="" class="header__nav_link col-sm text-decoration-none" @click="$emit('change_active','contacts')">Контакты</a></li>
					</ul>
				</nav>
				<div class="header__bottom_right_rectangle"></div>
			 </div>`
});