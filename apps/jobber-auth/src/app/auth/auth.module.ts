import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secret: configService.getOrThrow('JWT_SECRET'),
        signOptions: {
          expiresIn: configService.getOrThrow('JWT_EXPIRATION_MS'),
        },
      }),
      inject: [ConfigService],
    }),
    PrismaModule,
  ],
  providers: [AuthResolver, AuthService],
})
export class AuthModule {}
