import { createStore } from 'redux';

const reducer = (( state = { books: [] }, action ) => {
    
    switch( action.type ){
        case "POST_BOOK":
            //let books = state.books.concat( action.payload );
            return { books:[ ...state.books, ...action.payload  ]};
            break;
        
        case "DELETE_BOOK":
            const currentBookToDelete = [ ...state.books ]
            const indexToDelete = currentBookToDelete.findIndex(( book ) => {
                return book.id === action.payload.id;
            })

            return {
                books: [...currentBookToDelete.slice( 0, indexToDelete ), ...currentBookToDelete.slice( indexToDelete + 1 )]
            }
            break;

        case "UPDATE_BOOK":
            const currentBookToUpdate = [ ...state.books ];
            const indexToUpdate = currentBookToUpdate.findIndex(( book ) => {
                return book.id === action.payload.id;
            })

            const newBookToUpdate = {
                ...currentBookToUpdate[ indexToUpdate ],
                title: action.payload.title
            }

            return {
                books: [...currentBookToUpdate.slice(0, indexToUpdate ), newBookToUpdate, ...currentBookToUpdate.slice( indexToUpdate + 1 )]
            }

            break;
    }
    return state;
})

const store = createStore(
    reducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
    console.log( 'current state is : ' + store.getState()[1].price );
});

store.dispatch({
    type: "POST_BOOK",
    payload: [
        {
            id: 1,
            title: 'This is the title of the book',
            description: 'This is the book description',
            price: 33.33
        },
        {
            id: 2,
            title: 'This is the title of the second book',
            description: 'This is the second book description',
            price: 50
        }
    ]
});

store.dispatch({
    type: "POST_BOOK",
    payload: [
        {
            id: 1,
            title: 'This is the title of the book',
            description: 'This is the book description',
            price: 33.33
        },
        {
            id: 2,
            title: 'This is the title of the second book',
            description: 'This is the second book description',
            price: 50
        }
    ]
}); 

//DELETE a BOOK
store.dispatch({
    type: "DELETE_BOOK",
    payload: { id: 1 }
}); 

//UPDATE a book
store.dispatch({
    type: "UPDATE_BOOK",
    payload: { 
        id: 1,
        title: 'Learn react in 24h' 
    }
}); 