import './CatalogPage.css';
import { ProductCard } from '../components/ProductCard';
import greenApples from '../assets/green-apples.webp';
import watermelon from '../assets/watermelon.webp';
import oranges from '../assets/oranges.webp';
import mixedBerries from '../assets/mixed-berries.avif';
import strawberry from '../assets/strawberry.avif';
import tangerines from '../assets/tangerines.webp';
import cucumbers from '../assets/cucumbers.avif';
import pomodoro from '../assets/pomodoro.webp';
import redApples from '../assets/red-apples.webp';
import plums from '../assets/plums.webp';
import bakladjan from '../assets/bakladjan.webp';
import dinya from '../assets/dinya.webp';
import kapusta from '../assets/kapusta.webp';
import kukuruza from '../assets/kukuruza.jpg'; 
import patison from '../assets/patison.jpg';
import tikva from '../assets/tikva.jpg';
import visna from '../assets/visna.webp';
import { useState } from 'react';

const productImages = {
  'green-apples': greenApples,
  'watermelon': watermelon,
  'oranges': oranges,
  'mixed-berries': mixedBerries,
  'strawberry': strawberry,
  'tangerines': tangerines,
  'cucumbers': cucumbers,
  'pomodoro': pomodoro,
  'red-apples': redApples,
  'plums': plums,
  'bakladjan': bakladjan,
  'dinya': dinya,
  'kapusta': kapusta,
  'kukuruza': kukuruza,
  'patison': patison,
  'tikva': tikva,
  'visna': visna
};

const getProductImage = (imageName) => {
  return productImages[imageName] || '';
};

export function CatalogPage() {
  const MassiveProduct = [
    { id: 1, name: "Зеленые яблоки", price: 95, category: "Фрукты", season: "Осень", image: "green-apples", stock: true, isNew: false },
    { id: 2, name: "Арбуз", price: 250, category: "Ягоды", season: "Лето", image: "watermelon", stock: true, isNew: true },
    { id: 3, name: "Апельсины", price: 120, category: "Фрукты", season: "Зима", image: "oranges", stock: true, isNew: false },
    { id: 4, name: "Ягоды (смесь)", price: 180, category: "Ягоды", season: "Лето", image: "mixed-berries", stock: true, isNew: true },
    { id: 5, name: "Клубника", price: 210, category: "Ягоды", season: "Лето", image: "strawberry", stock: false, isNew: false },
    { id: 6, name: "Мандарины", price: 110, category: "Фрукты", season: "Зима", image: "tangerines", stock: true, isNew: true },
    { id: 7, name: "Огурцы", price: 75, category: "Овощи", season: "Лето", image: "cucumbers", stock: true, isNew: false },
    { id: 8, name: "Помидоры", price: 130, category: "Овощи", season: "Лето", image: "pomodoro", stock: true, isNew: false },
    { id: 9, name: "Красные яблоки", price: 90, category: "Фрукты", season: "Осень", image: "red-apples", stock: true, isNew: false },
    { id: 10, name: "Сливы", price: 140, category: "Фрукты", season: "Лето", image: "plums", stock: true, isNew: true },
    { id: 11, name: "Баклажаны", price: 160, category: "Овощи", season: "Лето", image: "bakladjan", stock: true, isNew: false },
  { id: 12, name: "Дыня", price: 220, category: "Фрукты", season: "Лето", image: "dinya", stock: true, isNew: true },
  { id: 14, name: "Капуста", price: 65, category: "Овощи", season: "Осень", image: "kapusta", stock: true, isNew: true },
  { id: 15, name: "Кукуруза", price: 70, category: "Овощи", season: "Лето", image: "kukuruza", stock: true, isNew: false },
  { id: 16, name: "Патиссоны", price: 120, category: "Овощи", season: "Лето", image: "patison", stock: true, isNew: true },
  { id: 17, name: "Тыква", price: 85, category: "Овощи", season: "Осень", image: "tikva", stock: true, isNew: true },
  { id: 18, name: "Вишня", price: 190, category: "Ягоды", season: "Лето", image: "visna", stock: true, isNew: false }
];
  
  const [search,setSearch] = useState('')
  const [sortOption,setSortOption] = useState('name-asc')
  const [selectedCategories,setSelectedCategories] = useState([])
  const [ selectedSeason,setSelectedSeason] = useState([])
  const handleSearch = function(event){
      setSearch(event.target.value)
  }
  const handleSortChange = function(event){
    setSortOption(event.target.value)
  }
  const allSeason = MassiveProduct.map(product => product.season)
  const uniqueSeason = [...new Set(allSeason)]

  const seasonToggle= function(season){
    setSelectedSeason(prevSeason =>{
      if(prevSeason.includes(season)){
        return prevSeason.filter(season => season !== season)
      }else{
        return[...prevSeason,season]
      }
    })
  }

   const allCategory = MassiveProduct.map(product => product.category)
  const uniqueCategories = [...new Set(allCategory)]

  const CategoryToggle = function(category){
     setSelectedCategories(prevCategory =>{
      if(prevCategory.includes(category)){
        return prevCategory.filter(cat => cat !== category)
      }else{
        return[...prevCategory,category]
      }
    })
  }
  const FilteredAndSortProduct = function(){
    const filteredProduct = MassiveProduct.filter(product =>{
    if (!search) return true
    return product.name.toLowerCase().includes(search.toLowerCase())
    })
    const filteredByCategory = filteredProduct.filter(product =>{
      if(selectedCategories.length ===0) return true
      return selectedCategories.includes(product.category)
    })
      const filteredSeason = filteredByCategory.filter(product =>{
        if(selectedSeason.length === 0 ) return true
        return selectedSeason.includes(product.season)
      })
    

  const sortProducts = [...filteredSeason].sort((a,b)=>{
        if(sortOption === 'name-asc') return a.name.localeCompare(b.name)
        if(sortOption === 'name-desc') return b.name.localeCompare(a.name)
        if(sortOption === 'lowPrice') return a.price - b.price
        if(sortOption === 'highPrice') return b.price - a.price
          return 0 
      })
      return sortProducts
  }
  const filteredProducts = FilteredAndSortProduct()
  const handleResetFilters = () => {
  setSearch('')
  setSortOption('name-asc')
  setSelectedCategories([])
  setSelectedSeason([])
}

  return (
    <div className="catalog-page">
      <input type="text" className='SearchBtn' placeholder="🔍 Поиск товаров..." value={search} onChange={handleSearch}/>
      <div className="fullCategory">
        <div className='Allfilter'>
          <div className="catalog-category">
            <p>▼ Категория</p>
            <select value={sortOption} onChange={handleSortChange}>
              <option value="name-asc">По названию(а-я)</option>
              <option value="name-desc">По названию(я-а)</option>
              <option value="lowPrice">Сначало дешевые</option>
              <option value="highPrice">Сначало дорогие</option>
            </select>
          </div>
          <div className='ValueCategory'>
            <p>Категории:</p>
            <div className='checkboxSeason'>
              {uniqueCategories.map(category =>(
                <label key={category}>
                  <input type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => CategoryToggle(category)} />
                  {category}
                </label>   
              ))}
              </div>
              </div>
          <div className='ValueSeason'>
            <p>Сезоны:</p>
            <div className='checkboxSeason'>
              {uniqueSeason.map(season =>(
                <label key={season}>
                  <input type="checkbox"
                  checked={selectedSeason.includes(season)}
                  onChange={() => seasonToggle(season)} />
                  {season}
                </label>   
              ))}
              </div>
          </div>    
          
        </div>
        <div className="BtnFilter">
          <button className="breakFilter" onClick={handleResetFilters}>Сбросить фильтры</button>
        </div>
      </div>
      <div className="fullProduct">
        <h1 className='productCategory'>Всего товаров: {MassiveProduct.length}</h1>
        <h1 className='productCategory'>Показано: {filteredProducts.length}</h1>
      </div>
      <div className="products-container">
        {filteredProducts.map(product => (
          <ProductCard 
            key={product.id} 
            product={{
              ...product,
              imageSrc: getProductImage(product.image)
            }} 
          />
        ))}
      </div>
    </div>
  );
}