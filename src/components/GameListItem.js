import { Rating } from 'react-simple-star-rating'

function GameListItem({ image, name, genres, slug, rating }) {

    return <div>
        <div className="gamelist-item__img-box">
            <img src={image} alt="game-image" className="gamelist-item__img"></img>
        </div>

        <div className='gamelist-item__text-box'>
            <div className="gamelist-item__name u-margin-bottom-small">{name}</div>
            <div className='gamelist-item__bottom'>
                <div className="gamelist-item__rating">
                    <Rating
                        size={30}
                        transition
                        readonly
                        iconsCount={5}
                        initialValue={rating}
                        allowFraction
                        fillColor='#55c57a'
                    />
                    <div>{rating}</div>
                </div>
                <div className='gamelist-item__genre'>{genres.map((genre) => {
                    return ' ' + genre.name + ' '
                })}</div>
            </div>
        </div>
    </div>
}

export default GameListItem;