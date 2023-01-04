import config from '~/config'

import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
import HeaderOnly from '~/layouts/HeaderOnly'
import Search from '~/pages/Search'

// import config.routes from '~/config/routes'

// các Router không cần đăng nhập vẫn xem được
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.Following, component: Following },
    { path: config.routes.Profile, component: Profile },
    { path: config.routes.Upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.Search, component: Search, layout: null },
];



// ngược lại cái trên
const privateRoutes = [

]

export { publicRoutes, privateRoutes } 