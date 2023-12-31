'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const gamesData = [
      {
        title: 'Гигамон',
        description:
          'Вы когда-нибудь слышали о гигамонах? Одноимённая игра на развитие памяти легко познакомит игроков от пяти лет с этими добрыми воплощениями стихий. Гигамоны помогают юным настольным магам сдать экзамен в волшебной школе и стать Заклинателями Элемонов. Правила призыва этих громадных, но безобидных и очаровательных чудищ просты и напоминают знакомую многим с детства мемори. Только вот обычным поиском парных картинок тут никто не отделается! Учитесь новому, будьте самыми внимательными и быстрыми стратегами, чтобы заработать звание лучшего волшебника и друга гигамонов.',
        image: '/Гигамон.jpeg',
        player_count: 4,
      },
      {
        title: 'ЧПОК',
        description:
          'Что такое ЧПОК? Это смесь чёрного юмора, развратных слов, пошлых тем и похабных шуток, которые ваши друзья будут припоминать весь следующий год. Алкоголь не обязателен, но может усилить удовольствие. Главное — это отринуть стыд и смело составить из букв «Ж», «О», «П», «А» слово «ВЕЧНОСТЬ».',
        image: '/Чпок.jpeg',
        player_count: 8,
      },
      {
        title: 'Взрывные Котята',
        description:
          'Эта быстрая карточная игра, Взрывные Котята, ворвалась на зарубежный рынок настольных игр в 2015 году, покорила Kickstarter, собрав больше 8 миллионов долларов, и получила номинацию лучшей игры для вечеринок. Простой и динамичный хит для маленькой компании с милыми котятами, крутыми иллюстрациями и простым игровым процессом.',
        image: '/Взрывные_Котята.jpeg',
        player_count: 5,
      },
      {
        title: 'Королевский Бирпонг',
        description:
          '«У моей жены был день рождения, и она попросила меня организовать вечеринку. Решили, что главным развлечением будет Бирпонг. Но гостей было многовато — аж пятнадцать человек. И тогда родился Королевский Бирпонг! Идеальный для больших компаний. День рождения прошёл на ура, а уже через неделю мы сыграли в него в офисе и решили издавать! Почти год мы его дорабатывали. И вот настал день, когда моя домашняя разработка превратилась в игру, которая будет радовать не пятнадцать человек на одном празднике, а самые разные компании по всей стране.',
        image: '/Королевский_Бирпонг.jpeg',
        player_count: 20,
      },
      {
        title: 'Имаджинариум',
        description:
          'Имаджинариум — это настольная игра в ассоциации, отечественный аналог легендарного Диксита. Она оформлена российскими художниками и иллюстраторами и пользуется популярностью на отечественном рынке.',
        image: '/Имаджинариум.jpeg',
        player_count: 7,
      },
      {
        title: 'Страдающее Средневековье',
        description:
          'Можно было бы назвать настольную игру Страдающее Средневековье градостроительной стратегией, если бы не взрывы хохота, разрушающие эту стройную теорию. Перед вами карточная игра с забавными и узнаваемым мемами из одноименного паблика, которая учит нас помнить историю и с легкостью переносить жизненные тяготы в любой век.',
        image: '/Страдающее_Средневековье.jpeg',
        player_count: 6,
      },
      {
        title: 'Манчкин',
        description:
          '«Мочи Монстров! Хапай Сокровища! Подставляй Друзей!» – вот три веселых лозунга, под которыми проходит эта «милая» «душевная» игра-легенда, которая начиналась как пародия на популярнейшую ролевую игру Dungeons&Dragons и породила десятки новых карикатурных шедевров. Навреди ближнему своему, и оставим упрёки за пределами подземелья :)',
        image: '/Манчкин.jpeg',
        player_count: 6,
      },
      {
        title: 'Ётта',
        description:
          'Ваш мозг истосковался по остренькой интеллектуальной пище и уже обшаривает просторы интернета в поисках какого-нибудь лакомого кусочка? Обратите внимание на эту крошку, не пожалеете: ведь Ётта устроит термоядерный взрыв у вас в голове!',
        image: '/Етта.jpeg',
        player_count: 4,
      },
      {
        title: 'Неудержимые Единорожки',
        description:
          'Ваша цель очень проста — собрать у себя наибольшее число единорогов. Вот только их можно красть, уничтожать, приносить в жертву... В общем, заскучать в процессе игры вы не рискуете. А если захочется добавить еще больше "взрослого" веселья, то можно обратиться к специальным блокам правил — на раздевание или с алкоголем.',
        image: '/Неудержимые_Единорожки.jpeg',
        player_count: 8,
      },
      {
        title: 'Нечто',
        description:
          'Это вселяющая ужас и сомнения психологическая игра, где вам предстоит выяснить, в ком из ваших друзей прячется Нечто, пока оно не приобрело единомышленников и не заразило всю команду. Вперёд, господа подозрительные археологи: пора очистить помещение от этой дряни!',
        image: '/Нечто.jpeg',
        player_count: 12,
      },
      {
        title: 'Fluxx',
        description:
          'Fluxx — это настольная игра, в которой нет правил! Или это игра, в которой слишком много правил? Так сразу и не поймешь, ведь условия меняются каждую секунду, и никогда не знаешь, что принесет тебе следующий ход — моментальную победу или трагичное поражение?',
        image: '/Fluxx.jpeg',
        player_count: 3,
      },
    ];
    const games = gamesData.map((game) => ({
      ...game,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Games', games);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Games');
  },
};
