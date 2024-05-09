import "./catalog.css";
import {useEffect, useRef, useState} from "react";
import get_books from "../db.js";



function Catalog() {

    const [books, setBooks] = useState(get_books());

    const SortSelectElement = useRef(null);
    useEffect(() => {
        const currentElement = SortSelectElement.current;

        if (currentElement) {
            currentElement.addEventListener('change', function() {
                const selected = currentElement.selectedIndex;
                let sortedBooks = [...books];

                if (selected === 1) {
                    sortedBooks.sort((a, b) => a.views - b.views);
                } else {
                    sortedBooks.sort((a, b) => b.views - a.views);
                }
                setBooks(sortedBooks);
            });
        }
    }, []);


    const ChipsElement = useRef(null);

    useEffect(() => {
        const currentElement = ChipsElement.current;

        if (currentElement) {
            currentElement.addEventListener('click', function() {
                let chips = currentElement.chips.filter(chip => chip.selected).map(
                    chip => chip.label
                )

                let newBooks = books;

                if (chips.length !== 0) {
                    newBooks = newBooks.filter(book => {
                        return chips.includes(book.coverType) || chips.includes(book.isWebVersion ? "Веб версия" : "Книга")
                    });
                }

                let selected = SortSelectElement.current.selectedIndex;
                if (selected === 1) {
                    newBooks.sort((a, b) => a.views - b.views);
                } else {
                    newBooks.sort((a, b) => b.views - a.views);
                }
                setBooks(newBooks)
            });
        }
    }, []);


    return (
        <div>
            <div className="container">
                <div className="item container headside">
                    <div className="item">
                        <md-outlined-text-field placeholder="Поиск по книгам">
                            <md-icon slot="leading-icon">search</md-icon>
                        </md-outlined-text-field>
                    </div>
                    <div className="item">
                        <md-chip-set ref={ChipsElement}>
                            <md-filter-chip label="Твердый переплет"></md-filter-chip>
                            <md-filter-chip label="Веб версия"></md-filter-chip>
                            <md-filter-chip label="Мягкая обложка"></md-filter-chip>
                        </md-chip-set>
                    </div>
                    <div className="item">
                        <md-outlined-select ref={SortSelectElement}>
                            <md-select-option selected value="popular">
                                <div slot="headline">Популярное</div>
                            </md-select-option>
                            <md-select-option selected value="notPopular">
                                <div slot="headline">Не популярное</div>
                            </md-select-option>
                        </md-outlined-select>
                    </div>
                </div>
            </div>
            <br/>
            <div className="container">
                <div className="item">
                <md-list>
                    {books.map((book, index) => {
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
    )
}

export default Catalog;