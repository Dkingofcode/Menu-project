import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './Title'
import MenuList from './data'
import Menu from './Menu'
import Categories from './Categories'


const tempCategories = MenuList.map((item) => item.category);
const tempSet = new Set(tempCategories);
const tempItems = ['all', ...tempSet];


const FilteredCategories = ["all", ...new Set(MenuList.map((item) => item.category))]

function App() {
  const [menu, setMenu] = useState(MenuList);
  const [category, setCategory] = useState(FilteredCategories);

  const FilteredItems = (category) => {
    if(category == "all"){
     setMenu(MenuList);
     return;
    }
   const newItems = MenuList.filter((item) => item.category === category);
    setMenu(newItems);
  };
  

  return (
       <main>
        <section className='Menu-container'>
        <Title text="Our Menu"/>
        <Categories category={category} filteredItems={FilteredItems} />
        <Menu menu={menu} />
        </section>
       </main>
  )
}

export default App
