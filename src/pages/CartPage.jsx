import './CartPage.css'

export function CartPage(){
    return(
       <div className="philosophyContainer">
        
        <div className='infoWork'>
            <div className='banner-WorldWork'>
                <h1 className='headerWork'>В чем заключается наша с вами работа?🌍</h1>
                <p>Мы соединяем жителей города с местными фермерами</p>
                <p>Поддерживаем локальную экономику и малое предпринимательство</p>
                <p>Сокращаем углеродный след, минимизируя логистику</p>
                <p>Продвигаем идеи осознанного потребления</p>
            </div>
            
           
            
            <div className='planWork'>
            <h1 className='workInfo'>От фермы до вашего стола</h1>
                <p>1. Фермер собирает урожай утром</p>
                <p>2. Мы забираем продукты днем</p>
                <p>3. Сортируем и упаковываем</p>
                <p>4. Доставляем к вам вечером/на следующий день</p>
            </div>
        </div>
        
        <div className='recipient'>
            <div className='banner'>
                <h1 className='getPluses'>ЧТО ВЫ ПОЛУЧАЕТЕ 🎁</h1>
                <div className='pluses'>
                    <h3>Прямые выгоды:</h3>
                    <p>Продукты в 2-3 раза свежее магазинных</p>
                    <p>Полный контроль над происхождением</p>
                    <p>Уникальные сорта, которых нет в супермаркетах</p>
                    <p>Персональные рекомендации по сезону</p>
                </div>
            </div>
        </div>
        
        <div className='principlesContainer'>
            <div className='principlesBanner'>
                <h2 className='principlesTitle'>НАШИ ПРИНЦИПЫ ✅</h2>
                
                <div className='principleItem'>
                    <div className='principleIcon'>🌿</div>
                    <div className='principleContent'>
                        <h4>Экологичность</h4>
                        <p>Биоразлагаемая упаковка</p>
                        <p>Многоразовые сумки</p>
                        <p>Нулевой пластик</p>
                    </div>
                </div>
                
                <div className='principleItem'>
                    <div className='principleIcon'>🏡</div>
                    <div className='principleContent'>
                        <h4>Локальность</h4>
                        <p>Все фермы в радиусе 150 км</p>
                        <p>Знаем каждого фермера лично</p>
                        <p>Регулярные проверки</p>
                    </div>
                </div>
                
                <div className='principleItem'>
                    <div className='principleIcon'>🐄</div>
                    <div className='principleContent'>
                        <h4>Этика</h4>
                        <p>Свободный выпас животных</p>
                        <p>Честная оплата фермерам</p>
                        <p>Сезонность без насилия над природой</p>
                    </div>
                </div>
                
                <div className='principleItem'>
                    <div className='principleIcon'>🎯</div>
                    <div className='principleContent'>
                        <h4>Качество</h4>
                        <p>Без пестицидов и ГМО</p>
                        <p>Натуральное созревание</p>
                        <p>Сертификаты экологичности</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div className='packagingContainer'>
            <div className='packagingBanner'>
                <h2 className='packagingTitle'>НАША ЭКО-УПАКОВКА 📦</h2>
                
                <div className='packagingItem'>
                    <div className='packagingIcon'>📦</div>
                    <div className='packagingContent'>
                        <h4>Деревянные ящики</h4>
                        <p>Многоразовые</p>
                        <p>Экологически чистые</p>
                        <p>Прочные и надежные</p>
                    </div>
                </div>
                
                <div className='packagingItem'>
                    <div className='packagingIcon'>🌿</div>
                    <div className='packagingContent'>
                        <h4>Восковые салфетки</h4>
                        <p>Вместо пластиковой пленки</p>
                        <p>Биоразлагаемые</p>
                        <p>Многоразового использования</p>
                    </div>
                </div>
                
                <div className='packagingItem'>
                    <div className='packagingIcon'>🛍️</div>
                    <div className='packagingContent'>
                        <h4>Хлопковые сумки</h4>
                        <p>Прочные и стильные</p>
                        <p>Многоразовые</p>
                        <p>Легко стираются</p>
                    </div>
                </div>
                
                <div className='packagingItem'>
                    <div className='packagingIcon'>♻️</div>
                    <div className='packagingContent'>
                        <h4>Иконки упаковки</h4>
                        <p>Бумажные пакеты с соевыми чернилами</p>
                        <p>Стеклянные банки для консервации</p>
                        <p>Картонные коробки с минимальным дизайном</p>
                    </div>
                </div>
            </div>
        </div>
       </div>
    )
}