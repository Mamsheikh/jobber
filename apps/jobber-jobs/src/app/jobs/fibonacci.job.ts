import { Job } from '../decorators/job.decorator';
import { AbstractJob } from './jobs';

@Job({
  name: 'Fibnonacci',
  description: 'Generate a Fibonncai sequence and store in in the DB.',
})
export class FibonacciJob extends AbstractJob {}
