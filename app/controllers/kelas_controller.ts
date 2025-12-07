import type { HttpContext } from '@adonisjs/core/http'

export default class KelasController {
    daftar_kelas({inertia}: HttpContext) {
        return inertia.render("admin/kelas/list")
    }

    jadwal_kelas({inertia}: HttpContext) {
        return inertia.render("admin/kelas/jadwal")
    }

    ruang_kelas({inertia}: HttpContext) {
        return inertia.render("admin/kelas/ruang")
    }
}