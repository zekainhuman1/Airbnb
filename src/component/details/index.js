import Box from '../box'
import ListItem from '../list-item';
import Heading from '../heading'
import bedIc from './beds.svg'
import bedroomIc from './bedroom.svg'
import guestIc from './guest.svg'
import bathIc from './baths.svg'
import './index.css';

export default function Details({ title, property_details }) {
    return (
        <Box shadow className='details__block'>
            <Heading border>{title}</Heading>
            <List {...property_details} />
        </Box>
    );
}
function List({ guests = 0, bedrooms = 0, beds = 0, baths = 0 }) {
    return (
        <ul className="details__list">
            <ListItem imageSrc={guestIc}>
                <span>{guests}</span>
                <span>- Гості</span>
            </ListItem>
            <ListItem imageSrc={bedroomIc}>
                <span>{bedrooms}</span>
                <span>- спальня</span>
            </ListItem>
            <ListItem imageSrc={bedIc}>
                <span>{beds}</span>
                <span>- ліжко</span>
            </ListItem>
            <ListItem imageSrc={bathIc}>
                <span>{baths}</span>
                <span>- ванна кімната</span>
            </ListItem>
        </ul>
    );
}
