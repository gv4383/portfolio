import fetchTech from '../../../assets/images/projects/fetch_tech.png'
import soundSkwer from '../../../assets/images/projects/sound_skwerl.png'
import noDb from '../../../assets/images/projects/noDB.png'

export const IMAGES = [
    {
      id: '1',
      source: fetchTech,
      thumbnail: fetchTech,
      caption: 'Fetch Tech',
      description: 'Bringing the latest tech news to all tech enthusiasts.',
      technology: 'React | Redux | Express | Node | PostgreSQL | Ant Design',
      github: 'https://github.com/fetch-tech/fetch-tech',
      link: 'https://github.com/fetch-tech/fetch-tech'
    },
    {
      id: '2',
      source: soundSkwer,
      thumbnail: soundSkwer,
      caption: 'Sound Skwerl',
      description: 'Search for songs and create custom playlists.',
      technology: 'React | Redux | Express | Node | PostgreSQL | Spotify Web API',
      github: 'https://github.com/gv4383/project-playlist',
      link: 'http://soundskwerl.com'
    },
    {
      id: '3',
      source: noDb,
      thumbnail: noDb,
      caption: 'No Database Project',
      description: 'Customize a list of videogame heroes.',
      technology: 'React | Express | Node | Overwatch API',
      github: 'https://github.com/gv4383/no-db-project',
      link: 'https://github.com/gv4383/no-db-project'
    }
]
