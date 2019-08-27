**Q1.** Расскажите, чем, на ваш взгляд, отличается хорошее клиентское приложение от плохого с точки зрения
* пользователя - легкий и понятный интерфейс, скорость работы, отсутствие ошибок, наличие обратной связи и подсказок в случае возникновения проблем.
* менеджера проекта - соответствие ТЗ, отсутствие задержек и претензий к выполненной работе, функционал и расширяемость.
* дизайнера - соответствие верстки макету дизайнера и наличие тех фишек что он обозначил в макете (анимация, переходы и тд.)
* верстальщика - гибкость, расширяемость, модульность, соответствие стандартам, поддержка большего числа девайсов, документация, простота кода
* серверного программиста - производительность, доступность


**Q2.** Опишите основные особенности разработки крупных многостраничных сайтов, функциональность которых может меняться в процессе реализации и поддержки. 

Расскажите о своем опыте работы над подобными сайтами: какие подходы, инструменты и технологии вы применяли на практике, с какими проблемами сталкивались и как их решали.

**Q2 ответ.** Для больших сайтов желательно использование контроля версий, автоматизацию, поддержание единого стиля кода, правильная структура сайта, наличие поиска и должного функционала.

В своих проектах я всегда пользуюсь git, там я сохраняю и комментирую различные этапы разработки. Использую таск менеджер Gulp и сборщик Webpack для автоматизации большинства рутинных задач. Использую в работе БЭМ, что позволяет разделить код будущего сайта на отдельные, минимально зависящие друг от друга блоки. Перед стартом, я обязательно просматриваю все макеты и разделяю элементы на разные группы, что позволяет уменьшить лишний код и ускорить процесс работы. Так же в крупных проектах важна информированность каждого из участников разработки, для этого их объединяют в общем чате и при необходимости делают созвон (если сотрудники работают удаленно)

Для меня были сложны проекты, где был трудно читаемый код и не было единой стилистики. Если правки небольшие то я создаю свой маленький блок, независимый от глобальных переменных и классов. Если правки большие то уже выясняю, возможно ли это в данном проекте, если усилия необходимые для правок слишком велики то может стать вопрос о создании проекта с нуля, но это редко.


**Q3.** При разработке интерфейсов с использованием компонентной архитектуры часто используются термины Presentational Сomponents и Сontainer Сomponents. Что означают данные термины? Зачем нужно такое разделение, какие у него есть плюсы и минусы? 

**Q3 ответ.** Presentational Сomponents отвечает за вывод данных, не имеет внутреннего состояния. Сontainer Сomponents - отвечают за обработку данных, имеют внутренне состояние. Помогает разделять код на логику и интерфейс, облегчает изменение кода. К сожалению плохо знаком с ними.

**Q4.** Как устроено наследование в JS? Расскажите о своем опыте реализации JS-наследования без использования фреймворков.

**Q4 ответ.** В js объект имеет ссылку на другой объект прототип, у него в свою очередь имеется другой прототип и так далее пока не найдется prototype равный null. 

**Q5.** Какие библиотеки можно использовать для написания тестов end-to-end во фронтенде? Расскажите о своем опыте тестирования веб-приложений. 

**Q5 ответ.** Jest, Mocha. К сожалению проводит только юнит-тестирование.

**Q6.** Вам нужно реализовать форму для отправки данных на сервер, состоящую из нескольких шагов. В вашем распоряжении дизайн формы и статичная верстка, в которой не показано, как форма должна работать в динамике. Подробного описания, как должны вести себя различные поля в зависимости от действий пользователя, в требованиях к проекту нет. Ваши действия? 

**Q6 ответ.** Обращусь к менеджеру проекта за уточнением, обсужу с командой возможные варианты. В случае если не будет конкретики и есть разрешение сделать на свое усмотрение, то я реализую оптимальный вариант работы формы. Я не считаю это полноценным решением, так как всегда есть шансы что все должно быть по другому и стоит быть готовым к переделыванию данной части работы.

**Q7.** Расскажите, какие инструменты помогают вам экономить время в процессе написания, проверки и отладки кода. 

**Q7 ответ.** Для работы я использую PhpStorm, у которого множество инструментов, помогающих разработчику. Сборку осуществляю Gulp и Webpack. Так же использую линтеры со своими настройками, чтобы работать в едином стиле и видеть ошибки при написании кода. Так же использую Firefox Developer Edition для проверки.

**Q8.** 1 Какие ресурсы вы используете для развития в профессиональной сфере? Приведите несколько конкретных примеров (сайты, блоги и так далее). 

**Q8 ответ.** 
- [https://codesandbox.io/](codesandbox.io)
- StackOverflow
- Habr
- [https://codepen.io/](codepen.io)
- [https://learn.javascript.ru/](learn.javascript.ru)
- телеграм каналы и группы
- форумы

2 Какие ещё области знаний, кроме тех, что непосредственно относятся к работе, вам интересны? 

Интерес к стоматологии, дизайну, истории, технологии и психологии.

**Q9.** Расскажите нам немного о себе и предоставьте несколько ссылок на последние работы, выполненные вами. 

**Q9 ответ.** Я врач-стоматолог, у которого было хобби верстка. Со временем я стал все больше и больше времени уделять верстке и в конце-то концов пришел к выводу что это для меня более интересно и могу достичь в программировании больших успехов чем в стоматологии. На данный момент в свободное время я изучаю React и буду очень рад попасть в вашу команду в качестве джуниора.

Мои последние работы тут 
- [https://kitdeveloper.ru/portfolio](https://kitdeveloper.ru/portfolio)

Из больших работ, но не сложных
- [https://primexbt.com/](https://primexbt.com/)
- [https://lenoblseptik.ru/](https://lenoblseptik.ru/)

Из интересного мой сборщик проекта
- [https://github.com/uzunhair/kitdeveloper-package](https://github.com/uzunhair/kitdeveloper-package)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
