import db from '../utils/prisma.utils'
import { tasksData } from '../data/tasks.data';

const tasksSeeder = {
  async main () {
    for (const element of tasksData) {
      await db.tasks.create({
        data: element
      });
    }
  },
  order: 90,
  fileName: 'tasks.seeder.ts'
}
export default tasksSeeder
