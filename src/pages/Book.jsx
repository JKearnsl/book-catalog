import {useParams} from "react-router-dom";
import get_books from "../db.js";
import Payment from "../widgets/payment.jsx";

function Book() {
    let { id } = useParams();

    const book = get_books().find(book => book.id === parseInt(id));

    const handleButtonClick = () => {
        let component = document.getElementById("paymentDialog");
        let dialog = component.querySelector("md-dialog");
        dialog.open = !dialog.open;
    };

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
                    <p>Цена: {book.price} y.e.</p>
                    <div className="container">
                        <div className="bookTag greenTag">{book.coverType}</div>
                        {book.isWebVersion ? <div className="bookTag orangeTag">Веб версия</div> : null}
                    </div>
                    <br/>
                    <md-filled-button onClick={handleButtonClick}>Купить</md-filled-button>
                </div>
            </div>
            <Payment amount={book.price} />
        </div>
    )
}

export default Book;