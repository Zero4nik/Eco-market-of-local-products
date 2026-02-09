import { Link } from 'react-router-dom'
import './HomePage.css'
export function HomePage(){
    return(
        <div className="HomePageInfo">
            <div className="HomeBanner">
                
                <header className='whatMe'>Почему стоит выбрать наш эко-маркет</header>
                <div className='Advantage'>
                    <div className='AllBanner'>
<div className='Advantage'>
    <div className='AllBanner'>
        <div className='bannerAdvantage'>
            <h3 className='bannerHeader'>🚜 Прямые поставки с ферм</h3>
            <p>Товары поступают напрямую от местных фермеров, минуя склады и посредников</p>
        </div>
        
        <div className='bannerAdvantage'>
            <h3 className='bannerHeader'>🌱 Экологичная упаковка</h3>
            <p>Используем биоразлагаемые материалы и многоразовую тару</p>
        </div>
        
        <div className='bannerAdvantage'>
            <h3 className='bannerHeader'>⚡ Быстрая доставка</h3>
            <p>Доставляем заказы в течение 2-4 часов после сбора</p>
        </div>
        
        <div className='bannerAdvantage'>
            <h3 className='bannerHeader'>💰 Доступные цены</h3>
            <p>Цены ниже магазинных на 15-30% благодаря отсутствию посредников</p>
        </div>
    </div>
</div>
                    </div>
                </div>

                    
                <div className='populationBanner'>
                        <h1 className='populationProduct'>Популярные товары</h1>
                        <div>

                        </div>

                    <Link to='/CatalogPage'>
                    <button  className='catalogyBtn'>Смотреть каталог</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}