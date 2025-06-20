import Home from './paginas/Home'
import Projects from './paginas/Projects'
import Resume from './paginas/Resume'

const routes = [
    {path:"/", element:<Home/>},
    {path:"/Projects", element:<Projects/>},
    {path:"/Resume", element:<Resume/>}
];

export default routes;