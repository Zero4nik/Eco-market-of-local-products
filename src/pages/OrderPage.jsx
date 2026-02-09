import { useState } from 'react'
import './OrderPage.css'

export function OrderPage() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    numberPhone: ''
  })

  const [validationErrors, setValidationErrors] = useState({})

  const handleChange = function(event) {
    const fieldName = event.target.name
    const newValue = event.target.value

    // Обновляем данные формы
    const updatedForm = {
      ...formData,
      [fieldName]: newValue
    }

    // Очищаем ошибку для этого поля
    const updatedErrors = { ...validationErrors }
    delete updatedErrors[fieldName]

    setValidationErrors(updatedErrors)
    setFormData(updatedForm)
  }

  const handleSubmit = function(event) {
    event.preventDefault()

    const errors = {}

    // Валидация имени
    if (!formData.name.trim()) {
      errors.name = 'Имя обязательно'
    } else if (formData.name.length < 2) {
      errors.name = 'Минимум 2 символа'
    }

    // Валидация фамилии
    if (!formData.surname.trim()) {
      errors.surname = 'Фамилия обязательна'
    } else if (formData.surname.length < 2) {
      errors.surname = 'Минимум 2 символа'
    }

    // Валидация email
    if (!formData.email.trim()) {
      errors.email = 'Email обязателен'
    } else if (!formData.email.includes('@')) {
      errors.email = 'Некорректный email'
    }

    // Валидация телефона
    if (!formData.numberPhone.trim()) {
      errors.numberPhone = 'Номер телефона обязателен'
    } else if (formData.numberPhone.replace(/\D/g, '').length < 10) {
      errors.numberPhone = 'Минимум 10 цифр'
    } else if (/[a-zA-Zа-яА-ЯёЁ]/.test(formData.numberPhone)) {
  errors.numberPhone = 'Номер не должен содержать буквы'
}

    // Если есть ошибки - показываем их
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors)
      console.log('Ошибки формы:', errors)
      alert('Исправьте ошибки в форме')
      return
    }

    // Если все ок - отправляем данные
    alert("Регистрация прошла успешно")

    // Очищаем форму
    setFormData({
      name: '',
      surname: '',
      email: '',
      numberPhone: '',
      

    })
    setValidationErrors({})
  }

  return (
    <div className='UserContainer'>
      <header className='UserHeader'>Оформление заказа</header>
      <div className='contactInfoHeader'>Контактные данные</div>
      
      <form action="#" onSubmit={handleSubmit}>
        {/* Поле имени */}
        <div className="UserInfo">
          <input 
            type="text" 
            name="name"
            className={`user ${validationErrors.name ? 'error' : ''}`}
            placeholder="Ваше имя...👤" 
            value={formData.name}
            onChange={handleChange}
          />
          {validationErrors.name && (
            <div className="error-message">{validationErrors.name}</div>
          )}
        </div>
        
        {/* Поле фамилии */}
        <div className="UserInfo">
          <input 
            type="text" 
            name="surname"
            className={`user ${validationErrors.surname ? 'error' : ''}`}
            placeholder="Ваша фамилия...👤"
            value={formData.surname}
            onChange={handleChange}
          />
          {validationErrors.surname && (
            <div className="error-message">{validationErrors.surname}</div>
          )}
        </div>
        
        {/* Поле email */}
        <div className="UserEmail"> 
          <input 
            type="email" 
            name="email"
            className={`email ${validationErrors.email ? 'error' : ''}`}
            placeholder="Email...📧"
            value={formData.email}
            onChange={handleChange}
          />
          {validationErrors.email && (
            <div className="error-message">{validationErrors.email}</div>
          )}
        </div>
        
        {/* Поле телефона */}
        <div className="UserPhone">
          <input 
            type="tel" 
            name="numberPhone"
            className={`phone ${validationErrors.numberPhone ? 'error' : ''}`}
            placeholder="Номер телефона📱"
            value={formData.numberPhone}
            onChange={handleChange}
          />
          {validationErrors.numberPhone && (
            <div className="error-message">{validationErrors.numberPhone}</div>
          )}
        </div>
        
        {/* Чекбокс (пока без функционала) */}
        <div className="AnotherUser">
          <h5 className="newUser">другое лицо</h5>
          <input type="checkbox" />
        </div>
        
        {/* Кнопка отправки */}
        <div className="button-container">
          <button className="nextUserInfo" type='submit'>
            Проверить
          </button>
        </div>
      </form>
    </div>
  )
}