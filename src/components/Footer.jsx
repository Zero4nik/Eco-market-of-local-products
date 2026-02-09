import './Footer.css'
export function Footer(){
    const Year = new Date().getFullYear()
    return(
        <footer className="footer-info">
            <div className="footer-container">
    <div className="footer-section">
        <h3>Контакты</h3>
        <p>📞 +7 (495) 123-45-67</p>
        <p>✉️ hello@ecomarket-local.ru</p>
        <p>🕒 Ежедневно 9:00-21:00</p>
    </div>

    <div className="footer-section">
        <h3>Адрес</h3>
        <p>📍 Москва, ул. Эко-Логичная, 15</p>
        <p>м. "Фермерская"</p>
        <p>Самовывоз и доставка</p>
    </div>

    <div className="footer-bottom">
        <p className='kopirate'>© {Year} Эко-Маркет "Местные Продукты". Все права защищены.</p>
    </div>
</div> 
            
        </footer>
    )
}

export default Footer