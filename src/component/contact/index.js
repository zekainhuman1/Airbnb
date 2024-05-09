import './index.css';

export default function Contact({
    name,
    title,
    image,
    response_rate,
    response_time,
    info,
    phone,
}) {
    return (
        <div className='title'>

            <div className='title__sub-block'>
                <img className='title__ava' src={image} alt={name} height={32} />
                <div className='title'>
                    <h1 className='title__text'>{title}</h1>
                    <div className='title__sub-block'>
                        <span className='title__sub-value'>Рейтинг: {response_rate} </span>
                        <span className='title__sub-value'>Відповідає: {response_time}</span>
                        <span className='title__sub-value'>Тел: {phone}</span>
                    </div>
                </div>
            </div>
            <p className='title__hh'>"{info}"</p>


        </div>
    );
}