Vue.component('feedback_component', {
	props: [],
	template:`<div class="container feedback">
                <form class="feedback__form">
                    <button @click.prevent="$emit('close')" class="feedback__button_close btn btn-primary">X</button>
                    <p>Форма обратной связи</p>
                    <div class="form-group">
                        <label for="exampleInputName">ФИО</label>
                        <input type="text" class="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Введите Ваше имя">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPhone">Телефон</label>
                        <input type="text" class="form-control" id="exampleInputPhone" placeholder="Введите Ваш номер телефона">
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Согласие на обработку персональных данных</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
          	  </div>`
});