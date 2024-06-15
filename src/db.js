

function get_books() {
  return [
      {
          id: 1,
          title: "Высоконагруженные приложения",
          description: "Программирование, масштабирование, поддержка",
          author: "Мартин Клеппман",
          coverType: "Твердый переплет",
          isWebVersion: false,
          views: 89234,
          price: 99.00,
          image: "/books/1/avatar.jpg"
      },
      {
          id: 2,
          title: "Чистая архитектура",
          description: "Искусство разработки программного обеспечения",
          author: "Роберт Мартин",
          coverType: "Твердый переплет",
          isWebVersion: true,
          views: 17231,
          price: 89.00,
          image: "/books/2/avatar.jpg"
      },
      {
          id: 3,
          title: "Паттерны объектно-ориентированного проектирования",
          description: "Юбилейное издание легендарной книги банды четырех",
          author: "Гамма Э., Хелм Р., Джонсон Р., Влиссидес Д.",
          coverType: "Мягкая обложка",
          isWebVersion: false,
          views: 2231,
          price: 29.00,
          image: "/books/3/avatar.jpg"
      },
      {
          id: 4,
          title: "Микросервисы и API",
          description: "Руководство",
          author: "Перальта Хосе Антонио Аро",
          coverType: "Мягкая обложка",
          isWebVersion: true,
          views: 1231,
          price: 49.00,
          image: "/books/4/avatar.jpg"
      },
      {
          id: 5,
          title: "Занимательное программирование. Базы данных.",
          description: "Манга",
          author: "Такахаши М.",
          coverType: "Мягкая обложка",
          isWebVersion: true ,
          views: 891,
          price: 19.00,
          image: "/books/5/avatar.jpg"
      },
  ];
}

export default get_books;