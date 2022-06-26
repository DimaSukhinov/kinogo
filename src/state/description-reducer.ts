import ironManImg from '../images/ironMan.jpg';
import ironMan3Img from '../images/ironMan3.jpg';
import noTimeToDie from '../images/noTimeToDie.jpg';
import batman from '../images/Batman.jpg';
import theDevilAllTheTime from '../images/TheDevilAllTheTime.jpg';
import theDarkKnight from '../images/TheDarkKnight.jpg';

export type FilmsStateType = {
    id: number
    stars: number
    favourite: boolean
    filmTitle: string
    filmImg: any
    about: string
    year: string
    genre: string
}

type AddFilmToFavoriteActionType = {
    type: 'ADD-TO-FAVOURITE'
    id: number
    favourite: boolean
}

type ActionsType = AddFilmToFavoriteActionType

const initialState = [
    {
        id: 0,
        stars: 5,
        favourite: true,
        filmTitle: 'Iron man',
        filmImg: ironManImg,
        about: `Billionaire inventor Tony Stark is captured by Afghan terrorists who were trying to force him to 
                create weapons of mass destruction. Unbeknownst to his captors, Stark constructs a high-tech 
                cyber-armor that helps him escape. However, upon his return to the United States, he learns that 
                the Board of Directors of the company is plotting, fraught with dire consequences.
                Using his latest invention, Stark tries to solve his company's problems dramatically...`,
        year: '2008',
        genre: 'Fantastic',
    },
    {
        id: 1,
        stars: 4,
        favourite: false,
        filmTitle: 'Batman',
        filmImg: batman,
        about: `After two years of seeking justice on the streets of Gotham for his fellow citizens, Batman becomes the 
                epitome of merciless retribution. When a series of brutal attacks on the elite take place in the city, 
                mysterious clues lead Bruce Wayne to the darkest corners of the underworld, where he meets Catwoman, 
                the Penguin, Carmine Falcone and the Riddler. Now under the gun is Batman himself, who will have to distinguish 
                friend from foe and restore justice in the name of Gotham.`,
        year: '2022',
        genre: 'Detective',
    },
    {
        id: 2,
        stars: 3,
        favourite: true,
        filmTitle: 'No time to die',
        filmImg: noTimeToDie,
        about: `In the recent past, James Bond abruptly decided that it was time to abandon his professional career, 
                which turned out to be filled with a variety of adventures and dangerous situations. Since then, he has led a 
                measured and carefree life, enjoying picturesque paintings in Jamaica. Having thoroughly relaxed, he is thinking 
                of staying in this paradise for a long time. However, the idyll reigning around him begins to disappear when one 
                day his long-time comrade Felix Leiter arrives on the island.`,
        year: '2020',
        genre: 'Thriller',
    },
    {
        id: 3,
        stars: 4,
        favourite: false,
        filmTitle: 'Iron man 3',
        filmImg: ironMan3Img,
        about: `As Stark's world crumbles before his eyes through the fault of unknown adversaries, Tony yearns to 
                find the culprits and draw their points. Caught in a hopeless situation, Stark can only rely on himself 
                and his ingenuity to protect those he cares about. This becomes a real test for the hero, who will have 
                to not only fight an insidious enemy, but also understand himself in order to find the answer to the 
                question that has been troubling him for a long time: what is more important - a person or a suit?`,
        year: '2013',
        genre: 'Action',
    },
    {
        id: 4,
        stars: 3,
        favourite: false,
        filmTitle: 'The devil all the time',
        filmImg: theDevilAllTheTime,
        about: `This dramatic crime thriller is set in southern Ohio and West Virginia from the end of World War II 
                until the 1960s. In The Devil Is Always Here, Willard Russell is a Pacific veteran who tries to save his 
                beautiful wife Charlotte by shedding sacrificial blood. Carl and Sandy Henderson are a pair of serial 
                killers looking for their photogenic victims on the roads of America. Priest Roy hides his friend, the 
                virtuoso guitarist Theodore, who is on the run from the law. The son of Willard and Charlotte grows up 
                as a good person, but cruelty has also settled inside his heart.`,
        year: '2020',
        genre: 'Thriller',
    },
    {
        id: 5,
        stars: 5,
        favourite: true,
        filmTitle: 'The dark knight',
        filmImg: theDarkKnight,
        about: `Bruce Wayne, Gotham's superhero and protector known as Batman, is weighed down by his position as a hero 
                on the other side of the law. He is about to end his secret life, because he understands that the city 
                does not need a law-breaking "Dark Knight" Batman, but a man who fights crime legally, not hiding his 
                face behind a mask. The incorruptible prosecutor Harvey Dent can become such a "White Knight". Bruce has 
                a great interest in him, and he, in turn, is interested in the deeds of Batman. The prosecutor believes 
                that Batman is doing a good deed, and Bruce thinks that the prosecutor will make a great replacement...`,
        year: '2008',
        genre: 'Action',
    },
]

export const descriptionReducer = (state: FilmsStateType[] = initialState, action: ActionsType): FilmsStateType[] => {
    switch (action.type) {
        case 'ADD-TO-FAVOURITE': {
            const films = state[action.id]
            films.favourite = action.favourite
            state[action.id] = {...films}
            return [...state]
        }
        default:
            return state
    }
}

export const addToFavouriteAC = (id: number, favourite: boolean): AddFilmToFavoriteActionType => {
    return {type: 'ADD-TO-FAVOURITE', id, favourite}
}
