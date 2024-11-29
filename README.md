<!-- markdownlint-disable MD033 MD041 -->
<p align="center">
  <h1 align="center">📒 Project Planner</h1>
</p>
<p align="end">
  <span ><i>Planner for week tasks and productivity control</i></span>
</p>
<p>
Добро рожаловать в демо проект Project Planner - эксперимент по связке NextJs c серверным рендириногом + NestJs. Cервис представляет собой таск трекер с двумя видами представления: лист задач и канбан, с задачами на ближайшую неделю. Реализованы следующие фичи: drag-n-drop задач, pomodoro-timer, dashboard c прогрессом задач, настройки профиля пользователя, а также отдельная страница для распределения задач на день. Фронтенд приложения собран на фреймворке NextJs, cтили реализованы при помощи tailwind css, взаимодействие с сервером, а также хранение серверного состояния берет на себя библиотека tanstack query. Так же на проекте реализована JWT авторизация. Бэкенд проекте представлен сервером на nestjs в связке c prisma и postrgresql.
</p>
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

<h2>📂 Установка и настройка</h2>

<!-- markdownlint-enable MD033 -->

### Необходимые зависимости  
- Node.js  
- PostgreSQL  

### Установка  

1. Клонируйте репозиторий:  
```bash
   git clone https://github.com/vladchashush/project-planner.git
```
2. Установите зависимости:
```bash
cd server
npm install
cd ../frontend
npm install
```
3. Настройте окружение
- Заполните файл .env в корневой папке frontend и backend проектов.

4. Сгенерируйте Prisma схемы в backend проекте
```bash
cd backend
npx prisma generate
npx prisma migrate dev --name -init 
```
5. Запустите оба проекта
```bash
cd frontend
npm run start 
```
```bash
cd backend
npm run start:dev 
```
<!-- markdownlint-disable MD033 MD041 -->
