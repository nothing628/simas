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
const AuthController = () => import('#controllers/auth_controller')
const KelasController = () => import('#controllers/kelas_controller')

router.on('/').renderInertia('home')
router.post('auth/login', [AuthController, 'attemptLogin']).use(middleware.guest())
router.get('auth/login', [AuthController, 'login']).use(middleware.guest())
router.post('auth/logout', [AuthController, 'logout']).use(middleware.auth())

router
  .group(() => {
    router.get('/', [AdminController, 'index'])
    router.get('/kelas/list', [KelasController, 'daftar_kelas'])
    router.get('/kelas/create', [KelasController, 'form_buat_kelas'])
    router.get('/kelas/jadwal', [KelasController, 'jadwal_kelas'])
    router.get('/kelas/ruang', [KelasController, 'ruang_kelas'])
  })
  .prefix('admin')
  .middleware(middleware.auth())
