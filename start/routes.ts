/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

const AdminController = () => import('#controllers/admin_controller')
const AuthController = () => import("#controllers/auth_controller")

router.on('/').renderInertia('home')
router.post('auth/login', [AuthController, 'attemptLogin']).use(middleware.guest())
router.get('auth/login', [AuthController, 'login']).use(middleware.guest())
router
    .get('admin', [AdminController, 'index'])
    .use(middleware.auth())
