 import Categories from './Categories'
import menuData from './Data'
import './App.css';
import Menu from './Menu'
import {useState} from 'react'
function App() {
  
  
  const ct = ['All',...new Set(menuData.map((md)=>{
    return md.category;
}))]

const [menuItems, setMenuItems]= useState(menuData)
const [categories, setCategory] = useState(ct);


const filterItems = (category)=>{
  
  if(category=== 'All'){
    setMenuItems(menuData);
    return;
  }
  else{
    const filteredItems = menuData.filter((item)=>item.category===category)
    setMenuItems(filteredItems)
  }
}
 
 

  return (
    <main>
      <section className="menu section">
    <Categories category={categories}  filterItems={filterItems} />
 
<Menu items = {menuItems}/>
</section>
    </main>

 
  );
}

export default App;
