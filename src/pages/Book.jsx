import {useParams} from "react-router-dom";
import get_books from "../db.js";


function Book() {
    let { id } = useParams();

    const book = get_books().find(book => book.id === parseInt(id));

    return (
        <div>
            <div className="container">
                <div className="item">
                    <img
                        src={`/books/${id}/avatar.jpg`}
                        width="500"
                        height="700"
                        alt={book.title}
                        style={{borderRadius: "15px", boxShadow: "0 0 3px rgba(0, 0, 0, 0.5)"}}
                    />
                </div>
                <div className="item">
                    <h1>{book.title}</h1>
                    <h2>{book.author}</h2>
                    <p>{book.description}</p>
                    <div className="container">
                        <div className="bookTag greenTag">{book.coverType}</div>
                        {book.isWebVersion ? <div className="bookTag orangeTag">Веб версия</div> : null}
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Book;