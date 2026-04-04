import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';

@Controller()
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get('/healthz')
  healthz(): string {
    console.log('Chequei a saúde da aplicação!');
    return this.healthService.checkHealth();
  }

  @Get('/readyz')
  readyz(): string {
    console.log('Chequei a prontidão da aplicação!');
    return this.healthService.checkReady();
  }
}
