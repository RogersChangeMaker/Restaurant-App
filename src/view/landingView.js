export const landingView = function () {
  return `
    <div class= "landing-container">
    <nav class="nav-land">
      <div>🥭 Wase Recipes</div>
      <form class="search-form">
        <input type="text" class="search-input" placeholder="Search Recipe..."/>
        <button type="button" class="search-button">Search</button>
      </form>
      <div>BookMarks</div>
    </nav>
    <aside class="aside-land"></aside>
    <main class="main-land">
    <img class="main-image">

    <div class="description">
    <h1>Recipe</h1>
    <p>Recipe Description</p>
    </div>
    
    </main>
    </div>
    `;
};
