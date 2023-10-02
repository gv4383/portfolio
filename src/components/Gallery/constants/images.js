// Web Projects
import shelfie from '../../../assets/images/projects/shelfie_app_icon.png'
import shelfieAPI from '../../../assets/images/projects/shelfie_api_app_icon.png'
import houser from '../../../assets/images/projects/houser_app_icon.png'
import houserAPI from '../../../assets/images/projects/houser_api_app_icon.png'

// iOS Projects
import recipeMe from '../../../assets/images/projects/recipe_me_app_icon.png'
import rainBoot from '../../../assets/images/projects/rain_boot_app_icon.png'

export const IMAGES = [
  // Web Projects
  {
    id: '0',
    thumbnail: houser,
    caption: 'Houser Web',
    description: 'Manage your property and home listings.',
    technology: 'React | TypeScript | Redux | SCSS | HTML',
    link: 'https://github.com/gv4383/houser-web',
    github: 'https://github.com/gv4383/houser-web',
  },
  {
    id: '1',
    thumbnail: houserAPI,
    caption: 'Houser API',
    description: 'API for the Houser web application.',
    technology: 'Node.js | Express | TypeScript | Knex.js | PostgreSQL',
    link: 'https://github.com/gv4383/houser-api',
    github: 'https://github.com/gv4383/houser-api',
  },
  {
    id: '2',
    thumbnail: shelfie,
    caption: 'Shelfie Web',
    description: 'Keep inventory and manage your e-commerce products.',
    technology: 'React | TypeScript | SCSS | HTML',
    link: 'https://github.com/gv4383/shelfie-web',
    github: 'https://github.com/gv4383/shelfie-web',
  },
  {
    id: '3',
    thumbnail: shelfieAPI,
    caption: 'Shelfie API',
    description: 'API for the Shelfie web application.',
    technology: 'Node.js | Express | TypeScript',
    link: 'https://github.com/gv4383/shelfie-api',
    github: 'https://github.com/gv4383/shelfie-api',
  },
  // iOS Projects
  {
    id: '4',
    thumbnail: recipeMe,
    caption: 'RecipeMe',
    description: 'An easy way to keep track of your recipes.',
    technology: 'iOS | Swift | SwiftUI | Core Data | Combine',
    link: 'https://github.com/gv4383/RecipeMe',
    github: 'https://github.com/gv4383/RecipeMe',
  },
  {
    id: '5',
    thumbnail: rainBoot,
    caption: 'RainBoot',
    description: 'Track the weather in your local area.',
    technology: 'iOS | Swift | SwiftUI | Core Location | OpenWeather API',
    link: 'https://github.com/gv4383/RainBoot',
    github: 'https://github.com/gv4383/RainBoot',
  },
]
