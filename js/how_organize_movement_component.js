Vue.component('how_organize_movement_component', {
	props: [],
	template:`<div class="how_organize_movement container text-center">
	            <div class="row">
	              <div class="how_organize_movement__label col-sm-6 text-left">
	                <p class="how_organize_movement__label_text text-uppercase font-weight-bold">Как организуем перевозку</p>
	                <hr class="how_organize_movement__label_line col-1 no-gutters">
	              </div>
	            </div>
	            <div class="row">
	              <div class="how_organize_movement__request col-sm">
	                <img class="how_organize_movement__request_icon" src="img/icons/how_organize/request.png" alt="icon request"  title="icon request">
	                <p class="how_organize_movement__request_title font-weight-bold">Оставляете <a href="#" class="how_organize_movement__request_link text-decoration-none">заявку</a></p>
	                <p class="how_organize_movement__request_text">Даете параметры груза</p>
	              </div>
	              <img src="img/icons/how_organize/arrow.png" class="how_organize_movement__arrow align-self-center" style="height: 10px;">
	              <div class="how_organize_movement__contract col-sm">
	                <img class="how_organize_movement__contract_icon" src="img/icons/how_organize/dogovor.png" alt="icon contract"  title="icon contract">
	                <p class="how_organize_movement__contract_title font-weight-bold">Заключаем договор</p>
	                <p class="how_organize_movement__contract_text">Согласовываем цену</p>
	              </div>
	              <img src="img/icons/how_organize/arrow.png" class="how_organize_movement__arrow align-self-center" style="height: 10px;">
	              <div class="how_organize_movement__transportation col-sm">
	                <img class="how_organize_movement__transportation_icon" src="img/icons/how_organize/truck.png" alt="icon transportation"  title="icon transportation">
	                <p class="how_organize_movement__transportation_title font-weight-bold">Осуществляем перевозку</p>
	                <p class="how_organize_movement__transportation_text">Подаём транспорт в назначенное
	                время, загружаемся, делаете предоплату, доставляем груз</p>
	              </div>
	              <img src="img/icons/how_organize/arrow.png" class="how_organize_movement__arrow align-self-center" style="height: 10px;">
	              <div class="how_organize_movement__discharge col-sm">
	                <img class="how_organize_movement__discharge_icon" src="img/icons/how_organize/box.png" alt="icon discharge"  title="icon discharge">
	                <p class="how_organize_movement__discharge_title font-weight-bold">Прием и разгрузка</p>
	                <p class="how_organize_movement__discharge_text">Окончательный расчёт</p>
	              </div>
	            </div>
	          </div>`
});