Vue.component('autopark_component', {
	props: [],
	template:`<div class="autopark container">
	            <div class="row">
	              <div class="autopark__label col-sm-6 text-left">
	                <p class="autopark__label_text text-uppercase font-weight-bold">Наш автопарк</p>
	                <hr class="autopark__label_line col-1 no-gutters">
	              </div>
	            </div>
	            <div class="row no-gutters">
	              <div class="autopark__auto_1_5 col-sm text-left">
	                <div class="row">
	                  <div class="autopark__rectangle"></div>
	                  <p class="col-3">1.5 тонны</p>
	                  <p class="col">Газель 3м, 1,5т, 12м3</p>
	                </div>
	                <img src="img/autopark/1,5t.png" alt="auto" title="auto">
	              </div>
	              <div class="autopark__auto_3 col-sm text-left">
	                <div class="row">
	                  <div class="autopark__rectangle"></div>
	                  <p class="col-3">3 тонны</p>
	                  <p class="col">Грузовик, 3,5м, 3,5 т, 15м3</p>
	                </div>
	                <img src="img/autopark/3t.png" alt="auto" title="auto">
	              </div>
	            </div>
	            <div class="row no-gutters">
	              <div class="autopark__auto_10 col-sm text-left">
	                <div class="row">
	                  <div class="autopark__rectangle"></div>
	                  <p class="col-3">10 тонн</p>
	                  <p class="col">Грузовик, 6м, 10 т, 34 м3</p>
	                </div>
	                <img src="img/autopark/10t.png" alt="auto" title="auto">
	              </div>
	              <div class="autopark__auto_20 col-sm text-left">
	                <div class="row">
	                  <div class="autopark__rectangle"></div>
	                  <p class="col-3">20 тонн</p>
	                  <p class="col">Евро тент, 13,6м, 20 т, 86 м3</p>
	                </div>
	                <img src="img/autopark/20t.png" alt="auto" title="auto">
	              </div>
	            </div>
	          </div>`
});