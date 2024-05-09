import "./home.css";
import get_books from "../db.js";


function Home() {

    const topBooks = get_books().sort((a, b) => b.views - a.views).slice(0, 3);

    return (
        <div>
            <div className="container">
                <div className="item supa1">
                    <h1 className="md-typescale-display-medium">Бестселлер века</h1>
                    <p>Книга, которую стоит прочитать каждому</p>
                </div>
                <div className="item supa2"></div>
            </div>
            <div className="container">
                <div className="item">
                    <h1 className="md-typescale-display-medium">Популярные книги</h1>
                    <md-list>
                        {topBooks.map((book, index) => {
                            return (
                                <md-list-item key={book.id} href={"/book/" + book.id}>
                                    <div slot="headline">{book.title}</div>
                                    <div slot="supporting-text">
                                        <div className="container">
                                            <div className="bookTag greenTag">{book.coverType}</div>
                                            {book.isWebVersion ? <div className="bookTag orangeTag">Веб версия</div> : null}
                                        </div>
                                    </div>
                                    <div slot="supporting-text">{book.description}</div>
                                    <div slot="supporting-text">{book.author}</div>
                                    <div slot="trailing-supporting-text">
                                        {book.views}
                                    </div>
                                    <md-icon slot="end">visibility</md-icon>
                                    <img slot="start" src={book.image} alt={`book${index}`}/>
                                </md-list-item>
                            );
                        })}
                    </md-list>
                </div>

            </div>

        </div>
    );
}

export default Home;