import type { HttpContext } from '@adonisjs/core/http'

export default class KelasController {
    daftar_kelas({inertia}: HttpContext) {
        return inertia.render("admin/kelas/list")
    }

    form_buat_kelas({inertia}: HttpContext) {
        return inertia.render("admin/kelas/create")
    }

    jadwal_kelas({inertia}: HttpContext) {
        return inertia.render("admin/kelas/jadwal")
    }

    ruang_kelas({inertia}: HttpContext) {
        return inertia.render("admin/kelas/ruang")
    }
}