import { Fragment } from 'react';
import Heading from '../heading';
// import Star from './rat.png'
import Box from '../box';
import './index.css';


export default function Guests({ list }) {
    return (
        <div className='guests__block'>
            <Heading>Відгуки клієнтів</Heading>

            <div className='guests__list'>
                {list.map(({ id, ...rest }) => (
                    <Fragment key={id}>
                        <Item {...rest} />
                    </Fragment>
                ))}
            </div>
        </div>
    );
}

function Item({ guestName, rating = 0, review }) {
    return (
        <Box shadow className='guests'>
            <div className='rat'>
                <span className='guests__name'>{guestName}</span>

                <span className='guests__rat'>Rating {rating}</span>
            </div>
            <span className='guests__com'>{review}</span>
        </Box>
    );
}