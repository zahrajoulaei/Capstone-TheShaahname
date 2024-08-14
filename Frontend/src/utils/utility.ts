// export const addFavorite = (id: any) => {
//     let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
//     if (!favorites.includes(id)) {
//       favorites.push(id);
//       localStorage.setItem('favorites', JSON.stringify(favorites));
//     }
//   };
  
//   export const removeFavorite = (id: any) => {
//     let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
//     favorites = favorites.filter((favoriteId: any) => favoriteId !== id);
//     localStorage.setItem('favorites', JSON.stringify(favorites));
//   };
  
//   export const toggleFavorite = (id: any) => {
//     let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
//     if (favorites.includes(id)) {
//       removeFavorite(id);
//     } else {
//       addFavorite(id);
//     }
//   };