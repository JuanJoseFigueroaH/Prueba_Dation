import db from '../utils/prisma.utils'
import { tagsData } from '../data/tags.data';

const tagsSeeder = {
  async main () {
    for (const element of tagsData) {
      await db.tags.create({
        data: element
      });
    }
  },
  order: 90,
  fileName: 'tags.seeder.ts'
}
export default tagsSeeder
