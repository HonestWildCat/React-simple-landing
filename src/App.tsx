import './App.css'

function App() {
  return (
  <div id='shop-main-box'>
    <Header/>
  </div>
  )
}

function Header(){
  return (
    <header>
      <div id='header-icon'>
        <a title="prom.ua" href="https://prom.ua/">
          <img id='header-icon-img' src="/prom-header-icon.webp" alt="Prom"/>
        </a>
      </div>

      <div id='header-search-box'>
        <div>
          <input id='product-search' type="search" name="search_term" placeholder="Я шукаю..."/>
          <button id='voice-search-btn' aria-label="Голосовий пошук">&#127897;</button>
          <button id='find-btn' type="submit" disabled>Знайти</button>
        </div>
      </div>

      <div id='header-buttons-box'>
        <button className='header-btn' type="button" title="Увійти">
          <img src="" alt="" />
          <span>Увійти</span>
        </button>
        <button className='header-btn' type="button" title="Обране">
          <img src="" alt="" />
          <span>Обране</span>
        </button>
        <button className='header-btn' type="button" title="Кошик">
          <img src="" alt="" />
          <span>Кошик</span>
        </button>
      </div>
    </header>
  )
}

export default App
