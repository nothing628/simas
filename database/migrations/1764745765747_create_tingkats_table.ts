import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'tingkats'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('tingkat')
      table.integer('order')
      table.boolean('is_active').defaultTo(false)

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}