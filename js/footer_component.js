Vue.component('footer_component', {
	props: [],
	template:`<div class="footer container-fluid">
				<div class="container">
					<div class="footer__top row justify-content-around">
						<p class="footer__top_text col-sm">
							Офис: 167000, г. Сыктывкар, ул. Огородная, д. 6, оф. 2
							График работы: с 8:00 до 20:00
						</p>
						<p class="footer__top_text col-sm">Тел: 8 (950) 566-46-66, 8 (963) 557-35-77
							E-mail: gruz11reg@yandex.ru
						</p>
						<div class="col-sm">
							<button class="footer__top_button_feedback btn btn-primary text-decoration-none" @click="$emit('open_feed')">Обратная связь</button>
						</div>
					</div>
					<hr class="footer__line">
				</div>
				<div class="container">
					<div class="footer__bottom row text-center">
						<p class="footer__bottom_text col-sm">© 2017 Домашний переезд</p>
						<p class="footer__bottom_text col-sm">Разработка: «Информационные технологии»</p>
					</div>
				</div>
		 </div>`
});