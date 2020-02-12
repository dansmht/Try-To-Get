import { CHANGE_LANGUAGE } from '../actions/languageActions'

const language = localStorage.getItem('language') || 'en'

const initialState = {
  language,
  menuEn: {
    startGame: 'Start Game',
    rules: 'Rules',
    settings: 'Settings',
    bestScores: 'Best Scores',
    about: 'About',
  },
  menuRu: {
    startGame: 'Начать игру',
    rules: 'Правила',
    settings: 'Настройки',
    bestScores: 'Рекорды',
    about: 'Обо мне',
  },
  gameEn: {
    menu: 'Menu',
    newGame: 'New Game',
    gameOver: 'Game Over',
    yourScore: 'Your score is:',
  },
  gameRu: {
    menu: 'Меню',
    newGame: 'Новая игра',
    gameOver: 'Игра закончена',
    yourScore: 'Ваш счёт:',
  },
  settingsEn: {
    menu: 'Menu',
    title: 'Settings',
    lang: 'Language',
    snow: 'Snow',
    snowInGame: 'Snow in Game',
    fieldSize: 'Field size',
  },
  settingsRu: {
    menu: 'Меню',
    title: 'Настройки',
    lang: 'Язык',
    snow: 'Снег',
    snowInGame: 'Снег в игре',
    fieldSize: 'Размер поля',
  },
  rulesEn: {
    menu: 'Menu',
    title: 'Rules',
    paragraphs: [
      'In the beginning press F11, if you want your best scores to be added to the best scores, you should login / register in the Best Scores tab',
      'Let\'s get to the point. There is a field with a certain number of cells. There is also a theme that is randomly selected for which 5 specific colors are selected. And the cells will appear one by one of any of the given colors, you will need to click on them and earn points, you are given only 60 seconds',
      'If the desired cell appears with the same background color, you can change the background color by clicking on a specific number with the background or using keys 1-5 on your keyboard',
      'Can you beat my record? :)',
    ],
  },
  rulesRu: {
    menu: 'Меню',
    title: 'Правила',
    paragraphs: [
      'Для атмосферности нажмите F11. Если хочешь чтобы твои лучшие очки сохранялись, тебе надо войти / зарегистрироваться во вкладке Рекорды',
      'И так к делу. Есть поле с определённым количеством ячеек. Также тема с пятью определёнными цветами которая рандомно выбирается. И будут появлятся ячейки одна за одной любого цвета из данных цветов, тебе нужно на них нажимать и зарабатывать очки, у тебя есть всего лишь 60 секунд',
      'Если нужная ячейка появилась одного цвета с цветом фона, ты можешь поменять цвет фона нажатием на нужную цифру с нужным цветом или используя клавиши 1-5 на клавиатуре',
      'Сможешь побить мой рекорд? :)',
    ],
  },
  bestScoresEn: {
    menu: 'Menu',
    title: 'Best Scores',
    username: 'Username',
    score: 'Score',
    size: 'Size',
    auth: 'Auth',
  },
  bestScoresRu: {
    menu: 'Меню',
    title: 'Рекорды',
    username: 'Имя',
    score: 'Очки',
    size: 'Размер',
    auth: 'Войти',
  },
  authFormEn: {
    login: 'Login',
    register: 'register',
    displayName: 'Display Name',
    email: 'Email',
    password: 'Password',
    repeatPassword: 'Repeat Password',
  },
  authFormRu: {
    login: 'Логин',
    register: 'Регистрация',
    displayName: 'Отображаемое имя',
    email: 'Email',
    password: 'Пароль',
    repeatPassword: 'Поворите пароль',
  },
  aboutEn: {
    menu: 'Menu',
    title: 'About',
    paragraphs: [
      'Who am I?',
      'I am an ordinary third year student. I live in Gomel, Belarus. I am engaged in frontend development.',
      'Why did I make such a game?',
      'Because there is already a lot of everything on the Internet, and I wanted to make something of my own. And one day the idea with this game flew into my head and I began to do. Much more can be developed in this game and it\'s cool. Also this game is for my portfolio of work and training frontend development skills.',
      'My email: dansmht16@gmail.com - ask questions',
    ],
  },
  aboutRu: {
    menu: 'Меню',
    title: 'Обо мне',
    paragraphs: [
      'Кто я?',
      'Я обычный студент третьего курса. Живу в Гомеле (Беларусь). Занимаюсь Frontend разработкой.',
      'Почему я сделал эту игру?',
      'Потому что в интернете уже очень много всего есть и я захотел сделать что-то уникальное, а главное своё. И в один день идея с этой игрой залетела мне в голову и я начал делать. Ещё много всего можно добавить в эту игру и это классно. Также эта работа для моего портфолио и тренировки навыков Frontend разработки',
      'Моя почта: dansmht16@gmail.com - Задавайте вопросы',
    ],
  },
  page404En: {
    menu: 'Go back home',
    title: 'Oops! Nothing was found.',
    description: 'We can\'t find the page you\'re looking for.',
  },
  page404Ru: {
    menu: 'Вернуться на главную',
    title: 'Уупс! Страница не найдена.',
    description: 'Мы не нашли страницу которую вы искали.',
  },
}

export const languageReducer = (state = initialState, { type }) => {
  if (type === CHANGE_LANGUAGE) {
    const language = state.language === 'en' ? 'ru' : 'en'
    localStorage.setItem('language', language)
    return {
      ...state,
      language,
    }
  } else {
    return state
  }
}
