import { IFileSeed } from '../interfaces/seed.interface';
// import seeders files
import usersSeeder from './users.seeder';
import tasksSeeder from './tasks.seeder';
import tagsSeeder from './tags.seeder'

// add seeders with IFileSeed format
export const messyFiles: IFileSeed[] = [
  usersSeeder,
  tasksSeeder,
  tagsSeeder
];

export function compare (a: IFileSeed, b: IFileSeed) {
  if (a.order < b.order) {
    return -1;
  }
  if (a.order > b.order) {
    return 1;
  }
  return 0;
}

const filesToSeed = messyFiles.sort(compare);

export default filesToSeed;
