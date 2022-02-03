var selector = document.querySelector('input[type="tel"]');
var im = new Inputmask("+7(999) 999 99 99");

im.mask(selector);

new JustValidate('.form', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 30,
        },
        tel: {
            required: true,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue();
                return Number(phone) && phone.length === 10;
            }
        },
        comment: {
            required: true,
            name: true,
            minLength: 0,
            maxLength: 999,
        },
        mail: {
            required: true,
            email: true,
        },
    },
    messages: {
        mail: 'Укажите ваш e-mail',
        name: 'Как вас зовут?',
        tel: 'Укажите ваш телефон',
        comment: 'Напишите, что вы думаете'
    },
});