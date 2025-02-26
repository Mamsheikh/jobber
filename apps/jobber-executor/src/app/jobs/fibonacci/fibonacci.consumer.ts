import { Injectable, OnModuleInit } from '@nestjs/common';
import { FibonacciData } from './fibonacci-data.message';
import { iterate } from 'fibonacci';
import { PulsarClient, PulsarConsumer } from '@jobber/pulsar';
@Injectable()
export class FibonacciConsumer
  extends PulsarConsumer<FibonacciData>
  implements OnModuleInit
{
  constructor(pulsarClient: PulsarClient) {
    super(pulsarClient, 'Fibonacci');
  }

  protected async onMessage(data: FibonacciData): Promise<void> {
    const result = iterate(data.iterations);
    this.logger.log(result);
  }
}
