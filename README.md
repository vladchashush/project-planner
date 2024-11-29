<!-- markdownlint-disable MD033 MD041 -->
<p align="center">
  <h1 align="center">📒 Project Planner</h1>
</p>
<p align="end">
  <span ><i>Showcase of fullstack development skills</i></span>
</p>
Данный проект создан для демонстрации навыков в веб-разработке.Cервис представляет собой таск трекер с двумя видами представления: лист задач и канбан, с задачами на ближайшую неделю. Реализованы следующие фичи: drag-n-drop задач, pomodoro-timer, dashboard c прогрессом задач, настройки профиля пользователя, а также отдельная страница для распределения задач на день. Фронтенд приложения собран на фреймворке NextJs, cтили реализованы при помощи tailwind css, взаимодействие с сервером, а также хранение серверного состояния берет на себя библиотека tanstack query. Так же на проекте реализована JWT авторизация. Бэкенд проекте представлен сервером на nestjs в связке c prisma и postrgresql.

<h3></h3>  
<p align="center">
  <img src="assets/icons/nestjs.svg" width="50"/>&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="assets/icons/nextjs.svg" width="50"/>&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="assets/icons/prisma.svg" width="50"/>&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="assets/icons/reactquery.svg" width="50"/>&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="assets/icons/typescript.svg" width="50"/>&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="assets/icons/postgresql.svg" width="50"/>&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="assets/icons/tailwindcss.svg" width="50"/>
</p>

<h2>🛠️ Функционал  </h2>

<h3 align="start">Три вида представления:</h3>

<ul>
  <li>Список задач: Лаконичное отображение задач в виде списка.</li>
  <li>Kanban-доска: Визуальное управление задачами с поддержкой drag-and-drop.</li>
  <li>Еждневное представление: Задачи на ближайший день.</li>
</ul>

<p align="center">
  <img src="assets/tasks-kanban.png" alt="tasks page" width="250"/>
  <img src="assets/tasks.png" alt="tasks page" width="250"/>
  <img src="assets/time-blocking.png" alt="tasks page" width="250"/>
</p>

<h3 align="start">Регистрация и аутентификация пользователя</h3>
<p>
  <ul>
    <li>На проекте используется механизм JWT-авторизации</li>
    <li>Форма с валидацией почтового ящика и пароля при помощи библиотеки react-hook-form</li>
  </ul>
</p>

<p align="center">
  <img src="assets/auth-window.png" alt="tasks page" width="300"/>
  <img src="assets/auth-window-validation.png" alt="tasks page" width="300"/>
</p>

<h3 align="start">Прочее</h3>
<p>
  <ul>
    <li>Дашбоард со статистикой по выполненым задачам</li>
    <li>Настройка профиля пользователя</li>
  </ul>
</p>
<p align="center">
  <img src="assets/dashboard.png" alt="tasks page" width="400"/>
  <img src="assets/settings.png" alt="tasks page" width="400"/>
</p>
<!-- markdownlint-enable MD033 -->
