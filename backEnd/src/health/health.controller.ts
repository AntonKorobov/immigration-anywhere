import { Controller, Get } from '@nestjs/common';
import {
  HealthCheckService,
  HttpHealthIndicator,
  HealthCheck,
} from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private healthCheckService: HealthCheckService,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.healthCheckService.check([]);
  }
}
