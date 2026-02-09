import './ProductCard.css';
import { useState } from 'react';

export function ProductCard({ product }) {
    const [Count, setCount] = useState(0);
    const Validate = function(){
        const error= []
        if(product.price < 0){
            error.push("Вы не можете взять отрицательное количевство товаров")
        }
        return error
    }
    const handleSubmit = function(event){
        event.preventDefault()
        const error = Validate()
        if(error.length > 0){
            alert(error.join('\n'))
            return
        }
        if (Count > 0){
            alert(`Добавлено в корзину: ${product.name}(${Count}кг)`)

            setCount(0)
        }else{
            alert("Выберите товар")
        }
    }
    const handleIncrease = function() {
        setCount(prevCount => prevCount + 1);
    };
    
    const handleDecrease = function() {
        setCount(prevCount => prevCount > 0 ? prevCount - 1 : 0);
    };
    return (
        <div className='ProductCardStyle'>
            <img 
                className='CardImg' 
                src={product.imageSrc} 
                alt={product.name}
                onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = 'https://via.placeholder.com/300x200?text=Нет+изображения';
                }}
            />
            <div className="product-info">
                <h3 className='CardName'>{product.name}</h3>
                <div className="product-meta">
                </div>
                <p className='CardPrice'>{product.price} ₽ за кг</p>
                <div className="product-badges">
                    {product.isNew && <span className="new-badge">Новинка</span>}
                    {!product.stock && <span className="out-of-stock">Нет в наличии</span>}
                </div>
                <button className='ProductCardBtn' onClick={handleIncrease}>Добавить</button>
                <button className='ProductCardBtn' onClick={handleDecrease}>Убрать</button>
                <button className='ProductCardBtn' onClick={handleSubmit}>В корзину({Count})</button>
            </div>
        </div>
    )}